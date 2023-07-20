import { Dictionary } from "./utilityTypes.ts";

export type Detachments = 'Cult of Magic'

export interface DetachmentRule {
  name: string;
  benefit: Dictionary
}

export type DetachmentRuleByDetachment = {
  [key in Detachments]: DetachmentRule
}

export const detachmentsRulesByDetachment:DetachmentRuleByDetachment = {
  'Cult of Magic': {
    name: 'Kindred Sorcery',
    benefit: {
      'Malevolent Charge': '[LETHAL HITS]',
      'Psychic Maelstrom': '[SUSTAINED HITS 1]',
      'Wrath of the Immaterium': '[DEVASTATING WOUNDS]'
    }
  }
}