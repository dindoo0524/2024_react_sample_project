import moment from "moment";

export const formattedDateTime = (dateTime: string, format: string): string => {
  return moment(dateTime).format(format);
};
