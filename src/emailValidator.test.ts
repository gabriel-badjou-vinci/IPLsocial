import { emailChecker } from "./emailValidator";

describe('Check an email', () => {
  it('should return true when every condition is respected ', () => {
        const result = emailChecker("gabriel.badjou@student.vinci.be");
        expect(result).toBe(true);
  });

  it('should return false when there is no @ ', () => {
        const result = emailChecker("gabriel.badjoustudent.vinci.be");
        expect(result).toBe(false);
  });

it('should return false when there is no . in the domain name  ', () => {
        const result = emailChecker("gabriel.badjou@studentvincibe");
        expect(result).toBe(false);
  });

  it('should return false when the only point is the last character  ', () => {
        const result = emailChecker("gabriel.badjou@studentvincibe.");
        expect(result).toBe(false);
  });

   it('should return false when there is a space in the email', () => {
        const result1 = emailChecker("gabriel.badjou@ student.vinci.be");
        expect(result1).toBe(false);
        const result2 = emailChecker("gabriel.badjou @student.vinci.be");
        expect(result2).toBe(false);
  });
});