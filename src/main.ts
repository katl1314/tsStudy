// 참조 태그(Triple-slash directive)
import * as _ from "lodash";
console.log(_.padStart("Hello TypeScript!", 20, " "));
console.log(_.camelCase("import lodash module")); // 공백 문자를 기준으로 공백문자다음 첫글자를 대문자로 변경함.(카멜 표기법)
/**
 * 외부 모듈 lodash를 install하여 모듈을 import시 에러가 발생하였다.
 * 이는 모듈 구현과 타입 선언이 동시에 이뤄지는 타입스크립트와 달리, 자바스크립트는 구현만 존재하기 때문
 * 자바스크립트 모듈을 import할 경우, 컴파일러가 이해할 수 있도록 타입을 정의해야함.
 *
 * 자바스크립트로 구성된 라이브러리를 import하여 타입스크립트에서 사용할 경우
 * d.ts파일을 이용하여 타입을 정의해야함.
 *
 * npm i -D @types/블라블라를 통해 여러 사용자가 기여로 만들어진 Definitely Typed를 이용할 수 있음.
 * 수많은 모듈이 명시되어 있기때문에 언제든지 참고하면 좋을듯.
 */

// snakeCase(camelCaseStr);

const camelCase: string = _.camelCase("import lodash import");
const snakeCase: string = _.snakeCase(camelCase);

console.log(`camelCase : ${camelCase}`); // 카멜 표기법으로 변환
// import_lodash_import => 대문자 앞에 _(언더바)추가, 대문자를 소문자(카멜 표기법 -> 스네이크 표기법)
console.log(`snakeCase : ${snakeCase}`);
