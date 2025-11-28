export interface Entity {
  id: string;
  name: string;
  designation: string; // Model number for tools, Version for apps
  description: string;
  primaryFunction: string;
}

export enum Theme {
  FIT_ATHLETIC = 'Health & Fitness',
  HEAVY_INDUSTRIAL = 'Industrial / Enterprise',
  TACTICAL_COMBAT = 'Security & Defense',
  MEDICAL_SUPPORT = 'Medical / Bio-Tech',
  DOMESTIC_SERVICE = 'Lifestyle & Smart Home'
}

export type NameLength = 'SHORT' | 'LONG';

export type GenerationMode = 'TOOL' | 'APP';

export interface GeneratorState {
  isLoading: boolean;
  names: Entity[];
  error: string | null;
  theme: Theme;
  nameLength: NameLength;
  mode: GenerationMode;
}