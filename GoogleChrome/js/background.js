/**
 * Created with IntelliJ IDEA.
 * User: George
 * Date: 26.02.13
 * Time: 22:03
 * To change this template use File | Settings | File Templates.
 */
var tabs = [
//    { title: "The Red Violin", time: "1998", href:"http://music.yandex.ru/#!/album/239825"},
//    { title: "Eyes Wide Shut", time: "1999", href:"something" },
//    { title: "The Inheritance", time: "1976", href:"something" }
];

var maxRememberTabs = 10;

var createdTabs = [];
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Note: this event is fired twice:
    // Once with `changeInfo.status` = "loading" and another time with "complete"
    createdTabs[tabId] = tab;
});

chrome.tabs.onRemoved.addListener(function(id, removeInfo) {

    var tab = createdTabs[id];
    var today = new Date();

    var tabToHistory = {
        id:tab.id,
        title:tab.title,
        url:tab.url,
        tabFavIconUrl:tab.favIconUrl,
        time:today.getTime(),
        timeString:today.toLocaleTimeString()
    };

    tabs.push(tabToHistory);
    delete createdTabs[id];

    if(tabs.length == maxRememberTabs)
        tabs.shift();
});

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    switch(request.messageId)
    {
        case 0:
            tabs = [];
    }
});