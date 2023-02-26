import { DateTime } from "luxon";

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
  const { email, name, title, ownerDate, clientDate, orderDate } = config;
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

  const occupiedDates = data.map((date) => {
    const splitDate = date.split("-");
    return DateTime.fromObject({
      year: splitDate[0],
      month: splitDate[1],
      day: splitDate[2],
      hour: 8,
    }).toJSDate();
  });

  return occupiedDates;
}
