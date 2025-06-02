//allow user to access the course if he is:

//login access allow email
//login access allow google
//login access allow microsoft


var email_id = false;
var google_id = true;
var microsoft_id = false;


if (email_id) {
    console.log("allow the access login email");
} else if (google_id) {
    console.log("allow the access login google");
} else {
    console.log("allow the access login microsoft");
}