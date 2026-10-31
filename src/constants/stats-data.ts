import { projects } from '@/constants/projects';
import { myYearsOfExperience, getDynamicProjectsCount, getDynamicHoursWorked } from '@/utils/date';

export const stats = [
  { label: 'Years of Experience', value: myYearsOfExperience(), suffix: '+' },
  { label: 'Completed Projects', value: getDynamicProjectsCount(projects.length), suffix: '+' },
  { label: 'Hours Worked', value: getDynamicHoursWorked(), suffix: '+' },
];
