import { format } from 'date-fns';

export const formatDate = (date: Date | null) => {
  if (!date) return 'Present';
  return format(date, 'MMM yyyy');
};

export const formatDateRange = (startDate: Date, endDate: Date | null = null) => {
  return `${formatDate(startDate)} — ${formatDate(endDate)}`;
};

export const myYearsOfExperience = () => {
  const startedYear = 2024;
  const currentYear = Number(format(new Date(), 'yyyy'));
  return currentYear - startedYear;
};

export const calculateDuration = (startDate: string | Date, endDate?: string | Date): string => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;

  if (totalMonths <= 0) return '';

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearsStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
  const monthsStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

  return [yearsStr, monthsStr].filter(Boolean).join(' ');
};
