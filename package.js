Package.describe({
  "summary": "CPU Profiler for Meteor (used with Kadira)",
  "version": "1.0.0",
  "git": "https://github.com/salmanhasni/kadira-profiler.git",
  "name": "salmanhasni:kadira-profiler"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest',
  ], ['client', 'server']);

});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.4');
  api.use('http');
  api.use('check');
  api.use('random');
  api.use('meteorhacks:kadira@2.30.2');
  api.imply('meteorhacks:kadira@2.30.2');
  api.use('montiapm:agent-binary-deps@2.1.1');

  api.addFiles('lib/server.js', 'server');
  api.addFiles('lib/client.js', 'client');
}
