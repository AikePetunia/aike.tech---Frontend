import { useEffect, useState } from "react";
import {
  // fetchSpotifyPlaylists,
  SpotifyPlaylist,
} from "../../../hooks/useSpotify";
import localSpotifyData from "./spotifyHard.json";
import "./Spotify.css";


// the tokens of spotify works HORRENDOUSLY bad, so for now im just using local data. anyways i dont update my playlists that often
export function Spotify() {
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([]);

  useEffect(() => {
    setPlaylists(localSpotifyData.playlists || []);
    /*
    fetchSpotifyPlaylists()
      .then(() => setPlaylists(localSpotifyData.playlists || []))
      //      .then((data) => setPlaylists(data.playlists || []))
      .catch(() => setPlaylists(localSpotifyData.playlists || []));
      */
  }, []);

  // saved cover urls expire, oembed gives the current one and needs no token
  async function refreshCover(playlist: SpotifyPlaylist) {
    try {
      const url = encodeURIComponent(playlist.external_urls.spotify);
      const res = await fetch(`https://open.spotify.com/oembed?url=${url}`);
      if (!res.ok) return;
      const { thumbnail_url: cover } = await res.json();
      if (!cover || cover === playlist.images[0].url) return;
      setPlaylists((current) =>
        current.map((item) =>
          item.id === playlist.id
            ? { ...item, images: [{ ...item.images[0], url: cover }] }
            : item,
        ),
      );
    } catch (error) {
      console.error("Error refreshing playlist cover:", error);
    }
  }

  return (
    <>
      <h4>My playlists ! &gt;&lt; </h4>
      <div className="playlists-grid">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist-item">
            {playlist.images[0] && (
              <a
                href={playlist.external_urls.spotify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={playlist.images[0].url}
                  alt={playlist.name}
                  onError={() => refreshCover(playlist)}
                  style={{ width: 120, height: 120, objectFit: "cover" }}
                />
              </a>
            )}
              <div className="playlist-info">
                  <h4>{playlist.name}</h4>
                <p>{playlist.description}</p>
                <span>{playlist.tracks.total} songs</span>
              </div>
            
          </div>
        ))}
      </div>
    </>
  );
}

export default Spotify;