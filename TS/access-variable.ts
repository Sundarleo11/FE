
class UserDetail {

    courseCount = 1;
    name: string;
    age: number;
    private readonly city = "Madurai";

    constructor(public email: string, public contact: number) {
        this.email = email;
        this.contact = contact;
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get getcourseCount(): number {
        return this.courseCount;
    }

    set setcourseCount(count) {
        if (count <= 0) {
            throw new Error("course count should be less the 1");
        }
        this.courseCount = count;
    }

}

const newUserDetail = new UserDetail("Hello", 24)


console.log("newUserDetail", newUserDetail);