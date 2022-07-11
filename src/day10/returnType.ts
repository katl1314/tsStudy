// 타입 변수 T는 (arg: any) => any의 함수형태 이어야만 함.
// infer는 별칭
type ReturnType2<T extends (...args: any) => any> = T extends (
    ...args: any
) => infer R
    ? R
    : any;

function fn(args: number) {
    return args.toString(); // infer R의 타입변수 R은 fn함수의 리턴 타입이 됨.
}

const a4: ReturnType2<typeof fn> = "Hello";
console.log(a4);

/**
 * 함수 fn은 숫자 인자를 받아서, 문자열로 변환해서 반환하는 함수임.
 * 따라서 R은 함수의 반환 타입인 string이 됨. infer를 통해 타입 추론이 가능하기 때문에 string인 R을 반환합니다.
 *
 */

type MyUserType<T extends number | string> = T extends infer U ? U : never;

const data10: MyUserType<number> = 1; // 타입변수 U는 number타입이며, 타입 추론이 가능하기 때문에 U를 반환.
console.log(data10);

// infer키워드는 제약 조건의 extends(T extends number | string)가 아닌 조건부 타입(삼항연산자 T extends U ? U : null) extends절에서만 사용 가능.
// infer키워드는 같은 타입 변수를 여러 위치에서 사용 가능
