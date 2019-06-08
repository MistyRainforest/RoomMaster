var appRouter = function (app) {
    app.get("/", function(request, response) {
      response.status(200).send("Welcome to RoomMaster REST API");
    });
  }

  
  module.exports = appRouter;