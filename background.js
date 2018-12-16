
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
