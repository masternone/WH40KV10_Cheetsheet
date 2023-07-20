export interface Dictionary {
  [name: string]: string;
}

export type Phases =
  'Any'
  | 'Active Command'
  | 'Active Move'
  | 'Active Shooting'
  | 'Active Charge'
  | 'Active Fight'
  | 'Inactive Command'
  | 'Inactive Move'
  | 'Inactive Shooting'
  | 'Inactive Charge'
  | 'Inactive Fight';
export type Factions = 'Core' | 'Cabal of Sorcerers' | 'Thousand Sons';
