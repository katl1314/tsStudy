/**
 * Pick<TYPE, KEY>
 * TYPE에서 KEY로 속성을 선택한 새로운 타입을 반환
 * TYPE은 속성을 가진 인터페이스나 객체 타입이어야만 함.
 */

interface IPickType {
    name: string;
    age: number;
    email: string;
    isValid: boolean;
}

type IPickKey = "name" | "email"; // IPickKey타입의 값은 'name' 또는 'email'만 올 수 있음.

const pickMe: Pick<IPickType, IPickKey> = {
    name: "choi",
    email: "123@naver.com",
    // age: 20, // IPickType에 정의된 속성 중 'name' 또는  'email'속성만 사용함.
};

// Pick<IPickType, IPickKey>은 다음으로 이해할 수 있음.
interface IPickType2 {
    name: string;
    email: string;
}

// keyof는 인터페이스에 정의된 속성명들을 타입으로 사용함.
/* function displayValue<T>(b: keyof T) {
    console.log(b);
}

displayValue<IPickType>("name");
 */

interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

// 제네릭 T는 인터페이스 Todo
// 제네릭 K는 extends(제한사항) keyof T를 통해 해당 속성이 Todo에 포함되면 사용 가능

type MyPick<T, K extends keyof T> = {
    [key in K]: T[K];
};

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
