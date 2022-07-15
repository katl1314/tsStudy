/**
 * Partial<TYPE>: 타입의 모든 속성을 선택적으로 변경하고 새로운 타입을 반환함.
 * (기존 ?을 속성명에 추가한 기능)
 */
// 두개의 차이점을 확인해보자.
const userA1 = {
    name: "asda",
};
// Partial<Type>을 사용하지 않으면, 해당 타입에는 모든 속성이 필수로 입력받기 때문에
// 에러가 발생함.
/* const userB1: IPartial = {
    name: "asda",
}; */
console.log(userA1);
// console.log(userB1);
// Partial<IPartial>은 다음과 같이 이해할 수 있다.
/**
 * interface IPartial {
 *  name?: string;
 *  age?: number;
 * }
 */
