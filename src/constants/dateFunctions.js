import { DateTime } from "luxon";

export const getTimefromMS = (time) => {
  return DateTime.fromMillis(time * 1000).toLocaleString(DateTime.TIME_SIMPLE);
};

export const getDateFromMs = (time) => {
  return DateTime.fromMillis(time * 1000).toLocaleString(DateTime.DATE_SHORT);
};

export const getDayName = (time) => {
  return DateTime.fromMillis(time * 1000).toFormat("cccc");
};
