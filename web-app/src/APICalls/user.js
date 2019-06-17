const userDatabase = {

    //returns user booking data as a promise
    getUserData : async function (userID) {
        var bod = {
            uid: userID
        }
        var options = {
            method: 'POST',
            body: JSON.stringify(bod),
            headers: {'Content-type' : 'application/json'}
        
        }
        
        var response = await fetch('http://localhost:3001/user/booking/', options);
        var data = await response.json();
        return data
    }
}

export default userDatabase;