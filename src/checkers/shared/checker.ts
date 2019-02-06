// =============================================================================================================================
// SRC - CHECKERS - SHARED - CHECKER
// =============================================================================================================================
export interface CheckResult<Expected, Actual = any> {
  isPassed: boolean;
  expected: Expected;
  actual: Actual;
}