(function(){
Template.__checkName("navbar");
Template["navbar"] = new Template("Template.navbar", (function() {
  var view = this;
  return HTML.NAV("\n		", HTML.DIV({
    "class": "nav-wrapper indigo z-depth-5"
  }, "\n		", HTML.Raw("<!-- SEARCH BAR -->"), "\n		", Blaze.If(function() {
    return Spacebars.call(view.lookup("isSearching"));
  }, function() {
    return [ "\n					", HTML.FORM({
      "class": "search"
    }, "\n        				", HTML.DIV({
      "class": "input-field"
    }, "\n	          				", HTML.INPUT({
      id: "search",
      type: "search",
      required: ""
    }), "\n	          				", HTML.A({
      href: "#",
      "class": "mdi-navigation-close close-search"
    }), "\n	          				", HTML.LABEL({
      "for": "search"
    }, HTML.I({
      "class": "mdi-action-search"
    })), "\n        				"), "\n      				"), "\n\n      				" ];
  }, function() {
    return [ "\n      					", Blaze.If(function() {
      return Spacebars.call(view.lookup("isAddingPlayer"));
    }, function() {
      return [ "\n						", HTML.FORM({
        "class": "create-player"
      }, "\n							", HTML.DIV({
        "class": "input-field"
      }, "\n								", HTML.INPUT({
        type: "text",
        name: "name",
        id: "createPlayer"
      }), "\n								", HTML.A({
        href: "#",
        "class": "mdi-navigation-close  close-add-player"
      }), "\n								", HTML.LABEL({
        "for": "create-player"
      }, HTML.I({
        "class": "mdi-social-person-add"
      })), "\n							"), "\n						"), "\n						" ];
    }, function() {
      return [ "\n							", Blaze.If(function() {
        return Spacebars.call(view.lookup("isCreatingTeam"));
      }, function() {
        return [ "\n							", HTML.FORM({
          "class": "create-team"
        }, "\n								", HTML.DIV({
          "class": "input-field"
        }, "\n									", HTML.INPUT({
          type: "text",
          name: "teamName"
        }), "\n									", HTML.A({
          href: "#",
          "class": "mdi-navigation-close close-create-team"
        }), "\n									", HTML.LABEL({
          "for": "search"
        }, HTML.I({
          "class": "mdi-social-group-add"
        })), "\n								"), "\n							"), "\n\n							" ];
      }, function() {
        return [ "\n\n\n					", HTML.Comment(" BRAND_LOGO "), "\n					", HTML.A({
          href: function() {
            return Spacebars.mustache(view.lookup("pathFor"), "home");
          },
          "class": "brand-logo"
        }, "Billards"), "\n\n					", HTML.UL({
          id: "nav-mobile",
          "class": "right hide-on-med-and-down"
        }, "\n				\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "mdi-social-person-add dropdown-button",
          "data-activates": "accounts-dropdown"
        })), "\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "mdi-social-group-add create-team"
        })), "\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "mdi-action-perm-contact-cal"
        })), "\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "mdi-action-search"
        })), "\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "mdi-action-settings"
        })), "\n						", HTML.LI(HTML.A({
          href: "#",
          "class": "mdi-action-perm-identity left",
          "data-activates": "user-login"
        }, Spacebars.include(view.lookupTemplate("loginButtons")))), "\n\n					"), "\n					", HTML.UL({
          id: "accounts-dropdown",
          "class": "dropdown-content"
        }, "\n						", HTML.LI("\n							", HTML.A({
          href: "#",
          "class": "mdi-social-person-add"
        }, "Add Player"), "\n						"), "\n						", HTML.LI("\n							", HTML.SPAN({
          "class": function() {
            return Blaze.If(function() {
              return Spacebars.call(view.lookup("newPlayer"));
            }, function() {
              return " new ";
            }, function() {
              return " badge ";
            });
          }
        }, "[ ", Blaze.View("lookup:no", function() {
          return Spacebars.mustache(view.lookup("no"));
        }), " ]"), "\n						"), "\n					"), "\n						" ];
      }), "\n					" ];
    }), "\n				" ];
  }), "\n		"), "\n	");
}));

})();
