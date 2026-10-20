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
      type="button"
      role="switch"
      aria-checked={isDark()}
      aria-label="Alternar modo escuro"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      className={`relative flex h-7 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${
        isDark() ? "bg-slate-600" : "bg-zinc-400"
      }`}
    >
      <span
        className={`flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 shadow-md transition-transform duration-300 ${
          isDark() ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark() ? (
          <BiMoon size={14} className="text-gray-800" />
        ) : (
          <BiSun size={14} className="text-amber-600" />
        )}
      </span>
    </button>
  );
}
