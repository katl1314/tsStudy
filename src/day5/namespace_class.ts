/**
 * 네임스페이스와 클래스 병합
 * 내부 클래스 설명하는 방법을 제공
 */

// Album 네임스페이스에서 AlbumLabel클래스를 export해야 병합된 클래스를 볼 수 있음.
class Album {
    label: Album.AlbumLabel;
}

namespace Album {
    export class AlbumLabel {}
}

function buildLabel(label: string): string {
    // namespace내 변수 접근 시 export를 변수 let앞에 있어야함.
    return `${buildLabel.perfix} ${label} ${buildLabel.suffix}`;
}

namespace buildLabel {
    export let perfix: string = "";
    export let suffix: string = "Hello";
}
