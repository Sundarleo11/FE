/*
Define user and  role to access the application
1.admin ->full access
2.subAdmin -> create course and delete the course access
3.testprep-> create course and delete the course access for test
4.user -> to consume the course the for course
5.triel ->2 days free

Input : getUserRole(name,role)
*/


var userRole = function (name, role) {
    switch (role) {
        case "admin":
            return `${name} Have full Access for this Application`;
            break;
        case "subAdmin":
            return `${name} Having create course and delete the course access for this Application`;
            break;
        case "testprep":
            return `${name} Have create course and delete the course access for test`;
            break;
        default:
            return `${name} Have create course and delete the course access for test`;
            break;

    }

}

console.log(userRole("Sundar","admin"));
testRole=userRole("saranaya","tes");

console.log("test user :",testRole);