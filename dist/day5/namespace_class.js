/**
 * 네임스페이스와 클래스 병합
 * 내부 클래스 설명하는 방법을 제공
 */
// Album 네임스페이스에서 AlbumLabel클래스를 export해야 병합된 클래스를 볼 수 있음.
class Album {
}
(function (Album) {
    class AlbumLabel {
    }
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
function buildLabel(label) {
    // namespace내 변수 접근 시 export를 변수 let앞에 있어야함.
    return `${buildLabel.perfix} ${label} ${buildLabel.suffix}`;
}
(function (buildLabel) {
    buildLabel.perfix = "";
    buildLabel.suffix = "Hello";
})(buildLabel || (buildLabel = {}));
