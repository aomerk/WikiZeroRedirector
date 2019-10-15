'use strict';
/**** **
 * *****
 *  ******/
// AOK 15.10.2019, github aomerk
/**** **
 * *****
 *  ******/

/****
 * *
 *
 *  TODO Birisi Regex ile yapmak isterse, lutfen yapsin. Ben de gormus olurum, kafami toparlayamadim suan Regex icin.
 *     sadece tr ve en icin calisiyor.
 *     evet, bastaki prefixi alip wiki/prefix yapilabilir.
 *
 ****/
chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        let changingUrl = details.url;
        if (changingUrl.includes(".wikipedia")) {
            changingUrl = changingUrl.replace('tr.wikipedia.org/wiki', 'wikizeroo.org/wiki/tr');
            changingUrl = changingUrl.replace('en.wikipedia.org/wiki', 'wikizeroo.org/wiki/en');
            chrome.tabs.update({url: changingUrl});
        }
    }, {urls: ["<all_urls>"]}, ["blocking"]
);
