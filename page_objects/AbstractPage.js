'use strict';

class AbstractPage {

    constructor() {
        this.pageUrl = '';
    }

    async open(pageUrl) {
        this.pageUrl = pageUrl;
        await browser.url(pageUrl);
        await this.waitForPageLoading();
    }

    async waitForPageLoading() {
        await browser.waitUntil(async() => {
            const state = await browser.execute('return document.readyState;');
            return state === 'complete';
        }, {
            timeout: 10000,
            timeoutMsg: 'Page loading timeout',
            interval: 1000
        });
    }

    async scrollDown(pixels) {
        await browser.executeScript(`window.scrollBy(0,${pixels})`, []);
    }

    async close() {
        await browser.closeWindow();
    }
}

module.exports = AbstractPage;
