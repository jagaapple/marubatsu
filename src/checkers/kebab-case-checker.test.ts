// =============================================================================================================================
// SRC - CHECKERS - KEBAB CASE CHECKER TEST
// =============================================================================================================================
// tslint:disable:only-arrow-functions no-unused-expression no-null-keyword
import { expect } from "chai";
import { isKebabCase } from "./kebab-case-checker";

describe("[ Kebab Case Checker ]", function() {
  context("when a value is undefined,", function() {
    it("should return false", function() {
      expect(isKebabCase(undefined, false)).to.be.false;
      expect(isKebabCase(undefined, true)).to.be.false;
    });
  });

  context("when a value is null,", function() {
    it("should return false", function() {
      expect(isKebabCase(null, false)).to.be.false;
      expect(isKebabCase(null, true)).to.be.false;
    });
  });

  context("when a value is number,", function() {
    context("zero,", function() {
      it("should return true", function() {
        expect(isKebabCase(0, false)).to.be.true;
        expect(isKebabCase(0, true)).to.be.true;
      });
    });

    context("a positive number,", function() {
      it("should return true", function() {
        expect(isKebabCase(1, false)).to.be.true;
        expect(isKebabCase(1, true)).to.be.true;
      });
    });

    context("a negative number,", function() {
      it("should return false", function() {
        expect(isKebabCase(-1, false)).to.be.false;
        expect(isKebabCase(-1, true)).to.be.false;
      });
    });
  });

  context("when a value is string,", function() {
    context("an empty string,", function() {
      it("should return true", function() {
        expect(isKebabCase("", false)).to.be.true;
        expect(isKebabCase("", true)).to.be.true;
      });
    });

    context("a lower camel case,", function() {
      it("should return false", function() {
        expect(isKebabCase("lowerCamelCase", false)).to.be.false;
        expect(isKebabCase("lowerCCamel", false)).to.be.false;
        expect(isKebabCase("000LowerCamelCase", false)).to.be.false;
        expect(isKebabCase("lowerCamelCase", true)).to.be.false;
        expect(isKebabCase("lowerCCamel", true)).to.be.false;
        expect(isKebabCase("000LowerCamelCase", true)).to.be.false;
      });
    });

    context("an upper camel case,", function() {
      it("should return false", function() {
        expect(isKebabCase("UpperCamelCase", false)).to.be.false;
        expect(isKebabCase("UpperCCamel", false)).to.be.false;
        expect(isKebabCase("000UpperCamelCase", false)).to.be.false;
        expect(isKebabCase("UpperCamelCase", true)).to.be.false;
        expect(isKebabCase("UpperCCamel", true)).to.be.false;
        expect(isKebabCase("000UpperCamelCase", true)).to.be.false;
      });
    });

    context("a lower snake case,", function() {
      it("should return false", function() {
        expect(isKebabCase("0_0", false)).to.be.false;
        expect(isKebabCase("lower_snake_case", false)).to.be.false;
        expect(isKebabCase("_lower_snake_case", false)).to.be.false;
        expect(isKebabCase("lower_snake_case_", false)).to.be.false;
        expect(isKebabCase("lower__snake", false)).to.be.false;
        expect(isKebabCase("0_lower_snake_case", false)).to.be.false;
        expect(isKebabCase("0_0", true)).to.be.false;
        expect(isKebabCase("lower_snake_case", true)).to.be.false;
        expect(isKebabCase("_lower_snake_case", true)).to.be.false;
        expect(isKebabCase("lower_snake_case_", true)).to.be.false;
        expect(isKebabCase("lower__snake", true)).to.be.false;
        expect(isKebabCase("0_lower_snake_case", true)).to.be.false;
      });
    });

    context("an upper snake case,", function() {
      it("should return false", function() {
        expect(isKebabCase("Upper_Snake_Case", false)).to.be.false;
        expect(isKebabCase("_Upper_Snake_Case", false)).to.be.false;
        expect(isKebabCase("Upper_Snake_Case_", false)).to.be.false;
        expect(isKebabCase("Upper__Snake", false)).to.be.false;
        expect(isKebabCase("0_Upper_Snake_Case", false)).to.be.false;
        expect(isKebabCase("Upper_Snake_Case", true)).to.be.false;
        expect(isKebabCase("_Upper_Snake_Case", true)).to.be.false;
        expect(isKebabCase("Upper_Snake_Case_", true)).to.be.false;
        expect(isKebabCase("Upper__Snake", true)).to.be.false;
        expect(isKebabCase("0_Upper_Snake_Case", true)).to.be.false;
      });
    });

    context("a lower kebab case,", function() {
      context('"isUpper" is false,', function() {
        it("should return true", function() {
          expect(isKebabCase("0", false)).to.be.true;
          expect(isKebabCase("0-0", false)).to.be.true;
          expect(isKebabCase("short", false)).to.be.true;
          expect(isKebabCase("lower-kebab-case", false)).to.be.true;
          expect(isKebabCase("-lower-kebab-case", false)).to.be.false;
          expect(isKebabCase("lower-kebab-case-", false)).to.be.false;
          expect(isKebabCase("lower--kebab", false)).to.be.false;
          expect(isKebabCase("0-lower-kebab-case", false)).to.be.true;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return false", function() {
          expect(isKebabCase("0", true)).to.be.true;
          expect(isKebabCase("0-0", true)).to.be.true;
          expect(isKebabCase("short", true)).to.be.false;
          expect(isKebabCase("lower-kebab-case", true)).to.be.false;
          expect(isKebabCase("-lower-kebab-case", true)).to.be.false;
          expect(isKebabCase("lower-kebab-case-", true)).to.be.false;
          expect(isKebabCase("lower--kebab", true)).to.be.false;
          expect(isKebabCase("0-lower-kebab-case", true)).to.be.false;
        });
      });
    });

    context("an upper kebab case,", function() {
      context('"isUpper" is false,', function() {
        it("should return false", function() {
          expect(isKebabCase("Short", false)).to.be.false;
          expect(isKebabCase("Upper-Kebab-Case", false)).to.be.false;
          expect(isKebabCase("-Upper-Kebab-Case", false)).to.be.false;
          expect(isKebabCase("Upper-Kebab-Case-", false)).to.be.false;
          expect(isKebabCase("Upper--Kebab", false)).to.be.false;
          expect(isKebabCase("0-Upper-Kebab-Case", false)).to.be.false;
        });
      });

      context('"isUpper" is true,', function() {
        it("should return true", function() {
          expect(isKebabCase("Short", true)).to.be.true;
          expect(isKebabCase("Upper-Kebab-Case", true)).to.be.true;
          expect(isKebabCase("-Upper-Kebab-Case", true)).to.be.false;
          expect(isKebabCase("Upper-Kebab-Case-", true)).to.be.false;
          expect(isKebabCase("Upper--Kebab", true)).to.be.false;
          expect(isKebabCase("0-Upper-Kebab-Case", true)).to.be.true;
        });
      });
    });

    context("a lower space case,", function() {
      it("should return false", function() {
        expect(isKebabCase("0 0", false)).to.be.false;
        expect(isKebabCase("lower space case", false)).to.be.false;
        expect(isKebabCase(" lower space case", false)).to.be.false;
        expect(isKebabCase("lower space case ", false)).to.be.false;
        expect(isKebabCase("lower  space", false)).to.be.false;
        expect(isKebabCase("0 lower space case", false)).to.be.false;
        expect(isKebabCase("0 0", true)).to.be.false;
        expect(isKebabCase("lower space case", true)).to.be.false;
        expect(isKebabCase(" lower space case", true)).to.be.false;
        expect(isKebabCase("lower space case ", true)).to.be.false;
        expect(isKebabCase("lower  space", true)).to.be.false;
        expect(isKebabCase("0 lower space case", true)).to.be.false;
      });
    });

    context("an upper space case,", function() {
      it("should return false", function() {
        expect(isKebabCase("Upper Space Case", false)).to.be.false;
        expect(isKebabCase(" Upper Space Case", false)).to.be.false;
        expect(isKebabCase("Upper Space Case ", false)).to.be.false;
        expect(isKebabCase("Upper  Space", false)).to.be.false;
        expect(isKebabCase("0 Upper Space Case", false)).to.be.false;
        expect(isKebabCase("Upper Space Case", true)).to.be.false;
        expect(isKebabCase(" Upper Space Case", true)).to.be.false;
        expect(isKebabCase("Upper Space Case ", true)).to.be.false;
        expect(isKebabCase("Upper  Space", true)).to.be.false;
        expect(isKebabCase("0 Upper Space Case", true)).to.be.false;
      });
    });

    context("a lower dot case,", function() {
      it("should return false", function() {
        expect(isKebabCase("0.0", false)).to.be.false;
        expect(isKebabCase("lower.dot.case", false)).to.be.false;
        expect(isKebabCase(".lower.dot.case", false)).to.be.false;
        expect(isKebabCase("lower.dot.case.", false)).to.be.false;
        expect(isKebabCase("lower..dot", false)).to.be.false;
        expect(isKebabCase("0.lower.dot.case", false)).to.be.false;
        expect(isKebabCase("0.0", true)).to.be.false;
        expect(isKebabCase("lower.dot.case", true)).to.be.false;
        expect(isKebabCase(".lower.dot.case", true)).to.be.false;
        expect(isKebabCase("lower.dot.case.", true)).to.be.false;
        expect(isKebabCase("lower..dot", true)).to.be.false;
        expect(isKebabCase("0.lower.dot.case", true)).to.be.false;
      });
    });

    context("an upper dot case,", function() {
      it("should return false", function() {
        expect(isKebabCase("Upper.Dot.Case", false)).to.be.false;
        expect(isKebabCase(".Upper.Dot.Case", false)).to.be.false;
        expect(isKebabCase("Upper.Dot.Case.", false)).to.be.false;
        expect(isKebabCase("Upper..Dot", false)).to.be.false;
        expect(isKebabCase("0.Upper.Dot.Case", false)).to.be.false;
        expect(isKebabCase("Upper.Dot.Case", true)).to.be.false;
        expect(isKebabCase(".Upper.Dot.Case", true)).to.be.false;
        expect(isKebabCase("Upper.Dot.Case.", true)).to.be.false;
        expect(isKebabCase("Upper..Dot", true)).to.be.false;
        expect(isKebabCase("0.Upper.Dot.Case", true)).to.be.false;
      });
    });
  });

  context("when a value is boolean,", function() {
    it("should return false", function() {
      expect(isKebabCase(true, false)).to.be.false;
      expect(isKebabCase(true, true)).to.be.false;
      expect(isKebabCase(false, false)).to.be.false;
      expect(isKebabCase(false, true)).to.be.false;
    });
  });

  context("when a value is array,", function() {
    it("should return false", function() {
      expect(isKebabCase([], false)).to.be.false;
      expect(isKebabCase([], true)).to.be.false;
    });
  });

  context("when a value is object (pure object/hash/dictionary),", function() {
    it("should return false", function() {
      expect(isKebabCase({}, false)).to.be.false;
      expect(isKebabCase({}, true)).to.be.false;
    });
  });

  context("when a value is function,", function() {
    it("should return false", function() {
      expect(isKebabCase(() => true, false)).to.be.false;
      expect(isKebabCase(() => true, true)).to.be.false;
    });
  });
});