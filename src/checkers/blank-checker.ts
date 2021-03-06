// =============================================================================================================================
// SRC - CHECKERS - BLANK CHECKER
// =============================================================================================================================
import { CheckResult } from "./shared";
import { isNullary } from "./nullary-checker";
import { isEmpty } from "./empty-checker";

type Result = CheckResult<"blank">;
export const isBlank = (value: any): Result => {
  const result: Result = {
    isPassed: false,
    expected: "blank",
    actual: value,
  };

  let trimmedValue = value;
  switch (typeof value) {
    case "string":
      trimmedValue = value.trim();

      break;
    case "boolean":
      result.isPassed = !value;

      return result;
    default:
  }

  result.isPassed = isNullary(trimmedValue).isPassed || isEmpty(trimmedValue).isPassed;

  return result;
};
