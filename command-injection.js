var curl = require("./index");

var userPayload = "google.de";
curl.request({ url: userPayload, pretend: true }, function(err, stdout, meta) {
    console.log("%s %s", meta.cmd, meta.args.join(" "), err);
});

var userPayload = "google.com;whoami #";
curl.request({ url: userPayload, pretend: true }, function(err, stdout, meta) {
    console.log("%s %s", meta.cmd, meta.args.join(" "), err);
});

var userPayload = "https://google.com;whoami #";
curl.request({ url: userPayload, pretend: true }, function(err, stdout, meta) {
    console.log("%s %s", meta.cmd, meta.args.join(" "), err);
});

var userPayload = "https://google.com";
curl.request({ url: userPayload, pretend: true }, function(err, stdout, meta) {
    console.log("%s %s", meta.cmd, meta.args.join(" "), err);
});
var userPayload = ";whoami #";
curl.request({ url: userPayload, pretend: true }, function(err, stdout, meta) {
    console.log("%s %s", meta.cmd, meta.args.join(" "), err);
});
