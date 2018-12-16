
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

const filter = {
  urls: ["<all_urls>"],
  types: ["xmlhttprequest", "main_frame"],
};
const opt_extraInfoSpec = ["requestHeaders"];


chrome.webRequest.onBeforeSendHeaders.addListener((details) => {
  const regex = /http(s)?:\/\/linkedin.com\/in\/\s+$/gi
  if ((details.url.includes("memberConnections") && !details.url.includes("extension=")) || regex.test(details.url) ) {
    console.log(details);
    const message = {
      action: "GET_CONNECTIONS",
      payload: details
    }
    chrome.tabs.sendMessage(details.tabId, message)

  }
}, filter ,opt_extraInfoSpec);
