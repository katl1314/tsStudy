/**
 * 모듈 lodash에 대한 타입을 선언한다.
 */
declare module "lodash" {
    interface ILodash {
        padStart(str: string, num: number, data: string): string;
        camelCase(str?: string): string;
        snakeCase(str?: string): string;
    }

    const _: ILodash;

    export = _;
}
