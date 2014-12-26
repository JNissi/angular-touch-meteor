Package.describe({
  name: 'jnissi:angular-touch',
  summary: 'The angular-touch library with pr 8256 manually applied.',
  version: '0.0.1',
  git: 'https://github.com/JNissi/angular-touch-meteor.git'
});

Package.onUse(function(api) {
  // Same as latest urigo:angular
  api.versionsFrom('0.9.0.1');
  api.addFiles(['vendor/angular-touch.js'], 'client');
});
