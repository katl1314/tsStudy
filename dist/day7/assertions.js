/**
 * 타입 단언
 * 타입스크립트가 타입 추론을 통해 판단할 수 있는 타입의 범주를
 * 벗어났을 때, 추론을 중단하도록 지시할 수 있으며,
 * 이를 타입 단언이라고 함.
 * => 타입 추론 => 판단 => 판단시 타입의 범주가 벗어남 => 추론 중단 => 타입 단언
 *
 * 타입 단언은 값 as 타입으로 사용 가능. 강제적으로 우측에 명시한 타입으로 강제 캐스팅
 */
function someFunc(val, isNumber) {
    // 두번째 인자 isNumber에 따라 val 처리
    if (isNumber) {
        // 두번째 인자가 true일지라도, 첫번째 인자가 number 또는 string일 수 있기 때문에
        // 바로 Number 관련 메서드 호출 시 에러가 발생함.
        // 강제로 number타입으로 캐스팅
        return val.toFixed(2); // 소수점 둘째자리까지 표시 후 문자열로 반환
    }
    // val으로 받을 수 있는 값이 string밖에 없으므로, string으로 강제 캐스팅 후 slice메서드 호출
    return val.slice(0, 3);
}
someFunc(1.1234, true);
someFunc("1.1234", false);
