import { expect } from "playwright/test";
import LoginInputDao from "../doa/inputDao/loginInputDao";
import SuccessOutputDao from "../doa/outputDao/successOutputDao";

export function validateSuccessPage(actualData: LoginInputDao, expectedData: SuccessOutputDao ){
    expect(actualData.getUserName()).toEqual(expectedData.getEmail())
}