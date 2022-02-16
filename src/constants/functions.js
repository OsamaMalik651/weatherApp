import moment from "moment";

export const getTimefromMS = (time) => {
  return moment(time * 1000).format("LT");
};

export const getDateFromMs = (time) => {
  return moment(time * 1000).format("L");
};
export const getDayName = (time) => {
  const dateString = getDateFromMs(time);
  const locale = "en-US";
  var date = new Date(dateString);
  return date.toLocaleDateString(locale, { weekday: "long" });
};
