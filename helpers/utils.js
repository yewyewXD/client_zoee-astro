import { DateTime } from "luxon";
import {
  INITIAL_DATE,
  INITIAL_DATE_END,
  COACHING_TEMPLATE_ID,
  COACHING_WISE_LINK,
  FOLLOWUP_TEMPLATE_ID,
  FOLLOWUP_WISE_LINK,
  SYNASTRY_TEMPLATE_ID,
  SYNASTRY_WISE_LINK,
} from "./config";

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

export function getMinDate({ productId }) {
  const ownerDateNow = DateTime.now().setZone("Asia/Singapore");

  let newMinDate;

  if (productId === 8) {
    newMinDate = ownerDateNow.plus({ days: 8 });
  } else {
    newMinDate = ownerDateNow.plus({ days: 15 });
  }

  newMinDate = newMinDate.toLocal().startOf("day").toJSDate();

  const minDate = INITIAL_DATE.toJSDate();

  if (newMinDate > minDate) {
    return newMinDate;
  } else {
    return minDate;
  }
}

export function canOpenCheck({ productId }) {
  const minDate = getMinDate({ productId });
  const endDate = INITIAL_DATE_END.setZone("Asia/Singapore", {
    keepLocalTime: true,
  })
    .toLocal()
    .startOf("day");

  return minDate < endDate;
}

export function getWiseLink(productId) {
  switch (productId) {
    case COACHING_TEMPLATE_ID:
      return COACHING_WISE_LINK;

    case SYNASTRY_TEMPLATE_ID:
      return SYNASTRY_WISE_LINK;

    case FOLLOWUP_TEMPLATE_ID:
      return FOLLOWUP_WISE_LINK;

    default:
      return "";
  }
}
