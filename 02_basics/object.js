// singleton

//object.create

//Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Trupti",
    "full name": "Trupti Ramanuj",
    [mySym]: "myKey1",
    age: 18,
    location: "jaipur",
    email: "trupti@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.email = "trupti@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "trupti@microsoft.com"
// console.log(JsUser);
JsUser.greeting = function () {
    // console.log("Hello Js user");
}
JsUser.greetingTwo = function () {
    // console.log(`Hello Js user, ${this.name}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// const tinderUser = new object() //siglten Object

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "tupi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "trupti",
            lastname: "ramanuj"
        }
    }
}

//console.log(regularUser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj4 = { 5: "a", 6: "b" }

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }
// console.log(obj3);

const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

user[1].email;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "trupti"
}

// course.courseInstructor
const { courseInstructor: instructor } = course

// console.log(courseInstructor);
console.log(instructor);

