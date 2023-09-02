
export default function PhotoInfo(props: {info: any}) {
    const { info } = props;
    const exifInfo = info.exifInfo;
    const thumbUrl = `https://immich.f69m.de/api/thumbnail/${info.id}?format=WEBP`
    return (
        <div>
            {/* {JSON.stringify(info)} */}
            <img src={thumbUrl} />
            <p>{exifInfo.dateTimeOriginal}<br/>
            {exifInfo.city}, {exifInfo.state}, {exifInfo.country}</p>
        </div>
    );
}
