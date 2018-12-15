import {commas} from "./utils";

function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function(element){
    return RegExp(text).test(element.textContent);
  });
}

window.onload = () => {
  const connections = contains("code", "com.linkedin.voyager.identity.shared.MemberConnection")[0]
    .innerText.match(/"paging":\{"total":\d+/gi)[0].match(/\d+/gi)[0]
  console.log(connections);
  document.querySelector(".pv-top-card-v2-section__connections").innerText = `${commas(connections)} Connections`
}