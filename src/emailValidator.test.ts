import { emailChecker } from "./emailValidator";

describe('Check an email', () => {
  it('should return true when every condition is respected ', () => {
        const result = emailChecker("gabriel.badjou@student.vinci.be");
        expect(result).toBe(true);
  });


});