const DEFINED_ERROR_LIST = {
  TEST_ERROR: "TEST error message",
  CLIENT01: "test"
};

export class DefinedError extends Error {
  public message: string;
  public extentions: { code: string; exception: { stacktrace: string[] } };

  constructor(code: string, error?: Error) {
    super(code);
    if (DEFINED_ERROR_LIST[code]) {
      this.message = `${DEFINED_ERROR_LIST[code]}`;
      this.extentions = {
        code: code,
        exception: {
          stacktrace: error ? error.stack.split("\n") : undefined
        }
      };
    } else {
      this.message = `Undefined Error, please check error list`;
      this.extentions = {
        code: undefined,
        exception: {
          stacktrace: error ? error.stack.split("\n") : undefined
        }
      };
    }
  }
}
