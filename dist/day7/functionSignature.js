// type PARAM_TYPE = number;
// type RETURN_TYPE = number;
const getUser = function (name) {
    // 인터페이스을 통해 호출 시그니처를 생성
    // 이미 호출 시그니처를 통해 매개변수의 타입, 반환 값 타입을 정의했기 때문에
    // 해당 함수에서는 별도로 지정하지 않음.
    return { name };
};
getUser("Heropy");
// 2022-07-07, 호출 시그니처 완료
// 함수 타입을 인터페이스를 통해 작성하는 경우, 호출 시그니처(Call Signature)라는 것을 사용
// 함수 시그니처(호출 시그니처)는 매개변수의 타입, 반환값 타입을 지정
