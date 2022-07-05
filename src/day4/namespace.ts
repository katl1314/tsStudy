namespace Validation {
    export interface StringValidator {
        inAcceptable(s: string): boolean;
    }

    const lettersRegExp = new RegExp(/^[a-zA-Z]+$/);
    const numberRegExp = new RegExp(/^[0-9]+$/);

    // 우편번호
    export class ZipCodeValidator implements StringValidator {
        inAcceptable(s: string): boolean {
            return s.length === 5 && numberRegExp.test(s);
        }
    }

    // 문자 여부
    export class LettersOnlyValidator implements StringValidator {
        inAcceptable(s: string): boolean {
            return lettersRegExp.test(s);
        }
        
    }
}

/**
 * 문자열 배열 strings for...of를 통해 순회.
 */
let strings: string[] = ["Hello", "98052", "101"];

// namespace내 인터페이스 접근
let validators: { [s: string] : Validation.StringValidator } = {};
validators['Zip Code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

/**
 * 두개의 프로퍼티 validator를 for...in을 순회하며, 프로퍼티 Key Zip Code, Letters only를 추출하고,
 * 인스턴스의 isAcceptable메서드를 각각 호출하여 결과를 확인한다.
 */

for (let string of strings) {
    for (let v in validators) {
        console.log(`string is ${v} test - ${validators[v].inAcceptable(string)}`);
    }
}
