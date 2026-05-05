"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Language = "en" | "es";

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
];

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLanguage) return;

    setIsSubmitting(true);
    // Store language preference (could be localStorage, cookie, or API call)
    localStorage.setItem("preferred-language", selectedLanguage);

    // Navigate to next onboarding step or dashboard
    router.push(`/onboarding/next?lang=${selectedLanguage}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <fieldset className="space-y-4">
        <legend className="sr-only">Select your preferred language</legend>

        {languages.map((lang) => (
          <label
            key={lang.code}
            className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              selectedLanguage === lang.code
                ? "border-emerald-600 bg-emerald-50 dark:bg-emerald-950/30"
                : "border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600"
            }`}
          >
            <input
              type="radio"
              name="language"
              value={lang.code}
              checked={selectedLanguage === lang.code}
              onChange={() => setSelectedLanguage(lang.code)}
              className="sr-only"
            />
            <span className="text-3xl" role="img" aria-label={`${lang.name} flag`}>
              {lang.flag}
            </span>
            <div className="flex flex-col">
              <span className="font-medium text-foreground">{lang.name}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">
                {lang.nativeName}
              </span>
            </div>
            <div className="ml-auto">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  selectedLanguage === lang.code
                    ? "border-emerald-600 bg-emerald-600"
                    : "border-neutral-300 dark:border-neutral-600"
                }`}
              >
                {selectedLanguage === lang.code && (
                  <svg
                    className="w-3 h-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>
            </div>
          </label>
        ))}
      </fieldset>

      <button
        type="submit"
        disabled={!selectedLanguage || isSubmitting}
        className={`mt-8 w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
          selectedLanguage && !isSubmitting
            ? "bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98]"
            : "bg-neutral-300 dark:bg-neutral-700 cursor-not-allowed"
        }`}
      >
        {isSubmitting ? "Loading..." : "Continue"}
      </button>
    </form>
  );
}
