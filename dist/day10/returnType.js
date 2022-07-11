function fn(args) {
    return args.toString(); // infer R의 타입변수 R은 fn함수의 리턴 타입이 됨.
}
const a4 = "Hello";
console.log(a4);
const data10 = 1; // 타입변수 U는 number타입이며, 타입 추론이 가능하기 때문에 U를 반환.
console.log(data10);
// infer키워드는 제약 조건의 extends(T extends number | string)가 아닌 조건부 타입(삼항연산자 T extends U ? U : null) extends절에서만 사용 가능.
// infer키워드는 같은 타입 변수를 여러 위치에서 사용 가능
