import {commas, formatHeaders, isElement} from "./utils";
import axios from "axios";

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

function replaceText(selector, text) {
  if (isElement(document.querySelector(selector))) {
    document.querySelector(selector).innerText = text;
  } else {
    setTimeout(replaceText, 250)
  }
}

function changeText(number) {
  const connections = contains("code", "com.linkedin.voyager.identity.shared.MemberConnection")[0]
    .innerText.match(/"paging":\{"total":\d+/gi)[0].match(/\d+/gi)[0];
  const targetSelector = ".pv-top-card-v2-section__connections";
  const text = `See connections (${commas(number  ? String(number) : connections)})`;
  const degree = document.querySelector("span.dist-value").innerText.toLowerCase();
  if (degree === "1st") {
    replaceText(targetSelector, text);
  }
}

window.onload = () => {
  changeText()
}

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(request, sender, response){
  if (request.action === "GET_CONNECTIONS") {
    const headers = formatHeaders(request.payload.requestHeaders)
    axios(request.payload.url + "&extension=true", {
      headers,
    })
      .then(res => {
        const total = res.data.paging.total
        changeText(total)
      })
  }
}
