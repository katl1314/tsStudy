import { IUser, MyType } from "./module";

const user6: IUser = {
    name: "aa",
    age: 10,
};

// 타입 별칭으로 정의된 MyType은 유니온 타입을 통해 문자열과, 숫자만 입력가능
const something: MyType = Math.random() < 0.5 ? "a" : 1;

// ES6의 export default를 통해 단 하나의 모듈에서 하나의 객체를 내보낼 수 있음.
