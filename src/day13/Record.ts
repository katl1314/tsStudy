/**
 * Record<KEY, TYPE> : 유틸리티 타입은 Key를 속성, Type을 그 속성의 타입을 지정하는 새로운 타입을 반환
 */

type TName = "Neo" | "Lewis";

const developer: Record<TName, string> = {
    Neo: "Michigan",
    Lewis: "New York",
};

// Record<TName, string>은 다음으로 이해하면 좋다.
interface INewType {
    Neo: string;
    Lewis: string;
}
