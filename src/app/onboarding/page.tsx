import { LanguageSelector } from "@/components/onboarding/language-selector";

export const metadata = {
  title: "Choose Your Language | Onboarding",
  description: "Select your preferred language to get started",
};

export default function OnboardingPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 bg-background">
      <div className="w-full max-w-md text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Select your preferred language to continue
          </p>
        </div>

        <LanguageSelector />
      </div>
    </main>
  );
}
