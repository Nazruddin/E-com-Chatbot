import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Message, ChatSession } from '../types';
import { processMessage } from '../services/chatbot';

interface ChatState {
  sessions: ChatSession[];
  currentSessionId: string | null;
  isTyping: boolean;
  createSession: () => void;
  sendMessage: (text: string) => Promise<void>;
  resetSession: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set, get) => ({
      sessions: [],
      currentSessionId: null,
      isTyping: false,

      createSession: () => {
        const newSession: ChatSession = {
          id: Date.now().toString(),
          userId: '1', // Should come from auth store
          messages: [
            {
              id: '1',
              text: "Hello! I'm your shopping assistant. How can I help you today?",
              sender: 'bot',
              timestamp: new Date(),
            },
          ],
          startTime: new Date(),
          lastUpdated: new Date(),
        };

        set((state) => ({
          sessions: [...state.sessions, newSession],
          currentSessionId: newSession.id,
        }));
      },

      sendMessage: async (text: string) => {
        const state = get();
        const sessionId = state.currentSessionId;

        if (!sessionId) return;

        const userMessage: Message = {
          id: Date.now().toString(),
          text,
          sender: 'user',
          timestamp: new Date(),
        };

        set((state) => ({
          sessions: state.sessions.map((session) =>
            session.id === sessionId
              ? {
                ...session,
                messages: [...session.messages, userMessage],
                lastUpdated: new Date(),
              }
              : session
          ),
          isTyping: true,
        }));

        try {
          const response = await processMessage(text);
          const botMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: response.message,
            sender: 'bot',
            timestamp: new Date(),
            products: response.products,
          };

          set((state) => ({
            sessions: state.sessions.map((session) =>
              session.id === sessionId
                ? {
                  ...session,
                  messages: [...session.messages, botMessage],
                  lastUpdated: new Date(),
                }
                : session
            ),
          }));
        } finally {
          set({ isTyping: false });
        }
      },

      resetSession: () => {
        const state = get();
        if (state.currentSessionId) {
          set((state) => ({
            sessions: state.sessions.filter(
              (session) => session.id !== state.currentSessionId
            ),
          }));
        }
        get().createSession();
      },
    }),
    {
      name: 'chat-storage',
    }
  )
);