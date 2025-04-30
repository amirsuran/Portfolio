import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const languages = [
    { code: "en", label: "English" },
    { code: "fa", label: "فارسی" },
  ];

  // Function to handle language change
  const changeLanguage = (newLocale: string) => {
    // Calculate the new pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${newLocale}${pathnameWithoutLocale}`;

    // Navigate to the same page but with new locale
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 rounded-md px-2 py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{locale === "fa" ? "فا" : "EN"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="absolute right-0 mt-1 w-24 rounded-md bg-white py-1 shadow-lg dark:bg-gray-800"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            role="listbox"
          >
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`w-full px-3 py-2 text-left text-sm ${
                    lang.code === locale
                      ? "bg-gray-100 font-medium text-primary dark:bg-gray-700"
                      : "hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => changeLanguage(lang.code)}
                  role="option"
                  aria-selected={lang.code === locale}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
