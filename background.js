chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var currentUrl = tabs[0].url;
    var newUrl = "https://webcache.googleusercontent.com/search?q=cache:" + encodeURIComponent(currentUrl) + "&strip=1&vwsrc=0";
    chrome.tabs.create({url: newUrl});
  });
});
