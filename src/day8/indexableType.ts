/**
 * 인덱스 시그니처(Indexable types)
 * 인덱스 시그니처 작성 시 대괄호에 타입을 정의한다.
 */

interface IArray {
    [index: number]: number | string;
}

const myObj3: IArray = {};

myObj3[0] = 1;
myObj3[1] = "typescript";
// myObj3[2] = false; // key값은 숫자만 올 수 있고, value는 number타입 및 string타입만.

/**
 * 인덱스 시그니처: 인터페이스를 통해 속성 및 메서드의 타입을 정의하였다.
 * 수많은 속성을 가지거나, 단언할 수 없는 임의의 속성이 포함되는 구조에서는 기존 방식에는 한계가 있음.
 * 이러한 상황에서 인덱스 시그니처를 정의하여 대응할 수 있음.
 *
 * 예를 들어 arr[2]와 같이 숫자로 인덱싱 하거나 arr['a']와 같이 문자열 인덱싱이 가능함.
 * => 인덱서 타입은 number or string만 제공
 *
 * interface INAME {
 *  [INDEXER_NAME : INDEXER_TYPE]: RETURN_TYPE
 * }
 *
 * 인덱스 : 배열 요소의 위치를 나타내는 숫자
 * 인덱싱 : 인덱스를 가지고 배열 요소에 접근하는 것.
 */
