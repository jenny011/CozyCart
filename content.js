function copySelection() {
    var selectedText = window.getSelection().toString().trim();

    if (selectedText) {
    	chrome.runtime.sendMessage({keyword: selectedText}, function(response) {
			console.log(response);
		});
    } else {
    	console.log("No text selected");
    }
}

// chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
//     if (request.method == "getSelection")
//       sendResponse({data: window.getSelection().toString()});
//     else
//       sendResponse({}); // snub them.
// });

//document.addEventListener("mouseup", copySelection);
document.addEventListener('selectionchange', copySelection);
