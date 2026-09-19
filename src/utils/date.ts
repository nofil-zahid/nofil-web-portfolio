import { format, differenceInMonths, differenceInYears } from 'date-fns';

const CAREER_START_DATE = new Date(2024, 0, 1);

export const formatDate = (date: Date | null) => {
  if (!date) return 'Present';
  return format(date, 'MMM yyyy');
};

export const formatDateRange = (startDate: Date, endDate: Date | null = null) => {
  return `${formatDate(startDate)} — ${formatDate(endDate)}`;
};

export const myYearsOfExperience = (): number => {
  const currentYear = Number(format(new Date(), 'yyyy'));
  const startedYear = CAREER_START_DATE.getFullYear();
  return Math.max(0, currentYear - startedYear);
};

export const getDynamicProjectsCount = (baseProjectCount: number): number => {
  const yearsPassed = differenceInYears(new Date(), CAREER_START_DATE);
  const extraProjectsPerYear = yearsPassed * 2;
  return baseProjectCount + extraProjectsPerYear;
};

export const getDynamicHoursWorked = (): number => {
  const monthsPassed = Math.max(1, differenceInMonths(new Date(), CAREER_START_DATE));
  const hoursPerMonth = 8 * 22;
  return monthsPassed * hoursPerMonth;
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
