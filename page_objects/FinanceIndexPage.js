'use strict';

const AbstractPage = require('./AbstractPage');

class FinanceIndexPage extends AbstractPage {

    async open() {
        await super.open('/');
    }

    getFutureCarouselBlock() {
        return $('div#YDC-Lead');
    }

    getVideoListBlock() {
        //TODO: put getting the element using CSS selector for block marked with 2 on screenshot 1
    }

    getNewsArticleListBlock() {
        //TODO: put getting the element using CSS selector for block marked with 3 on screenshot 1
    }

    getCryptocurrenciesListBlock() {
        //TODO: put getting the element using CSS selector for block marked with 4 on screenshot 1
    }

    getMenuItemElement(menuItemName) {
        //TODO: put getting the element using XPath selector for elements marked with 5 on screenshot 1
    }


}

module.exports = new FinanceIndexPage();
