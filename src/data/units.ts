import { Factions } from "./utilityTypes.ts";

export interface UnitStats {
  move: number;
  toughness: number;
  save: string;
  wounds: number;
  leadership: number;
  objectiveControl: number;
}

export interface Unit {
  composition: { [models: number]: number };
  abilities: string[];
  stats: UnitStats;
  weapons: string[];
  equipment?: string[];
}

export interface UnitsDictionary {
  [name: string]: Unit
}

export type UnitsByFaction = {
  [key in Factions]?: UnitsDictionary
}

export const units: UnitsByFaction = {
  'Thousand Sons': {
    'Magnus': {
      composition: { 1: 410 },
      abilities: ['DD D6', 'Deep Strike', 'Cabal 4', 'Unearthly Power', 'Lord of the Planet of the Sorcerers (Aura)'],
      stats: {
        move: 14,
        toughness: 11,
        save: '2+/4++',
        wounds: 16,
        leadership: 5,
        objectiveControl: 6
      },
      weapons: ['Gaze of Magnus', 'Tzeentch`s Firestorm', 'Blade of Magnus - strike', 'Blade of Magnus - sweep'],
    },
    'Exalted Sorcerer': {
      composition: { 1: 90 },
      abilities: ['Leader', 'Cabal 2', 'Arcane Shield', 'Rebind Rubricae'],
      stats: {
        move: 6,
        toughness: 4,
        save: '3+/4++',
        wounds: 5,
        leadership: 6,
        objectiveControl: 1
      },
      weapons: ['Astral Blast', 'Inferno bolt pistol EX', 'Plasma pistol - standard EX', 'Plasma pistol - supercharge EX', 'Warpflame pistol', 'Force weapon EX', 'Prosperine khopesh'],
    },
    'Thousand Sons Sorcerer': {
      composition: { 1: 85 },
      abilities: ['Leader', 'Cabal 1', 'Empyric Guidance', 'Illusions of Tzeentch'],
      stats: {
        move: 6,
        toughness: 4,
        save: '3+/5++',
        wounds: 4,
        leadership: 6,
        objectiveControl: 1
      },
      weapons: ['Fires of the Abyss', 'Inferno bolt pistol EX', 'Plasma pistol - standard EX', 'Plasma pistol - supercharge EX', 'Warpflame pistol', 'Force weapon'],
    },
    'Thousand Sons Sorcerer in Terminator Armor': {
      composition: { 1: 105 },
      abilities: ['Leader', 'Cabal 2', 'Deep Strike', 'Empyric Guidance', 'Marked by Fate'],
      stats: {
        move: 5,
        toughness: 5,
        save: '2+/4++',
        wounds: 5,
        leadership: 6,
        objectiveControl: 1
      },
      weapons: ['Coruscating Flames', 'Inferno combi-bolter', 'Inferno combi-weapon', 'Force weapon ST', 'Prosperine khopesh'],
    },
    'Infernal Master': {
      composition: { 1: 75 },
      abilities: ['Leader', 'Cabal 2', 'Malefic Maelstorm', 'Glimpse of Eternity'],
      stats: {
        move: 6,
        toughness: 4,
        save: '3+/5++',
        wounds: 4,
        leadership: 6,
        objectiveControl: 1
      },
      weapons: ['Inferno bolt pistol EX', 'Screamer Invocation - witchfire', 'Screamer Invocation - focused witchfire', 'Force weapon'],
    },
    'Thousand Sons Daemon Prince': {
      composition: { 1: 210 },
      abilities: ['DD D3', 'Cabal 2', 'The Weave of Fate (Psychic)', 'Glamour of Tzeentch (Aura, Psychic)'],
      stats: {
        move: 7,
        toughness: 10,
        save: '2+/4++',
        wounds: 10,
        leadership: 6,
        objectiveControl: 3
      },
      weapons: ['Infernal cannon', 'Hellforged weapons - strike', 'Hellforged weapons - sweep'],
    },
    'Rubric Marines': {
      composition: { 5: 95, 10: 190 },
      abilities: ['Battleline', 'Cabal 1', 'Bringers of Change'],
      stats: {
        move: 5,
        toughness: 4,
        save: '3+/5++',
        wounds: 2,
        leadership: 6,
        objectiveControl: 2
      },
      weapons: ['Inferno bolt pistol', 'Inferno boltgun', 'Plasma pistol - standard', 'Plasma pistol - supercharge', 'Soulreaper cannon', 'Warpsmite', 'Warpflame pistol', 'Warpflamer', 'Close combat weapon', 'Force weapon R'],
    },
    'Scarab Occult Terminators': {
      composition: { 5: 205, 10: 410 },
      abilities: ['Deep Strike', 'Cabal 1', 'Implacable Guardians'],
      stats: {
        move: 5,
        toughness: 4,
        save: '2+/4++',
        wounds: 3,
        leadership: 6,
        objectiveControl: 1
      },
      weapons: ['Heavy warpflamer', 'Hellfyre missile', 'Inferno combi-bolter', 'Soulreaper cannon', 'Warpsmite SOT', 'Force weapon', 'Prosperine khopesh'],
    },
    'Mutalith Vortex Beast': {
      composition: { 1: 145 },
      abilities: ['DD D6', 'Mutating Vortex (Aura)', 'Immaterial Flare (Aura)'],
      stats: {
        move: 10,
        toughness: 10,
        save: '4+/5++5+++',
        wounds: 13,
        leadership: 6,
        objectiveControl: 4
      },
      weapons: ['Warp vortex - blast', 'Warp vortex - beam', 'Warp vortex - torrent', 'Betentacled maw', 'Mutalith claws'],
    }
  }
}