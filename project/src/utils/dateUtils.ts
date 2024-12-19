import { format } from 'date-fns';

export const formatMessageTime = (date: Date): string => {
  return format(date, 'HH:mm');
};

export const formatSessionDate = (date: Date): string => {
  return format(date, 'MMM d, yyyy');
};