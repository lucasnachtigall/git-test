exports.handler = function(event, context, callback) {
    console.log("Log log log");
    callback(null, {
    statusCode: 200,
    body: "Hello"
    });
}
