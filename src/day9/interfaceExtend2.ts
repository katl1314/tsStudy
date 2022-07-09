/**
 * extends을 이용하여 인터페이스 확장이 가능.
 * 타입스크립트는 동일한 이름의 인터페이스를 이용하여 인터페이스를 확장할 수 있음.
 */

interface IFullName9 {
    firstName: string;
    lastName: string;
}

interface IFullName9 {
    middleName: string;
}

/**
 * interface IFullName9 {
 *  firstName: string;
 *  lastName: string;
 *  middleName: string;
 * }
 */

const tomas09: IFullName9 = {
    firstName: "Tomas",
    middleName: "Sean",
    lastName: "Connery",
};

console.log(tomas09);
