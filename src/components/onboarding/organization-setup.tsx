"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

interface OrganizationSetupProps {
  organizationName: string;
}

export function OrganizationSetup({ organizationName }: OrganizationSetupProps) {
  const router = useRouter();

  const handleGetStarted = () => {
    // Navigate to the next step of onboarding
    router.push("/onboarding/details");
  };

  return (
    <div className="w-full max-w-3xl text-center">
      {/* Heading */}
      <h1 className="text-3xl font-medium text-neutral-900 mb-4">
        Set up your organization in 3 minutes
      </h1>

      {/* Subtitle */}
      <p className="text-neutral-500 mb-12 max-w-xl mx-auto leading-relaxed">
        Configure Farmio to match {organizationName}&apos;s operations, team
        structure, and workforce management needs.
      </p>

      {/* Video Placeholder */}
      <div className="relative w-full aspect-video bg-neutral-200 rounded-lg mb-12 overflow-hidden">
        {/* Play Button */}
        <button
          className="absolute inset-0 flex items-center justify-center group"
          aria-label="Play introduction video"
        >
          <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white ml-1"
            >
              <path
                d="M8 5.14v14.72a1 1 0 001.5.86l11-7.36a1 1 0 000-1.72l-11-7.36a1 1 0 00-1.5.86z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Get Started Button */}
      <button
        onClick={handleGetStarted}
        className="w-full max-w-md mx-auto py-4 px-8 bg-neutral-900 text-white rounded-full text-base font-medium hover:bg-neutral-800 transition-colors"
      >
        Get started
      </button>

      {/* Terms and Privacy */}
      <p className="mt-6 text-sm text-neutral-500">
        Read our{" "}
        <Link href="/terms" className="text-neutral-900 hover:underline">
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link href="/privacy" className="text-neutral-900 hover:underline">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
}
