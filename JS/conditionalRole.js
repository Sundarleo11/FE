/*
create role to access the application
1.admin ->full access
2.subAdmin -> create course and delete the course access
3.testprep-> create course and delete the course access for test
4.user -> to consume the course the for course
*/


var role = "";


switch (role) {
    case "admin":
        console.log("Full Access");
        break;
    case "subadmin":
        console.log("create course and delete the course access");
        break;
    case "testprep":
        console.log("create course and delete the course access for test");
        break;
    case "user":
        console.log("To consume the course the for course");
        break;
    default:
        console.log("Not gaving Role")

}