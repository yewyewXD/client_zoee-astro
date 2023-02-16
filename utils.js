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

export async function submitBooking() {
  const res = await fetch("/api/booking");
  const data = await res.json();
  console.log(data);
  return;
}
