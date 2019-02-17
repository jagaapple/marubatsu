// =============================================================================================================================
// SRC - EXECUTORS - SHARED - ERROR
// =============================================================================================================================
export interface ValidationError {
  ruleName: string;
  expected: any;
  actual: any;
  message: string;
}
