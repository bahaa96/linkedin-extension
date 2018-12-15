export const handleNewDownload = (download) => {
  const action = {
      type: "ADD_DOWNLOAD",
      download
  }
  chrome.runtime.sendMessage({action}, function(response) {
    console.log(response);
  });
}