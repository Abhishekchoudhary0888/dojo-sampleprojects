define([ 
	"dojo/_base/declare",
	"dijit/_Widget",
	"dijit/_Templated",
	"dojo/text!./template/firstfile.html",
	"dojo/domReady!"
],function(declare, _Widget, _Templated, template){
 
	return declare([_Widget, _Templated],{
		templateString : template
	});
});