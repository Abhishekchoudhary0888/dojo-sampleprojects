define([
    "dojo/_base/declare",
    "./MyScript",
    "dijit/_Widget",
    "dijit/_Templated",
    "dojo/text!./template/button.html",
    "dojo/domReady!"
], function (declare, MyScript, _Widget, _Templated, buttonTemplate, domReady) {
    alert("hmm");

    var widgetClass = declare([_Widget, _Templated], {
        templateString: buttonTemplate,
        onClicked: function () {
            var widget = new MyScript();
            widget.placeAt(this.bottomBlock);
        }
    });

    new widgetClass().placeAt(document.body);
});






















