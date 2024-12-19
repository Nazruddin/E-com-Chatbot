import React from 'react';
import { LoginForm } from './components/auth/LoginForm';
import { ChatWindow } from './components/chat/ChatWindow';
import { useAuthStore } from './store/authStore';

function App() {
  const user = useAuthStore((state) => state.user);

  return user ? <ChatWindow /> : <LoginForm />;
}

export default App;