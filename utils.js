export async function isSlotAvailable() {
  const res = await fetch("/api/slots");
  const data = await res.json();
  if (data.count > 0) {
    return true;
  }
  return false;
}

export async function getClients() {
  const res = await fetch("/api/customer");
  const data = await res.json();
  return data;
}
