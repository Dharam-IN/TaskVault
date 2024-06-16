import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeChanger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl"
    >
      {resolvedTheme === "dark" ? <CiLight /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeChanger;
