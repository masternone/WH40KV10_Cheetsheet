import { Factions, Phases } from "./utilityTypes.ts";

export interface Stratagem {
  name: string;
  cost: number;
  when: Phases[];
  target: string;
  effect: string;
  restriction?: string;
}

export type StratagemByFaction = {
  [key in Factions]: Stratagem[]
}

export const stratagems: StratagemByFaction = {
  Core: [
    {
      name: 'Command Re-roll',
      cost: 1,
      when: ['Any'],
      target: 'Hit, Wound, Damage, save, Advance, Charge, Desperate Escape, Hazardous, #attacks',
      effect: 're-roll'
    },
    {
      name: 'Counter-Offensive',
      cost: 2,
      when: ['Active Fight', 'Inactive Fight'],
      target: 'One unit eligible to fight',
      effect: 'fight next'
    },
    {
      name: 'Epic Challenge',
      cost: 1,
      when: ['Active Fight', 'Inactive Fight'],
      target: 'Character',
      effect: 'Gain [PRECISION]'
    },
    {
      name: 'Insane Bravery',
      cost: 1,
      when: ['Active Command'],
      target: 'Failed Battle-shock',
      effect: 'treated as passed'
    },
    {
      name: 'Grenade',
      cost: 1,
      when: ['Active Shooting'],
      target: 'Grenade unit not Engagement and One Enemy unit not Engagement and 8"',
      effect: '6D6 4+ 1mw'
    },
    {
      name: 'Tank Shock',
      cost: 1,
      when: ['Active Charge'],
      target: 'Vehicle that successfully charged and One Enemy unit in Engagement with Vehicle',
      effect: 'SD6 (S+2D6 if S>T)) 5+ 1mw max 6'
    },
    {
      name: 'Rapid Ingress',
      cost: 1,
      when: ['Inactive Move'],
      target: 'Unit in Reserves',
      effect: 'Arrive on battlefield',
      restriction: 'Only if eligible in this battle round'
    },
    {
      name: 'Fire Overwatch',
      cost: 1,
      when: ['Inactive Move', 'Inactive Charge'],
      target: 'Unit within 24" of enemy unit',
      effect: 'Unit Shoots',
      restriction: 'Unmodified 6 required to hit. Once per turn'
    },
    {
      name: 'Go to Ground',
      cost: 1,
      when: ['Inactive Shooting'],
      target: 'Infantry Unit',
      effect: '6++ and Benefit of Cover'
    },
    {
      name: 'Smokescreen',
      cost: 1,
      when: ['Inactive Shooting'],
      target: 'Smoke Unit',
      effect: 'Benefit of Cover and Stealth'
    },
    {
      name: 'Heroic Intervention',
      cost: 2,
      when: ['Inactive Charge'],
      target: 'Unit within 6" eligible to charge',
      effect: 'Charge with no benifit',
      restriction: 'Vehicle only if Walker'
    }
  ],
  'Thousand Sons': [
    {
      name: 'Psychic Dominion',
      cost: 1,
      when: ['Any'],
      target: 'Enemy Unit Targeting and Unit targeted',
      effect: 'Enemy Unit Psychic weapons gain [HAZARDOUS] and Unit gains 4+++ against Psychic attacks'
    },
    {
      name: 'Destined by Fate',
      cost: 1,
      when: ['Any'],
      target: 'Psyker who failed a saving throw',
      effect: 'Damage changed to 0'
    },
    {
      name: 'Devastating Sorcery',
      cost: 1,
      when: ['Active Shooting'],
      target: 'Unit to shoot',
      effect: 'Psychic Attacks re-roll Hit and Wound'
    },
    {
      name: 'Ensorcelled InFusion',
      cost: 1,
      when: ['Active Shooting'],
      target: 'Unit to shoot',
      effect: 'Bolt weapons gain [PSYCHIC] S5'
    },
    {
      name: 'Sorcerous Might',
      cost: 1,
      when: ['Active Shooting'],
      target: 'Unit to shoot',
      effect: 'Psychic weapons add 9" to range'
    },
    {
      name: 'Warp Sight',
      cost: 1,
      when: ['Active Shooting'],
      target: 'Units and Enemy Unit Visible to one Unit',
      effect: 'Psychic weapons gain [INDIRECT FIRE] and [IGNORES COVER]'
    }
  ],
  'Cabal of Sorcerers': [
    {
      name: 'Weaver of Fates',
      cost: 2,
      when: ['Any'],
      target: 'Psyker Unit',
      effect: 'Unit within 18" re-roll saving throw'
    },
    {
      name: 'Temporal Serge',
      cost: 5,
      when: ['Active Shooting'],
      target: 'Psyker Unit',
      effect: 'Unit within 18" not Engagement makes a Normal move',
      restriction: 'no charge'
    },
    {
      name: 'Echoes from the Warp',
      cost: 6,
      when: ['Any'],
      target: 'Psyker Unit',
      effect: 'Use Stratagem for 0CP even if already used'
    },
    {
      name: 'Doombolt',
      cost: 7,
      when: ['Active Shooting'],
      target: 'Psyker Unit',
      effect: 'Enemy Unit within 18" and Visible 1D6 1: D3mw 2-5: D3+3mw 6: D3+6mw'
    },
    {
      name: 'Twist of Fate',
      cost: 9,
      when: ['Active Shooting'],
      target: 'Psyker Unit',
      effect: 'Enemy Unit within 18" and Visible cannot use armor saves'
    }
  ]
}