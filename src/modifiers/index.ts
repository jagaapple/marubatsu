// =============================================================================================================================
// SRC - MODIFIERS - INDEX
// =============================================================================================================================
export { Modifier } from "./shared";

import { not } from "./not-modifier";
export const builtInModifiers = {
  not,
};

export type ModifierType = keyof typeof builtInModifiers;
