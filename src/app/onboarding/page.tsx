import { redirect } from "next/navigation";

export const metadata = {
  title: "Onboarding | Farmio",
  description: "Get started with Farmio",
};

export default function OnboardingPage() {
  // Redirect to step 1 by default
  redirect("/onboarding/1");
}
