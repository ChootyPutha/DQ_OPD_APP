/* eslint-disable prettier/prettier */
import { validEmailAddress } from "../src/screen/signup_screen/hooks/formValidation"; 

test("check valid email address",()=>{
    expect(validEmailAddress("abc@gmail.com")).toBe(true);
});