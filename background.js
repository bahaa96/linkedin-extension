
console.log("Background")


chrome.browserAction.onClicked.addListener(mainButtonClicked)

function mainButtonClicked(tab) {
    let message = {
        text: "Facebook"
    }
    chrome.tabs.sendMessage(tab.id, message)
}



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const { action } = request

});

const callback = function(details) {
  console.log("callback");
  if (details.url.includes("memberConnections")) {
   console.log(details);
  }

};
const filter = {
  urls: ["<all_urls>"],
  types: ["xmlhttprequest"],
};
const opt_extraInfoSpec = [];

const responseListener = (details) => {
  console.log(details);
}

chrome.webRequest.onHeadersReceived.addListener(responseListener, filter,["blocking", "responseHeaders"]);

// chrome.webRequest.onBeforeRequest.addListener(callback, filter, opt_extraInfoSpec);
