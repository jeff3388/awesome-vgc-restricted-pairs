# VGC Restricted Pairs — Regulation I Synergy Analysis (2026)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Regulation](https://img.shields.io/badge/regulation-I-brightgreen.svg)
![Format](https://img.shields.io/badge/format-VGC%202026-red.svg)
![Restricted](https://img.shields.io/badge/restricted_per_team-2-orange.svg)
![Last Commit](https://img.shields.io/github/last-commit/twjojo/awesome-vgc-restricted-pairs)

Deep-dive analysis of **every viable Regulation I restricted legendary pair**: type coverage overlap, offensive synergy, speed interaction, and why each combination works (or doesn't). Structured data for teambuilders and researchers.

In Regulation I, the most important teambuilding decision is your **restricted pair** — not your individual restricted picks. This repository documents the theory behind each pairing.

**Last updated:** 2026-04-17

---

## Contents

- [Why Pairs Matter in Reg I](#why-pairs-matter-in-reg-i)
- [S-Tier Pairs — Deep Analysis](#s-tier-pairs--deep-analysis)
- [A-Tier Pairs](#a-tier-pairs)
- [B-Tier Pairs](#b-tier-pairs)
- [All Pair Data (JSON)](#all-pair-data-json)
- [Pair Evaluation Framework](#pair-evaluation-framework)
- [Interactive Pair Analyzer](#interactive-pair-analyzer)

---

## Why Pairs Matter in Reg I

Regulation I (April 2026) introduced the second restricted slot. This fundamentally changed teambuilding:

| Metric | Regulation G (1 restricted) | Regulation I (2 restricted) |
|--------|----------------------------|----------------------------|
| Teambuilding complexity | Choose 1 core + 5 support | Choose 2 cores + 4 support |
| Shared weaknesses | 1 Pokémon's weaknesses | **Combined weakness profile** |
| Speed planning | Plan for 1 restricted | Plan for 2 simultaneous restricted threats |
| Opponent guessing | Guess 1 restricted | Guess 2 restricted — exponentially harder |
| Meta pairs (22 choose 2) | 22 possible singles | **231 possible pairs** |

The pair selection process involves **6 axes** of evaluation, each impacting viability.

---

## S-Tier Pairs — Deep Analysis

### 1. Calyrex-Shadow + Koraidon ⭐ #1 Meta Pair (~24%)

**Type profile:**

| Attack Type | Calyrex-Shadow (Psychic/Ghost) | Koraidon (Fighting/Dragon) |
|------------|-------------------------------|--------------------------|
| Ghost | 0× immune | 1× neutral |
| Dark | 2× weak | 1× neutral |
| Fairy | 1× neutral | 2× weak |
| Dragon | 1× neutral | 2× weak |
| Flying | 1× neutral | 2× weak |

**Shared weaknesses:** Dark, Fairy (both are present but distributed — Calyrex handles Ghost-immune Normal-types, Koraidon handles physical walls)

**Why this works:**
- Calyrex-Shadow (150 base Spd, 165 SpAtk) applies immediate special pressure with Astral Barrage spread
- Koraidon's Orichalcum Pulse auto-Sun boosts Flare Blitz + Collision Course physical output
- Sun + Astral Barrage forces opponent to split defensive preparation between physical and special
- Flutter Mane under Protosynthesis becomes a third nuke in Sun, creating a 3-attacker threat
- **Key support:** Incineroar (Fake Out), Tornadus (Tailwind), Amoonguss (redirect)

**Speed interaction:**
- Calyrex-Shadow: 222 (Timid 252) — fastest restricted
- Koraidon: 179 (Jolly 252) — fast enough to threaten before most restricteds
- Under Tailwind: Koraidon at 358 clears all non-Calyrex threats

**Score:** 82/100 — Shared weakness to Fairy/Dark balanced by overwhelming offensive power

---

### 2. Calyrex-Shadow + Kyogre ⭐ #2 Meta Pair (~18%)

**Type profile:**

| Attack Type | Calyrex-Shadow (Psychic/Ghost) | Kyogre (Water) |
|------------|-------------------------------|---------------|
| Electric | 1× | 2× weak |
| Grass | 1× | 2× weak |
| Dark | 2× weak | 1× |
| Ghost | 0× immune | 1× |

**Shared weaknesses:** None shared — highly complementary defensive profiles

**Why this works:**
- Dual special nukes — both have 150+ SpAtk
- Rain removes Calyrex-Shadow's Ground weakness (Earthquake now hits Kyogre)
- Kyogre's Origin Pulse spread + Rain-boosted Water Spout provides unparalleled spread damage
- Opponent cannot wall both with a single Pokémon — physical walls die to Kyogre, special walls take Astral Barrage
- Calyrex-Shadow's Ghost type provides Natural Cure-like immunity to Normal-type redirection

**Speed interaction:**
- Calyrex-Shadow: 222 (Timid 252)
- Kyogre: 156 (Timid 252) — needs Tailwind or Scarf vs faster threats
- Common set: Scarf Kyogre (234 speed) outspeeds Calyrex-Shadow

**Score:** 79/100 — No shared weaknesses; slight issue is both are special attackers, making physical walls harder to break

---

### 3. Calyrex-Shadow + Zacian ⭐ #3 Meta Pair (~12%)

**Type profile:**

| Attack Type | Calyrex-Shadow (Psychic/Ghost) | Zacian (Fairy/Steel) |
|------------|-------------------------------|---------------------|
| Ghost | 0× immune | 1× |
| Dark | 2× weak | 1× resist |
| Fire | 1× | 2× weak |
| Ground | 1× | 2× weak |
| Fighting | 1× | 2× resist |

**Shared weaknesses:** None — Steel/Fairy answers Dark-types that wall Calyrex-Shadow's Ghost moves

**Why this works:**
- Zacian's Steel/Fairy typing answers Dark-types (Incineroar, Grimmsnarl) that would otherwise wall Astral Barrage
- Intrepid Sword +1 Atk on entry + 148 base Speed → Zacian threatens everything after entry
- Both run 252+ Speed, enabling full Tailwind mode without speed EV conflicts
- Zacian's Fairy STAB neutralizes Dragon-types that resist Calyrex-Shadow's Psychic/Ghost moves

**Speed interaction:**
- Calyrex-Shadow: 222 (Timid 252)
- Zacian: 200 (Jolly 252)
- Combined: cover every restricted in the metagame without Tailwind

**Score:** 76/100 — Excellent defensive synergy; main issue is Fire/Ground vulnerability

---

## A-Tier Pairs

### Calyrex-Shadow + Calyrex-Ice (Twin Crown, ~8%)

**The unique dual-mode pair:**
- **Fast mode:** Calyrex-Shadow (222 Spd) + speed control via Tailwind
- **Trick Room mode:** Calyrex-Ice (50 Spd) moves first under TR, 165 Atk + Glacial Lance spread
- Opponent **cannot prepare for both modes simultaneously**
- Critical preparation point: Calyrex-Ice needs TR setters (Cresselia, Hatterene, Farigiraf)

| Axis | Rating |
|------|--------|
| Speed control flexibility | S — two completely different modes |
| Type coverage | A — Ghost/Psychic + Psychic/Ice |
| Weakness profile | B — both weak to Dark and Ghost |
| Support requirements | C — needs dedicated mode support |

**Score:** 71/100

---

### Koraidon + Kyogre (Dual Weather, ~7%)

**Weather war forcing pair:**
- Koraidon's Orichalcum Pulse (auto-Sun) vs Kyogre's Drizzle (auto-Rain) — whoever is in controls weather
- Strategy: **Force opponent to commit** to a single weather answer; when they bring Rain counter, pivot to Koraidon's Sun offense
- Common strategy: Lead Kyogre for Rain OHKO opportunities, switch to Koraidon for Sun setup

**Score:** 68/100 — Unique anti-meta angle but incoherent internal synergy

---

### Miraidon + Calyrex-Shadow (~5%)

**Dual special nuke pair:**
- Both benefit from Psychic Terrain (blocks priority)
- Electric Terrain (Hadron Engine) + Psychic Terrain are mutually exclusive — typically choose one per game
- Calyrex-Shadow's Psychic Terrain + Expanding Force double-spread option
- Shared weakness: Both physically frail

**Score:** 66/100 — High ceiling, complex execution

---

## B-Tier Pairs

| Pair | Est. % | Key Synergy | Main Weakness |
|------|--------|------------|---------------|
| Koraidon + Groudon | ~4% | Double Sun — Drought guarantee; Groudon Ground covers Electric weakness | Both slow for a speed pair |
| Kyogre + Calyrex-Ice | ~3% | Weather (Rain) + Trick Room — two separate game plans | Calyrex-Ice needs TR support not covered by Kyogre |
| Calyrex-Shadow + Lugia | ~2% | Multiscale absorbs hits aimed at Calyrex; Ghost nuke threatens | Lugia offensive ceiling low; needs specific role |
| Zacian + Zamazenta | ~1% | Both Steel-type synergy; Intrepid Sword + Dauntless Shield; Fairy/Fighting coverage | Shared Fire/Ground weakness; similar speed ranges |
| Miraidon + Iron Hands | ~6% | Hadron Engine × Quark Drive — both scale from same terrain | Iron Hands not a restricted, but paired as restricted support |

---

## All Pair Data (JSON)

```json
[
  {
    "pair": ["Calyrex-Shadow", "Koraidon"],
    "tier": "S",
    "estimatedUsage": "~24%",
    "synergyScore": 82,
    "sharedWeaknesses": ["Dark", "Fairy"],
    "uniqueStrengths": ["Sun auto-weather", "Dual physical+special", "Speed control via Tailwind"],
    "recommendedSupport": ["Incineroar", "Tornadus", "Amoonguss", "Flutter Mane"],
    "speedProfile": {
      "p1": { "base": 150, "maxStat": 222 },
      "p2": { "base": 135, "maxStat": 179 }
    }
  },
  {
    "pair": ["Calyrex-Shadow", "Kyogre"],
    "tier": "S",
    "estimatedUsage": "~18%",
    "synergyScore": 79,
    "sharedWeaknesses": [],
    "uniqueStrengths": ["No shared weakness", "Dual special nukes", "Rain removes Ground weakness"],
    "recommendedSupport": ["Incineroar", "Amoonguss", "Farigiraf", "Tornadus"],
    "speedProfile": {
      "p1": { "base": 150, "maxStat": 222 },
      "p2": { "base": 90, "maxStat": 156 }
    }
  },
  {
    "pair": ["Calyrex-Shadow", "Zacian"],
    "tier": "S",
    "estimatedUsage": "~12%",
    "synergyScore": 76,
    "sharedWeaknesses": [],
    "uniqueStrengths": ["Steel answers Dark-types walling Ghost", "Both max speed", "Fairy neutralizes Dragon resists"],
    "recommendedSupport": ["Incineroar", "Tornadus", "Amoonguss"],
    "speedProfile": {
      "p1": { "base": 150, "maxStat": 222 },
      "p2": { "base": 148, "maxStat": 200 }
    }
  },
  {
    "pair": ["Calyrex-Shadow", "Calyrex-Ice"],
    "tier": "A",
    "estimatedUsage": "~8%",
    "synergyScore": 71,
    "sharedWeaknesses": ["Dark", "Ghost"],
    "uniqueStrengths": ["Dual-mode (fast/TR)", "Opponent cannot prepare for both", "165 Atk + 165 SpAtk"],
    "recommendedSupport": ["Cresselia", "Incineroar", "Amoonguss"],
    "speedProfile": {
      "p1": { "base": 150, "maxStat": 222 },
      "p2": { "base": 50, "maxStat": 76 }
    }
  },
  {
    "pair": ["Koraidon", "Kyogre"],
    "tier": "A",
    "estimatedUsage": "~7%",
    "synergyScore": 68,
    "sharedWeaknesses": [],
    "uniqueStrengths": ["Dual weather forces commitment", "Sun vs Rain pivot strategy"],
    "recommendedSupport": ["Incineroar", "Amoonguss", "Tornadus"],
    "speedProfile": {
      "p1": { "base": 135, "maxStat": 179 },
      "p2": { "base": 90, "maxStat": 156 }
    }
  }
]
```

---

## Pair Evaluation Framework

When evaluating any restricted pair across Regulation I, score each axis 1–5:

| Axis | Weight | Questions to Ask |
|------|--------|-----------------|
| **Type coverage** | ×2 | Do the two restricted share critical weaknesses? Does one cover the other's gaps? |
| **Speed interaction** | ×1.5 | Does the pair need Tailwind? Does it have TR mode? Does speed conflict force sacrificed EVs? |
| **Offensive mode** | ×1.5 | Physical + Special? Spread + Single? Can both attack simultaneously? |
| **Weather/terrain** | ×1 | Does one restricted provide auto-weather/terrain that the other benefits from? |
| **Support efficiency** | ×1 | How many support slots does the pair require? Simpler = better. |
| **Ghost immunity** | ×1 | Does the pair answer Normal-types that wall Astral Barrage (most Ghost-immune Pokémon)? |

**Total score formula:**
```
Synergy = 70 + (type score × 2) + (speed score × 1.5) + (mode score × 1.5)
        - (shared weak penalty: −8 per, −15 if 4× shared)
        + (immune bonus: +5 per immunity in the pair)
```

---

## Interactive Pair Analyzer

For interactive pair comparison with type weakness heatmaps, speed calculations, and synergy scoring, use the [PokeStats.cc Restricted Pair Analyzer](https://pokestats.cc/pokedex/pair-analyzer) — select any two of the 22 Regulation I restricted Pokémon and get instant analysis.

---

## Data Sources

- Usage estimates: online ranked ladder observation + Discord tournament reports (April 2026, Week 1–2)
- Pair frequency: estimated from community reports and early online cups
- Synergy scores: calculated using the [PokeStats.cc pair evaluation formula](https://pokestats.cc/pokedex/pair-analyzer)
- Base stats: official Pokémon Scarlet & Violet

*Usage % will be updated with Smogon official stats (May 2026, `gen9vgc2026regi`).*

---

## Contributing

PRs welcome for:
- Updated usage % once Smogon ladder stats are published
- New pair analysis from Regional tournaments
- Corrections to synergy scores with supporting data

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

## Related Resources

- [vgc-restricted-tier-list](../vgc-restricted-tier-list) — Individual restricted tier rankings and 22-Pokémon pool
- [vgc-speed-tiers](../vgc-speed-tiers) — Speed benchmark comparisons for all restricted picks
- [gen9-vgc-meta-snapshots](../gen9-vgc-meta-snapshots) — Monthly meta snapshots tracking pair frequency changes

---

## License

MIT © [twjojo](https://github.com/twjojo)
