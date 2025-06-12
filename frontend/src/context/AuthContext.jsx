import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null });

  useEffect(() => {
    const stored = localStorage.getItem('auth');
    if (stored) {
      setAuth(JSON.parse(stored));
    }
  }, []);

  const login = (username, password) => {
    if (username === 'AboSaber' && password === 'AboSaberWebsite') {
      const data = { isLoggedIn: true, role: 'admin' };
      localStorage.setItem('auth', JSON.stringify(data));
      setAuth(data);
      return { success: true, role: 'admin' };
    }
    return { success: false, message: 'اسم المستخدم أو كلمة المرور غير صحيحة' };
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setAuth({ isLoggedIn: false, role: null });
  };

  return (
    <AuthContext.Provider value={{ ...auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
