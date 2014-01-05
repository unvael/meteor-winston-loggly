
Package.describe({
  summary: 'A Loggly transport for winston.'
});

Package.on_use(function (api, where) {
  Npm.depends({
    "winston": "0.7.2",
    "winston-loggly": "1.0.0"
  });
});
