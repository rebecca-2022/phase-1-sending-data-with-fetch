// Add your code here
const { returns } = require("chai-spies");
// Add your code here
function submitData() {
    
    return fetch( 'http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: 'Steve',
            email: 'steve@steve.com'
        })
    } )
    .then( function ( users ) {
        return users.json()
    } )
    .then( function ( object ) {
        document.body.textContent = object["id"]
    } )
    .catch( function ( error ) {
        document.body.textContent = error.message
    } )
}
submitData(name, email);
Footer
