'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { BiSun, BiMoon } from 'react-icons/bi';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="focus:outline-none cursor-pointer"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="Mudar tema"
    >
      {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  );
}
