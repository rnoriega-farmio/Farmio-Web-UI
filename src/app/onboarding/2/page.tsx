import { FarmioLogo } from "@/components/farmio-logo";
import { OrganizationSetup } from "@/components/onboarding/organization-setup";

export const metadata = {
  title: "Set Up Your Organization | Farmio Onboarding",
  description: "Configure Farmio to match your organization's needs",
};

export default function OnboardingStep2Page() {
  // In a real app, this would come from auth/session or previous step
  const organizationName = "Your Farm";

  return (
    <main className="min-h-screen bg-white">
      {/* Logo Header */}
      <header className="p-6">
        <FarmioLogo />
      </header>

      {/* Content */}
      <div className="flex flex-col items-center px-4 pt-8 pb-12">
        <OrganizationSetup organizationName={organizationName} />
      </div>
    </main>
  );
}
