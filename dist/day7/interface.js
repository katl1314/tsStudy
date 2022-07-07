/**
 * IUser내 모든 속성은 읽기 전용이므로, 재 할당이 불가능.
 */
const user2 = {
    name: "choi",
    age: 30,
};
// 유틸리티 Readonly<T>를 이용하여 타입 내 모든 속성을 읽기 전용으로...
const user3 = {
    name: "James",
    age: 20,
};
// 유틸리티 Readonly<T>를 통해 해당 타입 내 모든 속성을 읽기 전용으로 만들었기 때문에 에러 발생
// user3["name"] = "asd";
// type assertion을 통해 강제 속성 내 readonly를 적용함.
const user4 = {
    name: "choi",
    age: 20,
};
// user4.name = "kim";
