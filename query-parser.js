var queryObj = {};
var searchArr = window.location.search.match(/([a-zA-z0-9][\-\_]?)*[=]([a-zA-z0-9][\-\_]?)*/gi);
searchArr.map(function(elem, ind) {
	elem = elem.split("=");
	queryObj[elem[0]] = elem[1];
});
console.log(queryObj);