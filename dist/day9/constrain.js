// 제네릭의 제약사항을 명시하려고 하면 extends를 추가한다
// <T extends Type> : 타입변수 T는 Type만 허용함.
// string 또는 number타임만 지원하려고 하면? <T extends string | number>
const test1 = {
    name: "aaaa",
    value: 1,
};
const test21 = {
    name: "aaaa",
    value: "aaa",
};
const test22 = {
    name: "bbbb",
    value: 1,
};
// Iuser5에 제네릭으로 true을 전달하면 T는 true extends boolean을 통해 타입 변수는 true 또는 false만 올 수 있으며
// 속성 age의 경우 타입 변수 T는 extends true을 통해 타입 변수가 true으로 제약조건에 만족하면 string타입, 만족하지 않으면 number타입 반환
const test30 = {
    name: "park",
    age: "30",
    isString: true,
};
console.log(test30);
const test31 = {
    name: "park",
    age: 31,
    isString: false,
};
console.log(test31);
// 제네릭(조건부타입) 종료
