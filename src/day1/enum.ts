/**
 * 열거형(Enums)
 * 열거형으로 상수의 집합을 나타낼 수 있음. (상수의 집합을 구현)
 * 타입스크립트의 열거형은 숫자형, 문자열기반 열거형을 제공함.
 *
 * 숫자형 열거형은 모두 초기화 하지 않아도 됨. (자동 증가)
 */
enum Direction {
    UP = 1, // 1
    DOWN, // 2
    LEFT, // 3
    RIGHT, // 4
}

/**
 * 문자열 열거형은 멤버에 상수 초기화 해야함.
 * 숫자 열거형과 다르게 자동 증가가 없으며, 직렬화에 강점.
 */
enum StringEnum {
    START = "START",
    END = "END",
}

enum ResponseEnum {
    No = 0,
    Yes = 1,
}

function respond(str: string, message: ResponseEnum): void {
    // ...
    if (message) {
        // message가 Yes이면
        console.log(`Yes : ${str}`);
    } else {
        throw new Error(str);
    }
}

try {
    respond("Princess Caroline", ResponseEnum.No);
} catch (e) {
    console.error("에러에러");
}

/**
 * 문자열 열거형과 숫자 열거형 같이 사용해도 에러는 발생하지 않으나,
 * 권장하지 않음.
 */

enum E {
    X,
    Y = 5, // 상수 초기화
    Z,
} // 열거형 E의 X는 상수

// 유니온 타입
// type UnionType = string | '1'
