// 제네릭의 제약사항을 명시하려고 하면 extends를 추가한다
// <T extends Type> : 타입변수 T는 Type만 허용함.
// string 또는 number타임만 지원하려고 하면? <T extends string | number>

type U = number | string;

interface MyTest3<T extends U> {
    name: string;
    value: T; // number 또는 string만 허용
}

const test1: MyTest3<number> = {
    name: "aaaa",
    value: 1,
};

const test21: MyTest3<string> = {
    name: "aaaa",
    value: "aaa",
};

const test22: MyTest3<U> = {
    name: "bbbb",
    value: 1,
};

// 인터페이스 MyTest3에 정의된 제네릭 타입 변수는 extends를 통해 string 또는 number타입만 입력받도록
// 제약사항을 두었기 때문에 이외의 값은 할당할 수 없음.
/* const test4: MyTest3<boolean> = {
    name: "aaaa",
    value: true,
}; */

interface IUser5<T extends boolean> {
    name: string;
    age: T extends true ? string : number;
    isString: T;
}

// Iuser5에 제네릭으로 true을 전달하면 T는 true extends boolean을 통해 타입 변수는 true 또는 false만 올 수 있으며
// 속성 age의 경우 타입 변수 T는 extends true을 통해 타입 변수가 true으로 제약조건에 만족하면 string타입, 만족하지 않으면 number타입 반환
const test30: IUser5<true> = {
    name: "park",
    age: "30",
    isString: true,
};

console.log(test30);

const test31: IUser5<false> = {
    name: "park",
    age: 31,
    isString: false,
};

console.log(test31);

// 제네릭(조건부타입) 종료
