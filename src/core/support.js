define([
	"../var/support"
], function( support ) {

(function() {
	// Minified: var a
	var doc;

	// Support: IE8 and below, Android<3.0
	// document.implementation.createHTMLDocument is missing there, so
	// jQuery.parseHTML has to keep using the live document as its context
	if ( !document.implementation.createHTMLDocument ) {
		support.createHTMLDocument = false;
		return;
	}

	// Support: Safari 8+
	// Two consecutive forms are parsed as a single one there, so an inert
	// document created this way is not a usable parsing context
	doc = document.implementation.createHTMLDocument( "" );
	doc.body.innerHTML = "<form></form><form></form>";
	support.createHTMLDocument = doc.body.childNodes.length === 2;
})();

return support;

});
