function addProduct(response) {
	console.log(response);
	if (response.product) {
		var name = document.createTextNode(response.product);
		var h = document.getElementById("productName");
		h.appendChild(name);
	}
	if (response.links) {
		for (let i=0; i < response.links.length; i++) {
			var a = document.createElement('a');
			var linkName = document.createTextNode(response.links[i].name);
			a.setAttribute('href', response.links[i].content);
			a.appendChild(linkName);
			var div = document.getElementById("productLinks");
			div.appendChild(a);
		}
	} else {
		var p = document.createElement('p');
		var err = document.createTextNode("Sorry, there's no Amazon product for " + response.product);
		p.appendChild(err);
		var div = document.getElementById("productLinks");
		div.appendChild(p);
	}
}


window.addEventListener('load', async function () {
	//chrome.tabs.getCurrent(function(result) {console.log(result.id);});
	chrome.runtime.sendMessage({poke: "get product links"}, addProduct);
});