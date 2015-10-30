var packageName = 'qactivo:ngletteravatar';
var where = 'client'; 
var version = '3.0.1';
var summary = 'AngularJS directive of select element';
var gitLink = 'https://github.com/QActivo/ngletteravatar';
var documentationFile = 'README.md';

// Meta-data
Package.describe({
  name: packageName,
  version: version,
  summary: summary,
  git: gitLink,
  documentation: documentationFile
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']); // Meteor versions

  api.use('angular:angular@1.2.0', where); // Dependencies

  api.addFiles('ngletteravatar', where); // Files in use
});   