import { format } from "date-fns";

export const formatDate = (date: Date | null) => {
  if (!date) return "Present";
  return format(date, "MMM yyyy");
};

export const formatDateRange = (startDate: Date, endDate: Date | null = null) => {
  return `${formatDate(startDate)} — ${formatDate(endDate)}`;
};

export const myYearsOfExperience = () => {
  const startedYear = 2023;
  const currentYear = Number(format(new Date(), "yyyy"));
  return currentYear - startedYear;
};
