import { LanguageSelector } from "@/components/onboarding/language-selector";
import { FarmioLogo } from "@/components/farmio-logo";

export const metadata = {
  title: "Choose Your Language | Farmio Onboarding",
  description: "Select your preferred language to get started with Farmio",
};

export default function OnboardingStep1Page() {
  // In a real app, this would come from auth/session
  const userName = "John";

  return (
    <main className="min-h-screen bg-white">
      {/* Logo Header */}
      <header className="p-6">
        <FarmioLogo />
      </header>

      {/* Content */}
      <div className="flex flex-col items-center px-4 pt-8 pb-12">
        <div className="w-full max-w-2xl text-center">
          {/* Welcome Message */}
          <p className="text-lg text-neutral-600 mb-2">
            Welcome to Farmio, {userName}!
          </p>
          
          {/* Heading */}
          <h1 className="text-3xl font-medium text-neutral-900 mb-3">
            Please select a language
          </h1>
          
          {/* Subtitle */}
          <p className="text-neutral-500 mb-12">
            Choose your preferred language from the<br />
            options available.
          </p>

          <LanguageSelector />
        </div>
      </div>
    </main>
  );
}
