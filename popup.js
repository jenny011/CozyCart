document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().data;
	document.getElementById('content').innerHTML = data;
});