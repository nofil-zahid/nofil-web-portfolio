import { myYearsOfExperience } from '@/utils/date';
import { projects } from './projects';

export const stats = [
  { label: 'Years of Experience', value: myYearsOfExperience() },
  { label: 'Completed Projects', value: projects.length + 6 },
  { label: 'Hours Worked', value: '5k' },
];
