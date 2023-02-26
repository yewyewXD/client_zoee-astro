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
