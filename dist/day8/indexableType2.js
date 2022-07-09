const items = ["a", 1, "asd"];
console.log(items[0]); // "a" is string
console.log(items[1]); // 1 is number
console.log(items[2]); // "asd" is string
const myItem2 = [true, "index signature", [1, 2, 3]];
console.log(myItem2["0"]); // true is boolean
const myUser4 = {
    name: "james",
    email: "thesecon@gmail.com",
    isValid: true,
    0: false,
};
console.log(myUser4["name"]); // james
console.log(myUser4["email"]); // thesecon@gmail.com
console.log(myUser4["isValid"]); // true
console.log(myUser4[0]); // '0' => false
console.log(myUser4[1]); // undefined
console.log(myUser4["1"]); // undefined
// myUser4[false] = "111"; // key가 boolean이면 에러 발생
myUser4["false"] = "111";
