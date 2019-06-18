const firebaseDB = require("./fire");

var appRouter = function (app) {
    app.get("/", function(request, response) {
      response.status(200).send("Welcome to RoomMaster REST API");
    });
// What to send when API fetch uses 'POST' for url = /user
    app.post("/user", function(request, response) {
      console.log(request.body)
      return response.json({
        uid: request.body.uid,
        name: 'john',
        eat: 'me'
      })
    });


    //USER ROUTES
    app.post("/user/booking/", function(req, res) {
      console.log("getting userbookings");
      console.log(req.body.uid);
      var bookings = [];
      firebaseDB.collection('booking').where('user', '==', req.body.uid).get().then((data) => {
        data.docs.forEach(doc => {
          console.log(doc.data());
          bookings.push(doc.data());
        })
      console.log(bookings);
      return res.json(bookings);
      });
    })

    //ADMIN ROUTES
    app.post("/admin/isAdmin", function(request, response){
      console.log("Checking if Admin");
      var toggle = [false];
      firebaseDB.collection("admins").get().then((adminUid) => {
        adminUid.docs.forEach((id) => {
          if (request.body.uid === id.data()['admin']) {
            toggle.pop();
            toggle.push(true);
          }
        })
      }).then(() => {
        return response.json({
          uid: request.body.uid,
          admin: toggle[0]
      })
      })
    })
  }

  
  module.exports = appRouter;