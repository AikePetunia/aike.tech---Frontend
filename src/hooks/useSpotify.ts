export type SpotifyPlaylist = {
  id: string;
  name: string;
  description: string;
  public: boolean;
  images: { url: string; height: number | null; width: number | null }[];
  tracks: {
    total: number;
    href: string;
  };
  owner: {
    display_name: string;
    id: string;
  };
  external_urls: {
    spotify: string;
  };
};

export async function fetchSpotifyPlaylists() {
  const { getApiBase, getAuthHeaders } = await import("../config/api");
  const base = getApiBase();

  const rawHeaders = getAuthHeaders();
  const headers = Object.fromEntries(
    Object.entries(rawHeaders).filter(([_, v]) => typeof v === "string")
  ) as Record<string, string>;

  const response = await fetch(`${base}/api/spotify/playlists`, {
    headers,
  });

  const data = await response.json();
  return data as { playlists: SpotifyPlaylist[]; total: number };
}
