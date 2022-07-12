/**
 * 모듈은 특정 기능을 위한 독립된 코드,
 * 자체 스코프를 갖음.
 * 외부 script를 모듈로 불러올때 type="module"을 추가함.
 *
 * 모듈 내 기능들은 export를 통해 내보내거나, import를 통해 불러올 수 있음.
 * 모듈 기능도,  CommonJS방식과 ES6방식이 대표적.
 */

// 인터페이스 내보내기
export interface IUser {
    name: string;
    age: number;
}

// 타입 별칭 내보내기
export type MyType = string | number;
