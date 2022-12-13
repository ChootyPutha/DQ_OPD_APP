/* eslint-disable @typescript-eslint/no-unused-vars */
import {passwordMatch} from '../src/screen/signup_screen/hooks/formValidation';

test('check Password match', () => {
  expect(passwordMatch('1234', '1234')).toBe(true);
});
