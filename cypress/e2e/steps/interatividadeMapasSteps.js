///<reference types="cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import InteratividadeMapasPage from '../../pages/interatividadeMapas.page';

Given("I access the main page from IBGE", () => {
    InteratividadeMapasPage.visit();
});

When("I click on side menu", () => {
    InteratividadeMapasPage.clickSideMenu();
});

And('I click on "Cidades e Estados"', () => {
    InteratividadeMapasPage.clickCidadesEEstados();
});

And('search for {string} in the "Selecione um nível geográfico" field and press Enter', (region) => {
    InteratividadeMapasPage.searchRegion(region);
});

Then('the {string} should be displayed in the Governador field', (governor) => {
    InteratividadeMapasPage.verifyGovernor(governor);
});

And('I click on "zoom in" and "Zoom out" button from the map', () => {
    InteratividadeMapasPage.clickZoomInAndOut();
});