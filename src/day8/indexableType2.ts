interface IItems {
    // indexable signature
    [itemIndex: number]: string | number;
}

const items: IItems = ["a", 1, "asd"];
console.log(items[0]); // "a" is string
console.log(items[1]); // 1 is number
console.log(items[2]); // "asd" is string
// 인덱서 타입이 number를 제외하면 받을 수 없음.
// console.log(items[true]);
// 인덱싱 타입이 number이면 배열의 인덱스 접근
interface IItems2 {
    [index: number]: boolean | string | number[];
}

const myItem2: IItems2 = [true, "index signature", [1, 2, 3]];

console.log(myItem2["0"]); // true is boolean
interface IUser3 {
    [newProp: string]: string | boolean;
}

const myUser4: IUser3 = {
    name: "james",
    email: "thesecon@gmail.com",
    isValid: true,
    0: false, // 객체의 키가 숫자이어도, 암묵적으로 문자열 '0'으로 바꿔준다.
};

console.log(myUser4["name"]); // james
console.log(myUser4["email"]); // thesecon@gmail.com
console.log(myUser4["isValid"]); // true
console.log(myUser4[0]); // '0' => false
console.log(myUser4[1]); // undefined
console.log(myUser4["1"]); // undefined

// myUser4[false] = "111"; // key가 boolean이면 에러 발생
myUser4["false"] = "111";
