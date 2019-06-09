var appRouter = function (app) {
    app.get("/", function(request, response) {
      response.status(200).send("Welcome to RoomMaster REST API");
    });
// What to send when API fetch uses 'POST' for url = /user
    app.post("/user", function(request, response) {
      console.log(request.body)
      response.
      return response.json({
        uid: request.body.uid,
        name: 'john',
        eat: 'me'
      })
    });
  }

  
  module.exports = appRouter;