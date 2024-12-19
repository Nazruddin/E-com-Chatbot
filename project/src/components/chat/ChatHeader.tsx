import React from 'react';
import { ShoppingCart, LogOut, RotateCcw } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import { useChatStore } from '../../store/chatStore';

export const ChatHeader: React.FC = () => {
  const logout = useAuthStore((state) => state.logout);
  const resetSession = useChatStore((state) => state.resetSession);
  const user = useAuthStore((state) => state.user);

  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center gap-2">
        <ShoppingCart className="h-6 w-6 text-blue-500" />
        <h1 className="text-xl font-semibold">Shopping Assistant</h1>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          Welcome, {user?.name}
        </span>
        <button
          onClick={resetSession}
          className="p-2 text-gray-600 hover:text-blue-500 focus:outline-none"
          title="Reset conversation"
        >
          <RotateCcw className="h-5 w-5" />
        </button>
        <button
          onClick={logout}
          className="p-2 text-gray-600 hover:text-blue-500 focus:outline-none"
          title="Sign out"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};