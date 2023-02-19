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

export async function submitBooking(config) {
  const { email, name, emailParams, title, ownerDate, databaseDate } = config;
  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      body: JSON.stringify(config),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return {
      error: true,
    };
  }
}

export async function getOccupiedDates() {
  const res = await fetch("/api/dates");
  const data = await res.json();
  return data;
}
