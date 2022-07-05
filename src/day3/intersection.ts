/**
 * 인터세션(교차) 타입 [Intersection Type]
 * 유니언 타입과 뭐 비슷할것이라고 생각함.
 * 다만 사용 방법은 완전히 다름
 * 유니온 타입은 타입과 타입 사이에 |(파이프)기호를 사용한 반면
 * 인터섹션 타입은 &(앰퍼센트)기호를 사용하여 타입사이에 사용함.
 */

interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[]; // object[]
}

interface ArtistsData {
    artists: { name: string }[];
}

type ArtworksResponse = ErrorHandling & ArtworksData;
type ArtistsResponse = ErrorHandling & ArtistsData;

const handlerArtiestResponse = (response: ArtistsResponse) => {
    if (response.error) {
        throw new Error(response.error.message);
        return;
    }
    console.log(response.artists);
};
