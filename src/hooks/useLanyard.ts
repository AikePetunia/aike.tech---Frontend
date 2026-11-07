const lanyardLink = "https://api.lanyard.rest/v1/users/433637449307127822";

export async function fetchLanyard() {
  const res = await fetch(lanyardLink);
  if (!res.ok) throw new Error(`lanyard: HTTP ${res.status}`);
  return await res.json();
}
