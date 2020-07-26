var keyword;

//Actions when icon is clicked
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        code: "window.getSelection().toString(); "
    }, function(selection) {
    	keyword = selection[0];
      chrome.tabs.create({
          //url: "https://www.amazon.com/s?k=" + selection[0] + "&i=amazonfresh"
          url: "./products.html"
      });
    });
});

//respond to products.js request for links
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	if (request.poke == "get product links") {
		sendResponse({product: keyword, links: [
        {name: "Amazon Fresh", content: "https://www.amazon.com/Organic-Green-Cabbage-One-Head/dp/B000P6H29Q/ref=sr_1_1?dchild=1&fpw=fresh&keywords=cabbage&qid=1595778528&s=amazonfresh&sr=1-1", price: "$2.48/ea", rating: "5", organic:1},
        {name: "Fresh Direct", content: "freshdirect.com/pdp.jsp?productId=cab_green&catId=cab_trad", price: "$0.99/lb", rating: "4.9", organic:0},
        {name: "myfreshgrocer", content: "https://www.myfreshgrocer.com/nkz/exec/Product/Display?productId=260052416", price: "$3.99/ea", rating: "4.8", organic:1},
        {name: "Fresh Direct", content: "https://www.freshdirect.com/pdp.jsp?productId=orgveg_cbbg_grn&catId=cab_trad", price: "$2.49/lb", rating: "4.6", organic:1}
      ]
    })
	} else {
		sendResponse("Don't understand the request");
	}
});
