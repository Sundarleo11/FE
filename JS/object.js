var person={
    firstName:"sundar",
    age:26,
    desitination:"FSE",
    courseList:[],
    buyTheCourse:function(coursename){
        this.courseList.push(coursename);
    },
    getCourseCount:function(){
        return `${this.firstName} is entrolled course count is ${this.courseList.length} and course Name is ${this.courseList}`
    }


}

console.log(person.firstName);
person.buyTheCourse("Angular TS");
console.table(person);
console.log(person.getCourseCount());
