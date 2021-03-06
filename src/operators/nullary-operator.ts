// =============================================================================================================================
// SRC - OPERATORS - NULLARY OPERATOR
// =============================================================================================================================
import { isNullary } from "@checkers/index";
import { Validators } from "./shared";

const deafultCheckers = {
  isNullary,
};

export interface Options {
  type?: unknown; // Defines for messages but not used
}

type DICheckers = { [K in keyof typeof deafultCheckers]: typeof deafultCheckers[K] };
export const createNullaryOperator = (checkers: Partial<DICheckers> = {}) => {
  // tslint:disable:no-shadowed-variable
  const { isNullary } = { ...deafultCheckers, ...checkers };
  // tslint:enable:no-shadowed-variable

  return {
    name: "nullary",
    createValidators: (_: Options = {}) => {
      const validators: Validators = {};

      validators.nullary = isNullary;

      return validators;
    },
  };
};
