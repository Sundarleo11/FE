/*
user is only allowed to make a purchase when he is:
logged in
email verified 
cardInfo-valid
if any one is missing,stop purchase
*/

var isLoggedIn=false;
var isEmailVerified=true;
var cardInfo =true;

if(isLoggedIn & isEmailVerified & cardInfo){
    console.log("Purchase is allowed");
}else{
    console.log("Purchase is not allowed");
}