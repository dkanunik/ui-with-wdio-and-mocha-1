const FinanceIndexPage = require('../page_objects/FinanceIndexPage');

describe('As a Yahoo Finance site user', function () {
    describe('I should have menu items', function () {
        before(async function () {
            await FinanceIndexPage.open();
        });

        // use XPATH for this test
        it('Watchlist', async function () {
            const newsFutureCarouselBlock = await FinanceIndexPage.getMenuItemElement('Watchlist');
            expect(newsFutureCarouselBlock).toBeDisplayed();
        });

        // use XPATH for this test
        it('My Portfolio', async function () {
            const newsFutureCarouselBlock = await FinanceIndexPage.getMenuItemElement('My Portfolio');
            expect(newsFutureCarouselBlock).toBeDisplayed();
        });

        after(async function () {
            await FinanceIndexPage.close();
        });
    });
});
