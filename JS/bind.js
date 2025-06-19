var user={
    firstname:"sundar",
    lastname:"pitchai",
    coursecount:5,
    getcourseInfo(){
        console.log(`
            user name ${this.firstname+''+this.lastname},
            that course count was ${this.coursecount}          
            `);
        
    }
}

var dev={
    firstname:"dev user firstname",
    lastname:"dev user lastname",
    coursecount:5
}

//user.getcourseInfo.bind(dev)(); //one way
//bind 
///var use1=user.getcourseInfo.bind(dev);
//use1()
//call
//user.getcourseInfo.call(dev);
user.getcourseInfo.apply(dev);