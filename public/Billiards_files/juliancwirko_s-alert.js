//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Mongo = Package.mongo.Mongo;
var Template = Package.templating.Template;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var sAlert;

(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/juliancwirko:s-alert/client/s-alert.js                                                            //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
'use strict';                                                                                                 // 1
                                                                                                              // 2
// helper functions                                                                                           // 3
var conditionSet = function (self, msg, condition, customSettings) {                                          // 4
    var settings = {};                                                                                        // 5
    var effects = ['jelly', 'genie', 'stackslide', 'scale', 'slide', 'flip', 'bouncyflip'];                   // 6
    var currentEffect;                                                                                        // 7
    var sAlertId;                                                                                             // 8
    if (!_.isObject(customSettings)) {                                                                        // 9
        customSettings = {};                                                                                  // 10
    }                                                                                                         // 11
    if (_.isObject(msg) && _.isString(condition)) {                                                           // 12
        settings = _.extend(settings, self.settings, msg, {condition: condition}, customSettings);            // 13
    }                                                                                                         // 14
    if (_.isString(msg) && _.isString(condition)) {                                                           // 15
        settings = _.extend(settings, self.settings, {message: msg}, {condition: condition}, customSettings); // 16
    }                                                                                                         // 17
    currentEffect = settings && settings.effect;                                                              // 18
    if (_.contains(effects, currentEffect) && !Package['juliancwirko:s-alert-' + currentEffect] && typeof console !== 'undefined') {
        console.info('Install "' + currentEffect + '" effect by running "meteor add juliancwirko:s-alert-' + currentEffect + '"');
    }                                                                                                         // 21
    if (_.isObject(settings) && !_.isEmpty(settings)) {                                                       // 22
        sAlertId = sAlert.collection.insert(settings);                                                        // 23
    }                                                                                                         // 24
    return sAlertId;                                                                                          // 25
};                                                                                                            // 26
                                                                                                              // 27
var EVENTS = 'webkitAnimationEnd oAnimationEnd animationEnd msAnimationEnd animationend';                     // 28
var sAlertClose = function (alertId) {                                                                        // 29
    var closingTimeout;                                                                                       // 30
    if (document.hidden || document.webkitHidden || $('.s-alert-box').css('animationName') === 'none') {      // 31
        sAlert.collection.remove(alertId);                                                                    // 32
    } else {                                                                                                  // 33
        $('.s-alert-box#' + alertId).removeClass('s-alert-show');                                             // 34
        closingTimeout = Meteor.setTimeout(function () {                                                      // 35
            $('.s-alert-box#' + alertId).addClass('s-alert-hide');                                            // 36
        }, 100);                                                                                              // 37
        $('.s-alert-box#' + alertId).off(EVENTS);                                                             // 38
        $('.s-alert-box#' + alertId).on(EVENTS, function () {                                                 // 39
            $(this).hide();                                                                                   // 40
            sAlert.collection.remove(alertId);                                                                // 41
            Meteor.clearTimeout(closingTimeout);                                                              // 42
        });                                                                                                   // 43
    }                                                                                                         // 44
};                                                                                                            // 45
                                                                                                              // 46
// sAlert object                                                                                              // 47
sAlert = {                                                                                                    // 48
    settings: {                                                                                               // 49
        effect: '',                                                                                           // 50
        position: 'top-right',                                                                                // 51
        timeout: 5000,                                                                                        // 52
        html: false,                                                                                          // 53
        onRouteClose: true,                                                                                   // 54
        stack: true,                                                                                          // 55
        offset: 0 // in px - will be added to first alert (bottom or top - depends of the position in config) // 56
    },                                                                                                        // 57
    config: function (configObj) {                                                                            // 58
        var self = this;                                                                                      // 59
        if (_.isObject(configObj)) {                                                                          // 60
            self.settings = _.extend(self.settings, configObj);                                               // 61
        } else {                                                                                              // 62
            throw new Meteor.Error(400, 'Config must be an object!');                                         // 63
        }                                                                                                     // 64
    },                                                                                                        // 65
    closeAll: function () {                                                                                   // 66
        sAlert.collection.remove({});                                                                         // 67
    },                                                                                                        // 68
    close: function (id) {                                                                                    // 69
        if (_.isString(id)) {                                                                                 // 70
            sAlertClose(id);                                                                                  // 71
        }                                                                                                     // 72
    },                                                                                                        // 73
    info: function (msg, customSettings) {                                                                    // 74
        return conditionSet(this, msg, 'info', customSettings);                                               // 75
    },                                                                                                        // 76
    error: function (msg, customSettings) {                                                                   // 77
        return conditionSet(this, msg, 'error', customSettings);                                              // 78
    },                                                                                                        // 79
    success: function (msg, customSettings) {                                                                 // 80
        return conditionSet(this, msg, 'success', customSettings);                                            // 81
    },                                                                                                        // 82
    warning: function (msg, customSettings) {                                                                 // 83
        return conditionSet(this, msg, 'warning', customSettings);                                            // 84
    }                                                                                                         // 85
};                                                                                                            // 86
                                                                                                              // 87
// routers clean                                                                                              // 88
Meteor.startup(function () {                                                                                  // 89
    if (typeof Iron !== 'undefined' && typeof Router !== 'undefined') {                                       // 90
        Router.onStop(function () {                                                                           // 91
            sAlert.collection.remove({onRouteClose: true});                                                   // 92
        });                                                                                                   // 93
    }                                                                                                         // 94
    if (typeof FlowRouter !== 'undefined' && _.isObject(FlowRouter.triggers)) {                               // 95
        FlowRouter.triggers.enter([function () {                                                              // 96
            sAlert.collection.remove({onRouteClose: true});                                                   // 97
        }]);                                                                                                  // 98
    }                                                                                                         // 99
    if (typeof FlowRouter !== 'undefined' && !_.isObject(FlowRouter.triggers)) {                              // 100
        FlowRouter.middleware(function (path, next) {                                                         // 101
            sAlert.collection.remove({onRouteClose: true});                                                   // 102
            next();                                                                                           // 103
        });                                                                                                   // 104
    }                                                                                                         // 105
});                                                                                                           // 106
                                                                                                              // 107
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/juliancwirko:s-alert/client/s-alert-collection.js                                                 //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
'use strict';                                                                                                 // 1
                                                                                                              // 2
// only client side collections for now..                                                                     // 3
sAlert.collection = new Mongo.Collection(null);                                                               // 4
                                                                                                              // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/juliancwirko:s-alert/client/template.s-alert-template.js                                          //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
                                                                                                              // 1
Template.__checkName("sAlert");                                                                               // 2
Template["sAlert"] = new Template("Template.sAlert", (function() {                                            // 3
  var view = this;                                                                                            // 4
  return Blaze.Each(function() {                                                                              // 5
    return Spacebars.call(view.lookup("sAlertData"));                                                         // 6
  }, function() {                                                                                             // 7
    return [ "\n        ", Spacebars.include(view.lookupTemplate("sAlertContent")), "\n    " ];               // 8
  });                                                                                                         // 9
}));                                                                                                          // 10
                                                                                                              // 11
Template.__checkName("sAlertContent");                                                                        // 12
Template["sAlertContent"] = new Template("Template.sAlertContent", (function() {                              // 13
  var view = this;                                                                                            // 14
  return Blaze.If(function() {                                                                                // 15
    return Spacebars.call(Spacebars.dot(view.lookup(".."), "template"));                                      // 16
  }, function() {                                                                                             // 17
    return [ "\n        ", Blaze._TemplateWith(function() {                                                   // 18
      return {                                                                                                // 19
        template: Spacebars.call(Spacebars.dot(view.lookup(".."), "template")),                               // 20
        data: Spacebars.call(view.lookup("."))                                                                // 21
      };                                                                                                      // 22
    }, function() {                                                                                           // 23
      return Spacebars.include(function() {                                                                   // 24
        return Spacebars.call(Template.__dynamic);                                                            // 25
      });                                                                                                     // 26
    }), "\n    " ];                                                                                           // 27
  }, function() {                                                                                             // 28
    return [ "\n        ", HTML.DIV({                                                                         // 29
      "class": function() {                                                                                   // 30
        return [ "s-alert-box s-alert-", Spacebars.mustache(view.lookup("condition")), " s-alert-", Spacebars.mustache(view.lookup("position")), " ", Blaze.If(function() {
          return Spacebars.call(view.lookup("effect"));                                                       // 32
        }, function() {                                                                                       // 33
          return [ "s-alert-effect-", Blaze.View("lookup:effect", function() {                                // 34
            return Spacebars.mustache(view.lookup("effect"));                                                 // 35
          }) ];                                                                                               // 36
        }), " s-alert-show" ];                                                                                // 37
      },                                                                                                      // 38
      id: function() {                                                                                        // 39
        return Spacebars.mustache(view.lookup("_id"));                                                        // 40
      },                                                                                                      // 41
      style: function() {                                                                                     // 42
        return Spacebars.mustache(view.lookup("boxPosition"));                                                // 43
      }                                                                                                       // 44
    }, "\n            ", HTML.DIV({                                                                           // 45
      "class": "s-alert-box-inner"                                                                            // 46
    }, "\n                ", HTML.P(Blaze.If(function() {                                                     // 47
      return Spacebars.call(view.lookup("isHtml"));                                                           // 48
    }, function() {                                                                                           // 49
      return Blaze.View("lookup:message", function() {                                                        // 50
        return Spacebars.makeRaw(Spacebars.mustache(view.lookup("message")));                                 // 51
      });                                                                                                     // 52
    }, function() {                                                                                           // 53
      return Blaze.View("lookup:message", function() {                                                        // 54
        return Spacebars.mustache(view.lookup("message"));                                                    // 55
      });                                                                                                     // 56
    })), "\n            "), "\n            ", HTML.SPAN({                                                     // 57
      "class": "s-alert-close"                                                                                // 58
    }), "\n        "), "\n    " ];                                                                            // 59
  });                                                                                                         // 60
}));                                                                                                          // 61
                                                                                                              // 62
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                            //
// packages/juliancwirko:s-alert/client/s-alert-template.js                                                   //
//                                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                              //
'use strict';                                                                                                 // 1
                                                                                                              // 2
Template.sAlert.helpers({                                                                                     // 3
    sAlertData: function () {                                                                                 // 4
        var positionTop = 0;                                                                                  // 5
        var positionBottom = 0;                                                                               // 6
        var padding = 0;                                                                                      // 7
        var alerts = {};                                                                                      // 8
        var style;                                                                                            // 9
        var sAlertBoxHTML;                                                                                    // 10
        var sAlertBox;                                                                                        // 11
        var docElement;                                                                                       // 12
        var sAlertBoxHeight;                                                                                  // 13
        var currentData = Template.currentData();                                                             // 14
        var templateOverwrite = currentData && currentData.template;                                          // 15
        var positionTypeTop;                                                                                  // 16
        var positionTypeBottom;                                                                               // 17
        return sAlert.collection.find().map(function (alert, index) {                                         // 18
            positionTypeTop = alert.position && /top/g.test(alert.position);                                  // 19
            positionTypeBottom = alert.position && /bottom/g.test(alert.position);                            // 20
            if (alert.stack) {                                                                                // 21
                // checking alert box height - needed to calculate position                                   // 22
                docElement = document.createElement('div');                                                   // 23
                $(docElement).addClass('s-alert-box-height');                                                 // 24
                if (_.isString(templateOverwrite)) {                                                          // 25
                    sAlertBoxHTML = Blaze.toHTMLWithData(Template[templateOverwrite], alert);                 // 26
                } else {                                                                                      // 27
                    sAlertBoxHTML = Blaze.toHTMLWithData(Template.sAlertContent, alert);                      // 28
                }                                                                                             // 29
                sAlertBox = $(docElement).html(sAlertBoxHTML);                                                // 30
                $('body').append(sAlertBox);                                                                  // 31
                sAlertBoxHeight = sAlertBox.find('.s-alert-box').outerHeight(true);                           // 32
                if (positionTypeTop) {                                                                        // 33
                    padding = sAlertBox.find('.s-alert-box').css('top');                                      // 34
                    if (index === 0 && alert.offset) {                                                        // 35
                        positionTop = positionTop + parseInt(padding) + parseInt(alert.offset);               // 36
                        positionTop = positionTop + parseInt(padding);                                        // 37
                    } else {                                                                                  // 38
                        positionTop = positionTop + parseInt(padding);                                        // 39
                    }                                                                                         // 40
                    style = 'top: ' + positionTop + 'px;';                                                    // 41
                    positionTop = positionTop + sAlertBoxHeight;                                              // 42
                }                                                                                             // 43
                if (positionTypeBottom) {                                                                     // 44
                    padding = sAlertBox.find('.s-alert-box').css('bottom');                                   // 45
                    if (index === 0 && alert.offset) {                                                        // 46
                        positionBottom = positionBottom + parseInt(padding) + parseInt(alert.offset);         // 47
                    } else {                                                                                  // 48
                        positionBottom = positionBottom + parseInt(padding);                                  // 49
                    }                                                                                         // 50
                    style = 'bottom: ' + positionBottom + 'px;';                                              // 51
                    positionBottom = positionBottom + sAlertBoxHeight;                                        // 52
                }                                                                                             // 53
                sAlertBox.remove();                                                                           // 54
                alerts = _.extend(alert, {boxPosition: style});                                               // 55
            } else if (alert.offset && positionTypeTop) {                                                     // 56
                alerts = _.extend(alert, {boxPosition: 'top: ' + parseInt(alert.offset) + 'px;'});            // 57
            } else if (alert.offset && positionTypeBottom) {                                                  // 58
                alerts = _.extend(alert, {boxPosition: 'bottom: ' + parseInt(alert.offset) + 'px;'});         // 59
            } else {                                                                                          // 60
                alerts = alert;                                                                               // 61
            }                                                                                                 // 62
            return alerts;                                                                                    // 63
        });                                                                                                   // 64
    }                                                                                                         // 65
});                                                                                                           // 66
                                                                                                              // 67
Template.sAlertContent.onRendered(function () {                                                               // 68
    var tmpl = this;                                                                                          // 69
    var data = Template.currentData();                                                                        // 70
    var sAlertTimeout = data.timeout;                                                                         // 71
    if (sAlertTimeout && sAlertTimeout !== 'no' && sAlertTimeout !== 'none') {                                // 72
        sAlertTimeout = parseInt(sAlertTimeout);                                                              // 73
        if (tmpl.sAlertCloseTimeout) {                                                                        // 74
            Meteor.clearTimeout(tmpl.sAlertCloseTimeout);                                                     // 75
        }                                                                                                     // 76
        tmpl.sAlertCloseTimeout = Meteor.setTimeout(function () {                                             // 77
            sAlert.close(data._id);                                                                           // 78
        }, sAlertTimeout);                                                                                    // 79
    }                                                                                                         // 80
});                                                                                                           // 81
Template.sAlertContent.onDestroyed(function () {                                                              // 82
    if (this.sAlertCloseTimeout) {                                                                            // 83
        Meteor.clearTimeout(this.sAlertCloseTimeout);                                                         // 84
    }                                                                                                         // 85
});                                                                                                           // 86
                                                                                                              // 87
Template.sAlertContent.events({                                                                               // 88
    'click .s-alert-close': function (e, tmpl) {                                                              // 89
        e.preventDefault();                                                                                   // 90
        Meteor.clearTimeout(tmpl.sAlertCloseTimeout);                                                         // 91
        sAlert.close(this._id);                                                                               // 92
    }                                                                                                         // 93
});                                                                                                           // 94
                                                                                                              // 95
Template.sAlertContent.helpers({                                                                              // 96
    isHtml: function () {                                                                                     // 97
        var data = Template.currentData();                                                                    // 98
        return data && data.html;                                                                             // 99
    }                                                                                                         // 100
});                                                                                                           // 101
                                                                                                              // 102
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['juliancwirko:s-alert'] = {
  sAlert: sAlert
};

})();
