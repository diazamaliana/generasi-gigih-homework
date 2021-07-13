const Playlist = ({ data }) => {
    const { name, album, artists, external_urls} = data;
    const artistTxt = artists.map((artist, idx) => {
        const isLast = idx === artists.length - 1;
        const txt = isLast ? artist.name : artist.name + ",";
        return (
            <a href="${external_urls.spotify}">{txt}</a>
        );
    });
    return (
        <div className="song-content">
            <div className="song-cover">
                <a href={album.external_urls.spotify}></a>
                <img
                    style={{
                    height: album.images[0].height - 300,
                    width: "auto",
                    }}
                    src={album.images[0].url}
                    alt={album.name}
                />
            </div>
            <div className="song-description">
                <div>
                    <h2>
                        <a href={external_urls.spotify}>{name}</a>
                    </h2>
                    <h4>
                        <a href={external_urls.spotify}>{album.name}</a>
                    </h4>
                </div>

                <div>
                    <button onClick={() => console.log("This is button")}>Select</button>
                </div>
            </div>
        </div>
    );
};



export default Playlist;