function addProduct(response) {
	if (response.product) {
		var name = document.createTextNode(response.product);
		var h = document.getElementById("productName");
		h.appendChild(name);
	}
	if (response.links) {
		for (let i=0; i < response.links.length; i++) {
			//Add a div for one link
			var subdiv = document.createElement('div');
			var a = document.createElement('a');
			var linkName = document.createTextNode(response.links[i].name);
			a.setAttribute('href', response.links[i].content);
			a.appendChild(linkName);
			var p1 = document.createElement('p');
			var price = document.createTextNode("price: " + response.links[i].price);
			p1.appendChild(price)
			var p2 = document.createElement('p');
			var rating = document.createTextNode("rating: " + response.links[i].rating);
			p2.appendChild(rating)
			var p3 = document.createElement('p');
			var organic;
			if (response.links[i].organic == 1) {
				organic = document.createTextNode("organic");
			} else {
				organic = document.createTextNode("not organic");
			}
			p3.appendChild(organic);
			subdiv.appendChild(a);
			subdiv.appendChild(p1);
			subdiv.appendChild(p2);
			subdiv.appendChild(p3);
			subdiv.style.margin = "20pt";
			subdiv.style.padding = "30pt";
			subdiv.style.backgroundColor = "rgba(255,240,244,0.5)";
			subdiv.style.borderRadius = "20px";
			subdiv.style.flexBasis = "30%";
			subdiv.style.textAlign="center";
			//Append the subdiv to the flex container
			var div = document.getElementById("productLinks");
			div.appendChild(subdiv);
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
	//ask content.js to get the links
	chrome.runtime.sendMessage({poke: "get product links"}, addProduct);
});
