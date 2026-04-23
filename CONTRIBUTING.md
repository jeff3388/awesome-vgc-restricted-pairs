# Contributing to awesome-vgc-restricted-pairs

Thank you for helping improve this resource. PRs are welcome for data corrections, new pair analysis, and usage updates.

## What to Contribute

- **Updated usage %** — once Smogon ladder stats are published monthly (`gen9vgc2026regi`)
- **New pair analysis** — from Regional or International tournament results
- **Synergy score corrections** — with supporting reasoning or data
- **New restricted pairs** — if a previously unanalysed pair sees notable ladder or tournament usage

## Data Format

All pair data lives in [`data/pairs.json`](data/pairs.json). Each entry follows this schema:

```json
{
  "pair": ["Pokemon1", "Pokemon2"],
  "tier": "S | A | B | C",
  "estimatedUsage": "~X%",
  "synergyScore": 0,
  "sharedWeaknesses": ["Type1"],
  "uniqueStrengths": ["Description"],
  "recommendedSupport": ["Pokemon"],
  "speedProfile": {
    "p1": { "name": "Pokemon1", "baseSpeed": 0, "maxStat": 0, "nature": "Timid", "evs": 252 },
    "p2": { "name": "Pokemon2", "baseSpeed": 0, "maxStat": 0, "nature": "Jolly", "evs": 252 }
  },
  "offensiveMode": "physical | special | mixed",
  "weatherOrTerrain": "Sun | Rain | Sand | Snow | Electric Terrain | Psychic Terrain | Grassy Terrain | null",
  "notes": "Analysis notes."
}
```

## Synergy Score Guidelines

| Score Range | Tier | Meaning |
|-------------|------|---------|
| 75–100 | S | Dominant pair with minimal drawbacks |
| 60–74 | A | Strong pair with manageable weaknesses |
| 45–59 | B | Viable niche pair with notable drawbacks |
| Below 45 | C | Situational or heavily countered |

Score calculation:
```
Base: 70
+ (type coverage score × 2)        max +10
+ (speed interaction score × 1.5)  max +7.5
+ (offensive mode score × 1.5)     max +7.5
− (shared weakness penalty: −8 per, −15 if 4× shared)
+ (immunity bonus: +5 per immunity)
```

## Submission Process

1. Fork this repo
2. Edit `data/pairs.json` with your changes
3. Verify `node cli.js --list` runs without errors
4. Open a PR with a brief description of what changed and why

## Data Sources

Accepted sources for usage data:
- Smogon official stats (`smogon.com/stats/`)
- Pikalytics ranked ladder data
- Official tournament bracket team lists (RK9.gg)
- Named tournament team reports (Limitless VGC, Nugget Bridge)

Please cite your source in the PR description.
