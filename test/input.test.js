const FinanceIndexPage = require('../page_objects/FinanceIndexPage');

describe('As a Yahoo Finance site user', function () {
    describe('I should have the opportunity to use search features so that', function () {
        before(async function () {
            await FinanceIndexPage.open();
        });

        it('search input field is displayed', async function () {

        });

        it('search input field is enabled', async function () {

        });

        it('search input field is clickable', async function () {

        });

        it('search button is displayed', async function () {

        });

        it('search button is clickable', async function () {

        });

        after(async function () {
            await FinanceIndexPage.close();
        });
    });
});
