import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Privacy Policy for Beavr</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-6">
            <strong>Effective Date:</strong> 24th Dec 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Beavr ("we", "our", "us") respects your privacy and is committed to protecting your personal information. 
              This Privacy Policy explains what data we collect, how we use it, with whom we share it, and your rights regarding your data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect the following data from users:
            </p>
            <div className="ml-6 mb-4">
              <h3 className="text-xl font-semibold mb-2">Identifiers</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>User IDs</li>
              </ul>
            </div>
            <div className="ml-6 mb-4">
              <h3 className="text-xl font-semibold mb-2">Device and App Usage Data</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                <li>Device IDs</li>
                <li>Crash logs</li>
                <li>Diagnostics</li>
                <li>App performance data</li>
                <li>App interactions (buttons clicked, features used)</li>
                <li>Other user-generated content (journals, reflections, onboarding questionnaire)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected data for:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li><strong>App functionality:</strong> To provide core features, track habits, personalize recommendations, and support account management.</li>
              <li><strong>Personalization:</strong> To provide personalized guidance based on activity, journal entries, and user inputs.</li>
              <li><strong>Analytics:</strong> To monitor app usage, improve features, and maintain app performance.</li>
              <li><strong>Security and compliance:</strong> To detect and prevent fraud, maintain account security, and comply with laws.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We share certain data only with trusted service providers for app functionality or personalization:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li><strong>AI Service Providers:</strong> Onboarding questionnaires or user reflections may be processed by OpenAI to generate personalized guidance.</li>
              <li><strong>Analytics and Crash Reporting:</strong> Some identifiers and usage data may be shared with analytics services to monitor app performance and fix issues.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We do not sell your data to third parties for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention and Deletion</h2>
            <p className="text-muted-foreground mb-4">
              Users can request deletion of their account and associated data at:{" "}
              <a href="https://beavr.in/delete-account" className="text-primary hover:underline">
                https://beavr.in/delete-account
              </a>
            </p>
            <p className="text-muted-foreground">
              We retain collected data only as long as necessary to provide app functionality and comply with legal obligations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>All personal and fitness data is transmitted over encrypted HTTPS connections.</li>
              <li>We follow industry-standard practices to safeguard your information from unauthorized access.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. User Rights</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> You can request a copy of the data we hold about you.</li>
              <li><strong>Deletion:</strong> You can delete your account and associated data via the link above.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Updates to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy periodically. We will notify users of significant changes via the app or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For any questions or concerns about this Privacy Policy:
            </p>
            <ul className="list-none ml-6 text-muted-foreground space-y-2">
              <li><strong>Email:</strong> <a href="mailto:team@beavr.in" className="text-primary hover:underline">team@beavr.in</a></li>
              <li><strong>Website:</strong> <a href="https://beavr.in" className="text-primary hover:underline">https://beavr.in</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
