/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import ResponsivenessPage from '../../pages/Responsiveness.page.js';

Given('I access the main page from IBGE', () => {
    ResponsivenessPage.visit();
});

When('I resize the screen to {string} with the resolution: {string}', (device, resolution) => {
    const [width, height] = resolution.split('x').map(Number);
    ResponsivenessPage.setViewport(width, height);
});

Then('the website should have a responsive layout for {string} and display the title {string}', (device, message) => {
    ResponsivenessPage.validateTitle(message);
});