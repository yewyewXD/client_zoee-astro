export async function isSlotAvailable() {
  const res = await fetch("/api/slots");
  const data = await res.json();
  if (data.count > 0) {
    return true;
  }
  return false;
}
