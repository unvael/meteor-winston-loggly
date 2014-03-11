
Package.describe({
  summary: 'A Loggly transport for winston.'
});

Npm.depends({
  "winston": "0.7.2",
  "winston-sentry": "0.0.5",
  "winston-loggly": "1.0.0"
});

Package.on_use(function (api, where) {
  api.add_files('winston-loggly.js', 'server');

  if(api.export){
    api.export('Winston');
    api.export('WinstonSentry');
    api.export('WinstonLoggly');
  }
});
