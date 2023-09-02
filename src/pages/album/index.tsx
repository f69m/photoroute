
import AlbumData from '../../data/album.json'
import PhotoInfo from '../../components/photoinfo'

export function Album() {
    const album = AlbumData;
    const showAssets = album.assets.slice(0, 10);
    return (
        <div>
            <h1>Album {album.albumName}</h1>
            { showAssets.map(a => <PhotoInfo info={a} key={a.id} />) }
            </div>
    );
}
