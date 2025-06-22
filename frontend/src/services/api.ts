export async function fetchUser() {
  const res = await fetch('/api/user');
  return await res.json();
}
