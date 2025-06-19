var user=function(name,courseCount){
    this.name=name;
    this.courseCount=courseCount;
    this.getUserInfo=function(){
        return `Name is ${this.name} and the course count is ${this.courseCount}`;
    }
}


user.prototype.getFirstname=function(){
   
    //console.log(`Name is ${this.name} and the course count is ${this.courseCount}`);

}

var user1=new user("John",2);
user1.getUserInfo();
user1.getFirstname();
console.log("user1",user1);
//console.log(user1.getUserInfo());
