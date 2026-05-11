"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Language = "en" | "es";

interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
}

const languages: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
];

export function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLanguage) return;

    setIsSubmitting(true);
    localStorage.setItem("preferred-language", selectedLanguage);
    router.push(`/onboarding/next?lang=${selectedLanguage}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <fieldset>
        <legend className="sr-only">Select your preferred language</legend>

        {/* Language Cards - Side by Side */}
        <div className="flex gap-6 justify-center mb-10">
          {languages.map((lang) => (
            <label
              key={lang.code}
              className={`relative flex flex-col items-center justify-center w-64 h-72 rounded-lg cursor-pointer transition-all duration-200 ${
                selectedLanguage === lang.code
                  ? "bg-neutral-300 ring-2 ring-neutral-900"
                  : "bg-neutral-200 hover:bg-neutral-250"
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
              
              {/* Flag Placeholder */}
              <div className="w-24 h-14 bg-neutral-800 rounded flex items-center justify-center">
                <span className="text-white text-xs font-medium">
                  {lang.code.toUpperCase()}
                </span>
              </div>
              
              {/* Language Name - positioned below the card for selected state */}
              {selectedLanguage === lang.code && (
                <span className="absolute -bottom-8 text-sm font-medium text-neutral-700">
                  {lang.nativeName}
                </span>
              )}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Proceed Button */}
      <div className="flex justify-center mt-12">
        <button
          type="submit"
          disabled={!selectedLanguage || isSubmitting}
          className={`px-16 py-3 rounded-full font-medium text-white transition-all duration-200 ${
            selectedLanguage && !isSubmitting
              ? "bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98]"
              : "bg-neutral-400 cursor-not-allowed"
          }`}
        >
          {isSubmitting ? "Loading..." : "Proceed"}
        </button>
      </div>
    </form>
  );
}
