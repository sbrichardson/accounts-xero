Accounts.oauth.registerService('xero');

if (Meteor.isClient) {
  Meteor.loginWithxero = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    xero.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {

var autopublishedFields = _.map(
   xero.whitelistedFields.concat(['id', 'name']),
  function (subfield) { return 'services.xero.' + subfield; });

Accounts.addAutopublishFields({
  forLoggedInUser: autopublishedFields,
  forOtherUsers: autopublishedFields
});
}
