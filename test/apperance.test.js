const FinanceIndexPage = require('../page_objects/FinanceIndexPage');

describe('As a Yahoo Finance site user', function () {
    describe('I have to watch blocks', function () {
        before(async function () {
            await FinanceIndexPage.open();
        });

        it('future container', async function () {
            const newsFutureCarouselBlock = await FinanceIndexPage.getFutureCarouselBlock();
            expect(newsFutureCarouselBlock).toBeDisplayed();
        });

        it('news article list', async function () {
            const newsArticleListBlock = await FinanceIndexPage.getNewsArticleListBlock();
            expect(newsArticleListBlock).toBeDisplayed();
        });

        it('cryptocurrencies list', async function () {
            const cryptocurrenciesListBlock = await FinanceIndexPage.getCryptocurrenciesListBlock();
            expect(cryptocurrenciesListBlock).toBeDisplayed();
        });

        it('video list', async function () {
            const videoListBlock = await FinanceIndexPage.getVideoListBlock();
            expect(videoListBlock).toBeDisplayed();
        });

        after(async function () {
            await FinanceIndexPage.close();
        });
    });
});
