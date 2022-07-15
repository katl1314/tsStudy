/**
 * Required<Type>
 * 타입 내 모든 속성들을 필수 속성으로 한 새로운 타입을 반환함.
 */

// IRequired의 모든 속성을 선택 속성으로 구성한다.
interface IRequired {
    name?: string;
    age?: number;
}

// Required유틸리티 타입을 이용하여 타입의 모든 속성을 필수 속성으로..

const userA2: Required<IRequired> = {
    name: "James",
    age: 10,
};

console.log(userA2);

// 만약 Required 유틸리티 타입을 사용하지 않는다면?
// 타입 내 속성들이 선택속성임.
const userB2: IRequired = {
    name: "Choi",
};

console.log(userB2);

/**
 * 다음과 같이 이해할 수 있다.
 * interface IRequired {
 *  name: string;
 *  age: number;
 * }
 */
