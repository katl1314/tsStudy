/**
 * Readonly 유틸리티 타입은
 * 타입 내 모든 속성들을 읽기 전용으로 한 새로운 타입을 반환함.
 * (readonly)
 */
// Readonly<TYPE>
const userA3 = {
    name: "Choi",
    age: 30,
};
// Readonly속성은 재할당시 에러가 발생함.
// userA3.name = "Kim";
// userA3.age = 20;
console.log(userA3);
