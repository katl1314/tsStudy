/**
 * 인터페이스내 멤버에 (?)을 추가하여 선택적으로 받을 수 있음. (선택 속성)
 * 클래스 내 멤버(속성, 메서드)에도 가능, 타입 별칭에도 가능
 */

interface IOptionalProp {
    name: string;
    age: number;
    isAdult?: boolean; // 선택 속성
}

const user21: IOptionalProp = {
    name: "Luxy",
    age: 123,
    isAdult: true, // isAdult는 선택 속성이므로, 입력해도 되고, 입력하지 않아도 됨.
};

const user22: IOptionalProp = {
    name: "Luxy",
    age: 123,
};

interface IUser6 {
    name: string;
    age: number;
    isAdult?: boolean;
    validate(): boolean;
}

// 타입 별칭
type TUser2 = {
    name: string;
    age: number;
    isAdult?: boolean;
    validate(): boolean;
};

abstract class CUser {
    // 추상 메서드 및 추상 프로퍼티
    abstract name: string;
    abstract age: number;
    abstract isAdult?: boolean;
    abstract validate(): boolean;
}
