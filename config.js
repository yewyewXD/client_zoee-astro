import { DateTime } from "luxon";

// Based on: Send-in-Blue template id.
export const COACHING_TEMPLATE_ID = 1;
export const SYNASTRY_TEMPLATE_ID = 7;
export const FOLLOWUP_TEMPLATE_ID = 8;

// NOTE: update before 26 Mar
export const COACHING_WISE_LINK =
  "https://wise.com/pay?payerMode=WISE_ACCOUNT&step=BALANCE#K_HnwKZhutndbvVEvg0LRUpKMBs";
export const SYNASTRY_WISE_LINK = "";
export const FOLLOWUP_WISE_LINK =
  "https://wise.com/pay#FLQ0qfLH13z4aSbZLoiXoLgjrc0";

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

// Based on: Opening dates of owner.
export const INITIAL_DATE = DateTime.fromObject({
  year: 2023,
  month: 4,
  day: 1,
  hour: 11,
  minute: 0,
});

export const INITIAL_DATE_END = DateTime.fromObject({
  year: 2023,
  month: 4,
  day: 30,
  hour: 18,
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
