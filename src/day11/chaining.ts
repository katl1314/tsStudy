/**
 * 체이닝(Chaining)
 * str속성이 undefined이면 toString메서드를 사용할 수 없기 때문에 에러가 발생할 것이다.
 * str속성이 문자열인것을 단언하면 문제는 없겠지. 옵셔널 체이닝(?)을 이용하여 해당 속성값이 undefined일지라도
 * 문제없이 동작한다.
 * 객체?.속성|메서드명
 * obj?.prop;
 * obj?.[expr];
 * obj?.[index];
 * func?.(args);
 */

// 이놈은 에러 발생하지 않음.
// 옵셔널 체이닝(?)을 사용함.
function toString1(str: string | undefined): string | undefined {
    return str?.toString();
}

// type Assertion (타입 단언)
function toString2(str: string | undefined): string | undefined {
    // 강제 string타입 단언
    return (str as string).toString();
    // return (<string>str).toString();
}

// ||(단축평가)을 통해 좌측값이 undefined이거나, null 또는 false이면 우측 값을 반환함.
// ??(Nullish)은 좌측 값이 undefined 또는 null이면 false여도 좌측값을 반환

console.log(false || true); // ||연산자는 좌측값이 falsy값이면 우측값을 반환함.
console.log(false ?? true); // ?? : Nullish => 좌측값이 undefined 또는 null이면 우변값을 반환.
console.log(undefined ?? "최민혁"); // Nullish병합 연산자는 좌변값이 undefined이면 우변값을 반환함.
