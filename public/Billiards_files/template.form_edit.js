(function(){
Template.__checkName("formEdit");
Template["formEdit"] = new Template("Template.formEdit", (function() {
  var view = this;
  return HTML.FORM({
    "class": "form-edit"
  }, " \n        ", HTML.INPUT({
    name: "name",
    type: "text",
    value: function() {
      return Spacebars.mustache(view.lookup("name"));
    }
  }), HTML.Raw('\n        <button type="submit">Submit</button>\n        <a class="cancel" href="#">Cancel</a>\n      '));
}));

})();
