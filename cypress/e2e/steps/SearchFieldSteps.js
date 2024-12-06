/// <reference types="cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import SearchFieldPage from '../../pages/SearchField.page';

Given('I access the main page from IBGE', () => {
    SearchFieldPage.visit();
});

When('I click on lens icon', () => {
    SearchFieldPage.clickLensIcon();
});

And('type {string} in the search field', (search) => {
    if(search === "") {
        //do nothing
    } else {
        SearchFieldPage.typeInSearchField(search);
    }
});

And('click on lens icon again', () => {
    SearchFieldPage.clickLensIconSearch();
});

Then('the message {string} should be displayed in the field {string}', (message, campo) => {
    SearchFieldPage.verifyMessageDisplayed(campo, message);
});

// Steps for the new scenario
When('I click on the lens icon', () => {
    SearchFieldPage.clickLensIcon();
});

And('type "Teste" in the search field', () => {
    SearchFieldPage.typeInSearchField('Teste');
});

And('click on the close icon', () => {
    SearchFieldPage.clickCloseIcon();
});

Then('the search field should not be displayed', () => {
    SearchFieldPage.verifySearchFieldNotDisplayed();
});