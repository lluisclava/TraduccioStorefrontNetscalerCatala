﻿// Edit this file to add your customized JavaScript or load additional JavaScript files.

/* Example customization - Show a click through screen on web and native */

/*
var doneClickThrough = false;

// Before web login
CTXS.Extensions.beforeLogon = function (callback) {
    doneClickThrough = true;
    CTXS.ExtensionAPI.showMessage({
        messageTitle: "Welcome!",
        messageText: "Only for WWCo Employees",
        okButtonText: "Accept",
        okAction: callback
    });
};

// Before main screen (both web and native)
CTXS.Extensions.beforeDisplayHomeScreen = function (callback) {
    if (!doneClickThrough) {
        CTXS.ExtensionAPI.showMessage({
            messageTitle: "Welcome!",
            messageText: "Only for WWCo Employees",
            okButtonText: "Accept",
            okAction: callback
        });
    } else {
        callback();
    }
}; */

/* End of example customization */


// Afegir el català
(function (c) {
	c.globalization.availableCulture("ca", {
		name: "ca",
		englishName: "Catalan",
		nativeName: "Català",
		stringBundle: "receiver/js/localization/ca/ctxs.strings.ca_923B5A95FBA2A976.js",
		customStringBundle: "custom/strings.ca.js"
	})
})(jQuery);
