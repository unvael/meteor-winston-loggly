Package.describe({
  summary: 'A Loggly transport for winston.'
});

Npm.depends({
  "winston": "0.7.2",
  "winston-loggly": "1.0.0"
});

Package.on_use(function (api, where) {
  api.use(['winston'], 'server');
  api.use(['winston-loggly'], 'server');

  if(api.export){
    api.export('Winston_Loggly');
  }
  api.add_files('winston-loggly.js', 'server');

});
