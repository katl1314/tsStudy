/**
 * Readonly 유틸리티 타입은
 * 타입 내 모든 속성들을 읽기 전용으로 한 새로운 타입을 반환함.
 * (readonly)
 */

interface IReadonly {
    name: string;
    age: number;
}
// Readonly<TYPE>
const userA3: Readonly<IReadonly> = {
    name: "Choi",
    age: 30,
};

// Readonly속성은 재할당시 에러가 발생함.
// userA3.name = "Kim";
// userA3.age = 20;

console.log(userA3);
// 다음과 같이 속성에 각각 readonly를 적용하면 위 결과와 동일함.
interface IReadonly2 {
    readonly name: string;
    readonly age: number;
}

interface Todo2 {
    title: string;
    description: string;
}

type MyReadonly<T> = {
    readonly [key in keyof T]: string;
};

const todo2: MyReadonly<Todo2> = {
    title: "Hey",
    description: "foobar",
};

// todo2.title = "Hello"; // Error: cannot reassign a readonly property
// todo2.description = "barFoo"; // Error: cannot reassign a readonly property
