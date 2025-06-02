// show user signout button when user is authenticated
//other wise user should view login page


var authenticated = true;

if (authenticated) {
    console.log("show the signout button");
} else {
    console.log("Login page");
}

//ternary oprtator
authenticated ? console.log("show the signout button") : console.log("Login page");
