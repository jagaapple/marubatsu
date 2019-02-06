// =============================================================================================================================
// SRC - OPERATORS - INDEX
// =============================================================================================================================
export { ErrorMessageCreator, ErrorMessageCreators, Operator, ValidationExecutor, Validators } from "./shared";

import { createBlankOperator } from "./blank-operator";
import { createEmptyOperator } from "./empty-operator";
import { createNullaryOperator } from "./nullary-operator";
import { createNumberOperator } from "./number-operator";
import { createPresentOperator } from "./present-operator";
import { createStringOperator } from "./string-operator";

export const builtInOperatorCreators = {
  blank: createBlankOperator(),
  empty: createEmptyOperator(),
  nullary: createNullaryOperator(),
  number: createNumberOperator(),
  present: createPresentOperator(),
  string: createStringOperator(),
};

import { ErrorMessageCreators } from "./shared";
import { errorMessageCreators } from "./string-messages";

export const builtInOperatorMessageCreators: {
  [K in keyof typeof builtInOperatorCreators]?: { error: ErrorMessageCreators<any> }
} = {
  string: { error: errorMessageCreators },
};
