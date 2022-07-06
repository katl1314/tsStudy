/**
 * Non Null 단언 연산자
 * 연산자 !를 사용하는 Non-null 연산자를 통해 피연산자가 null 또는 undefined가 아님을 단언.
 * 변수나 속성에서 간단하게 사용이 가능함.
 */

function fnA(x: number | null | undefined) {
    // 피연산자 뒤에 !을 추가함으로서 피연산자가 null 또는 undefined가 아님을 단언
    return x!.toFixed(2);
}

// if statement - typeof연산자를 이용하여 타입 검사
function funB(x: number | null | undefined) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
}

// 타입 단언
function funC(x: number | null | undefined) {
    return (x as number).toFixed(22);
}

function funD(x: number | null | undefined) {
    return (<number>x).toFixed(2); // <T>변수명 === (변수명 as T)
}
