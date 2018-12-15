console.log("content")

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(request, sender, response){
    console.log(request.text)
    console.log(response)
}

