import { DateTime } from "luxon";

export const INITIAL_DATE = DateTime.fromObject({
  year: 2023,
  month: 3,
  day: 1,
  hour: 11,
  minute: 0,
});

export const INITIAL_DATE_END = DateTime.fromObject({
  year: 2023,
  month: 3,
  day: 31,
  hour: 19,
  minute: 0,
});

export function getMinDate({ productId }) {
  const ownerDateNow = DateTime.now().setZone("Asia/Singapore");

  let newMinDate;

  if (productId === 8) {
    newMinDate = ownerDateNow.plus({ days: 8 });
  } else {
    newMinDate = ownerDateNow.plus({ days: 15 });
  }

  const result = newMinDate.toLocal().startOf("day");

  return result.toJSDate();
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
