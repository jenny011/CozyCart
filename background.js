// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.sendRequest(tab.id, {method: "getSelection"}, function(response){
//      sendServiceRequest(response.data);
//   });
// });

// function sendServiceRequest(selectedText) {
//   var serviceCall = 'http://www.google.com/search?q=' + selectedText;
//   chrome.tabs.create({url: serviceCall});
// }

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({f arewell: "goodbye"});
//   });
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      new $.GoogleSearch().search(selectedText, {site: 'https://www.amazon.com/'}, function(data) {
      console.log(data)
      sendResponse({result: data});
      search.cleanUp()
    })          
  });