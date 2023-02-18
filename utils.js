export async function isSlotAvailable() {
  const res = await fetch("/api/slots");
  const data = await res.json();
  if (data.count > 0) {
    return true;
  }
  return false;
}

export async function getClients() {
  const res = await fetch("/api/customers");
  const data = await res.json();
  return data;
}

export async function submitBooking({ email, name, emailParams, title }) {
  const res = await fetch("/api/booking", {
    method: "POST",
    body: JSON.stringify({ email, name, emailParams, title }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
}
