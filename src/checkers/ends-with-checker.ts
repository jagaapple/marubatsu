// =============================================================================================================================
// SRC - CHECKERS - ENDS WITH CHECKER
// =============================================================================================================================
export const endsWith = (value: any, expectedValue: string) => {
  if (value == undefined) return false;

  let stringValue: string = "";

  switch (typeof value) {
    case "number":
      stringValue = value.toString();

      break;
    case "string":
      stringValue = value;

      break;
    case "object":
      if (!Array.isArray(value)) return false;

      stringValue = value[value.length - 1] || "";

      break;
    default:
      return false;
  }

  return stringValue.endsWith(expectedValue);
};
