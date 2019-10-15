'use strict';
/**** **
 * *****
 *  ******/
// AOK 15.10.2019, github aomerk
/**** **
 * *****
 *  ******/


chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let changingUrl = details.url;
        if (changingUrl.includes("tr.wikipedia")) {
            changingUrl = changingUrl.replace('tr.wikipedia', 'tr.0wikipedia');
            chrome.tabs.update({url: changingUrl});
        }
    }, {urls: ["<all_urls>"]}, ["blocking"]
);
