import { Message } from '../types';

export const createUserMessage = (text: string): Message => ({
  id: Date.now().toString(),
  text,
  sender: 'user',
  timestamp: new Date(),
});

export const createBotMessage = (text: string, products?: Message['products']): Message => ({
  id: (Date.now() + 1).toString(),
  text,
  sender: 'bot',
  timestamp: new Date(),
  products,
});