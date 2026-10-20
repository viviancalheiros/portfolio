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
    <div>
      {/* Tablet e desktop: toggle deslizante */}
      <button
        type="button"
        role="switch"
        aria-checked={isDark()}
        aria-label="Alternar modo escuro"
        onClick={() => setTheme(isDark() ? "light" : "dark")}
        className={`flex relative h-7 w-14 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ${
          isDark() ? "bg-slate-600" : "bg-stone-400"
        }`}
      >
        <span
          className={`flex h-5 w-5 items-center justify-center rounded-full shadow-md transition-transform duration-300 ${
            isDark()
              ? "translate-x-7 bg-gray-200"
              : "translate-x-0 bg-white"
          }`}
        >
          
          {isDark() ? (
            <BiMoon size={14} className="text-gray-800" />
          ) : (
            <BiSun size={14} className="text-[#B7791F]" />
          )}
        </span>
      </button>
    </div>

  );
}
