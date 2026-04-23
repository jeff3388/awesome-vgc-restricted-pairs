#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data', 'pairs.json');

function loadPairs() {
  if (!fs.existsSync(DATA_FILE)) {
    console.error('Error: data/pairs.json not found. Run from repo root.');
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
}

function printPair(p) {
  console.log(`\n${p.pair.join(' + ')} [${p.tier}-Tier]`);
  console.log(`  Usage      : ${p.estimatedUsage}`);
  console.log(`  Synergy    : ${p.synergyScore}/100`);
  console.log(`  Weaknesses : ${p.sharedWeaknesses.length ? p.sharedWeaknesses.join(', ') : 'None shared'}`);
  console.log(`  Mode       : ${p.offensiveMode} | Weather/Terrain: ${p.weatherOrTerrain || 'None'}`);
  console.log(`  Support    : ${p.recommendedSupport.join(', ')}`);
  console.log(`  Speed      : ${p.speedProfile.p1.name} ${p.speedProfile.p1.maxStat} | ${p.speedProfile.p2.name} ${p.speedProfile.p2.maxStat}`);
  console.log(`  Notes      : ${p.notes}`);
}

function printHelp() {
  console.log(`
VGC Restricted Pairs CLI — Regulation I (2026)

Usage:
  node cli.js [options]

Options:
  --tier <S|A|B>          Filter pairs by tier
  --pokemon <name>        Show pairs containing a specific Pokémon
  --weather <sun|rain>    Filter pairs by weather/terrain type
  --mode <physical|special|mixed>  Filter by offensive mode
  --top <n>               Show top N pairs by synergy score (default: all)
  --list                  List all pairs with tier and score only
  --help                  Show this help

Examples:
  node cli.js --tier S
  node cli.js --pokemon Kyogre
  node cli.js --weather sun
  node cli.js --top 3
  node cli.js --list
`);
}

const args = process.argv.slice(2);

if (!args.length || args.includes('--help')) {
  printHelp();
  process.exit(0);
}

const pairs = loadPairs();
let results = [...pairs];

// --tier
const tierIdx = args.indexOf('--tier');
if (tierIdx !== -1) {
  const tier = args[tierIdx + 1]?.toUpperCase();
  results = results.filter(p => p.tier === tier);
}

// --pokemon
const pkmnIdx = args.indexOf('--pokemon');
if (pkmnIdx !== -1) {
  const name = args[pkmnIdx + 1]?.toLowerCase();
  results = results.filter(p =>
    p.pair.some(n => n.toLowerCase().includes(name))
  );
}

// --weather
const wxIdx = args.indexOf('--weather');
if (wxIdx !== -1) {
  const wx = args[wxIdx + 1]?.toLowerCase();
  results = results.filter(p =>
    p.weatherOrTerrain?.toLowerCase().includes(wx)
  );
}

// --mode
const modeIdx = args.indexOf('--mode');
if (modeIdx !== -1) {
  const mode = args[modeIdx + 1]?.toLowerCase();
  results = results.filter(p => p.offensiveMode === mode);
}

// --top
const topIdx = args.indexOf('--top');
if (topIdx !== -1) {
  const n = parseInt(args[topIdx + 1], 10);
  results = results
    .sort((a, b) => b.synergyScore - a.synergyScore)
    .slice(0, n);
}

// --list
if (args.includes('--list')) {
  console.log('\nAll Regulation I Restricted Pairs:\n');
  results.forEach(p => {
    console.log(
      `  [${p.tier}] ${p.pair.join(' + ')}`.padEnd(50) +
      `Score: ${p.synergyScore}/100  Usage: ${p.estimatedUsage}`
    );
  });
  console.log();
  process.exit(0);
}

if (!results.length) {
  console.log('\nNo pairs found matching your filters.\n');
} else {
  results.forEach(printPair);
  console.log();
}
