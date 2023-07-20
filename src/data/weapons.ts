export type WeaponKeyWords =
  | 'ANTI-INFANTRY 4+'
  | 'ANTI-MONSTER 4+'
  | 'ANTI-VEHICLE 4+'
  | 'BLAST'
  | 'DEVASTATING WOUNDS'
  | 'HAZARDOUS'
  | 'IGNORES COVER'
  | 'LETHAL HITS'
  | 'PISTOL'
  | 'PSYCHIC'
  | 'RAPID FIRE 1'
  | 'RAPID FIRE 2'
  | 'SUSTAINED HITS 1'
  | 'SUSTAINED HITS 3'
  | 'TORRENT'

export interface WeaponProfile {
  range: 'M' | number;
  attacks: string | number;
  skill: 'N/A' | number;
  strength: number;
  armorPenetration: number;
  damage: string | number;
  keyWords?: WeaponKeyWords[];
}

export interface WeaponDictionary {
  [name: string]: WeaponProfile
}

export const weapons: WeaponDictionary = {
  'Gaze of Magnus': {
    range: 24,
    attacks: '3D3',
    skill: 2,
    strength: 9,
    armorPenetration: 2,
    damage: 3,
    keyWords: ['DEVASTATING WOUNDS', 'PSYCHIC']
  },
  'Tzeentch`s Firestorm': {
    range: 24,
    attacks: 'D6+3',
    skill: 2,
    strength: 5,
    armorPenetration: 1,
    damage: 2,
    keyWords: ['BLAST', 'PSYCHIC']
  },
  'Blade of Magnus - strike': {
    range: 'M',
    attacks: 7,
    skill: 2,
    strength: 16,
    armorPenetration: 3,
    damage: 3,
    keyWords: ['DEVASTATING WOUNDS', 'PSYCHIC']
  },
  'Blade of Magnus - sweep': {
    range: 'M',
    attacks: 14,
    skill: 2,
    strength: 8,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['PSYCHIC']
  },
  'Astral Blast': {
    range: 18,
    attacks: 'D6',
    skill: 2,
    strength: 6,
    armorPenetration: 2,
    damage: 'D3',
    keyWords: ['BLAST', 'DEVASTATING WOUNDS', 'PSYCHIC']
  },
  'Inferno bolt pistol EX': {
    range: 12,
    attacks: 1,
    skill: 2,
    strength: 4,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['PISTOL']
  },
  'Inferno bolt pistol': {
    range: 12,
    attacks: 1,
    skill: 3,
    strength: 4,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['PISTOL']
  },
  'Inferno boltgun': {
    range: 24,
    attacks: 2,
    skill: 3,
    strength: 4,
    armorPenetration: 1,
    damage: 1
  },
  'Inferno combi-bolter': {
    range: 24,
    attacks: 2,
    skill: 3,
    strength: 4,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['RAPID FIRE 2']
  },
  'Inferno combi-weapon': {
    range: 24,
    attacks: 2,
    skill: 4,
    strength: 4,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['ANTI-INFANTRY 4+', 'DEVASTATING WOUNDS', 'RAPID FIRE 1']
  },
  'Plasma pistol - standard EX': {
    range: 12,
    attacks: 1,
    skill: 2,
    strength: 7,
    armorPenetration: 2,
    damage: 1,
    keyWords: ['PISTOL']
  },
  'Plasma pistol - supercharge EX': {
    range: 12,
    attacks: 1,
    skill: 2,
    strength: 8,
    armorPenetration: 3,
    damage: 2,
    keyWords: ['PISTOL', 'HAZARDOUS']
  },
  'Plasma pistol - standard': {
    range: 12,
    attacks: 1,
    skill: 3,
    strength: 7,
    armorPenetration: 2,
    damage: 1,
    keyWords: ['PISTOL']
  },
  'Plasma pistol - supercharge': {
    range: 12,
    attacks: 1,
    skill: 3,
    strength: 8,
    armorPenetration: 3,
    damage: 2,
    keyWords: ['PISTOL', 'HAZARDOUS']
  },
  'Warpflame pistol': {
    range: 12,
    attacks: 'D6',
    skill: 'N/A',
    strength: 3,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['IGNORES COVER', 'PISTOL', 'TORRENT']
  },
  'Warpflamer': {
    range: 12,
    attacks: 'D6',
    skill: 'N/A',
    strength: 4,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['IGNORES COVER', 'TORRENT']
  },
  'Heavy warpflamer': {
    range: 12,
    attacks: 'D6',
    skill: 'N/A',
    strength: 5,
    armorPenetration: 2,
    damage: 1,
    keyWords: ['IGNORES COVER', 'TORRENT']
  },
  'Force weapon EX': {
    range: 'M',
    attacks: 5,
    skill: 2,
    strength: 6,
    armorPenetration: 1,
    damage: 'D3',
    keyWords: ['PSYCHIC']
  },
  'Force weapon ST': {
    range: 'M',
    attacks: 5,
    skill: 3,
    strength: 6,
    armorPenetration: 1,
    damage: 'D3',
    keyWords: ['PSYCHIC']
  },
  'Force weapon': {
    range: 'M',
    attacks: 4,
    skill: 3,
    strength: 6,
    armorPenetration: 1,
    damage: 'D3',
    keyWords: ['PSYCHIC']
  },
  'Force weapon R': {
    range: 'M',
    attacks: 3,
    skill: 3,
    strength: 6,
    armorPenetration: 1,
    damage: 'D3',
    keyWords: ['PSYCHIC']
  },
  'Prosperine khopesh': {
    range: 'M',
    attacks: 4,
    skill: 3,
    strength: 5,
    armorPenetration: 2,
    damage: 2
  },
  'Fires of the Abyss': {
    range: 12,
    attacks: '2D6',
    skill: 2,
    strength: 5,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['PISTOL', 'PSYCHIC', 'SUSTAINED HITS 3']
  },
  'Coruscating Flames': {
    range: 18,
    attacks: 3,
    skill: 3,
    strength: 4,
    armorPenetration: 3,
    damage: 2,
    keyWords: ['ANTI-MONSTER 4+', 'ANTI-VEHICLE 4+', 'DEVASTATING WOUNDS', 'PSYCHIC']
  },
  'Screamer Invocation - witchfire': {
    range: 18,
    attacks: '2D3',
    skill: 'N/A',
    strength: 6,
    armorPenetration: 2,
    damage: 1,
    keyWords: ['TORRENT', 'PSYCHIC']
  },
  'Screamer Invocation - focused witchfire': {
    range: 18,
    attacks: '2D6',
    skill: 'N/A',
    strength: 6,
    armorPenetration: 2,
    damage: 1,
    keyWords: ['HAZARDOUS', 'TORRENT', 'PSYCHIC']
  },
  'Infernal cannon': {
    range: 24,
    attacks: 6,
    skill: 2,
    strength: 5,
    armorPenetration: 1,
    damage: 2
  },
  'Hellforged weapons - strike': {
    range: 'M',
    attacks: 6,
    skill: 2,
    strength: 8,
    armorPenetration: 2,
    damage: 3,
    keyWords: ['PSYCHIC']
  },
  'Hellforged weapons - sweep': {
    range: 'M',
    attacks: 14,
    skill: 2,
    strength: 6,
    armorPenetration: 0,
    damage: 1,
  },
  'Soulreaper cannon': {
    range: 24,
    attacks: 6,
    skill: 3,
    strength: 6,
    armorPenetration: 1,
    damage: 1,
    keyWords: ['DEVASTATING WOUNDS']
  },
  'Warpsmite': {
    range: 18,
    attacks: 2,
    skill: 3,
    strength: 4,
    armorPenetration: 3,
    damage: 1,
    keyWords: ['ANTI-INFANTRY 4+', 'DEVASTATING WOUNDS', 'PISTOL', 'PSYCHIC']
  },
  'Warpsmite SOT': {
    range: 18,
    attacks: 3,
    skill: 3,
    strength: 4,
    armorPenetration: 3,
    damage: 1,
    keyWords: ['ANTI-INFANTRY 4+', 'DEVASTATING WOUNDS', 'PISTOL', 'PSYCHIC']
  },
  'Close combat weapon': {
    range: 'M',
    attacks: 2,
    skill: 3,
    strength: 4,
    armorPenetration: 0,
    damage: 1
  },
  'Hellfyre missile rack': {
    range: 36,
    attacks: 2,
    skill: 3,
    strength: 10,
    armorPenetration: 2,
    damage: 3
  },
  'Warp vortex - blast': {
    range: 24,
    attacks: 'D6+3',
    skill: 3,
    strength: 9,
    armorPenetration: 2,
    damage: 2
  },
  'Warp vortex - beam': {
    range: 24,
    attacks: 1,
    skill: 3,
    strength: 18,
    armorPenetration: 4,
    damage: 'D6+6'
  },
  'Warp vortex - torrent': {
    range: 12,
    attacks: '2D6',
    skill: 'N/A',
    strength: 6,
    armorPenetration: 1,
    damage: 1
  },
  'Betentacled maw': {
    range: 'M',
    attacks: 15,
    skill: 3,
    strength: 7,
    armorPenetration: 0,
    damage: 1
  },
  'Mutalith claws': {
    range: 'M',
    attacks: 5,
    skill: 3,
    strength: 9,
    armorPenetration: 2,
    damage: 4
  }
}
