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

        <h1 className="text-4xl font-bold mb-3">Beavr Privacy Policy</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> 15 Aug 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-4">
              Beavr ("we", "our", "us") respects your privacy and is committed to protecting your personal
              information. This Privacy Policy explains what data we collect, how we use it, with whom we
              share it, and your rights regarding your data, in connection with the Beavr mobile application and
              beavr.in (together, the "Service").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="mb-5">
              <h3 className="text-xl font-semibold mb-2">Identifiers</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>User ID</li>
              </ul>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-semibold mb-2">Quit-Smoking Program & Habit Data</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                <li>Onboarding questionnaire answers</li>
                <li>Quit-smoking program enrollment, day/module progress, and completion status</li>
                <li>Missions and goals you set and complete, and streaks</li>
              </ul>
              <p className="text-muted-foreground mt-3">
                We treat this category as sensitive, because it reflects your nicotine-use history and
                behavior-change progress.
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-xl font-semibold mb-2">User-Generated Content</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                <li>
                  Journal entries and reflections - private to you and not visible to other users or the public
                  unless you explicitly choose to share them.
                </li>
                <li>Posts, comments, and interactions on the Social feed - visible to other users of the Service.</li>
                <li>AI Chat conversation content (see Section 3, AI Service Providers)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Device and App Usage Data</h3>
              <ul className="list-disc ml-6 text-muted-foreground space-y-1">
                <li>Device identifiers</li>
                <li>Push-notification tokens</li>
                <li>Crash logs and diagnostics</li>
                <li>App performance data</li>
                <li>App interactions (buttons clicked, features used)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Data</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                <strong>App functionality:</strong> To provide core features, track habits and program progress,
                and support account management.
              </li>
              <li>
                <strong>Personalization:</strong> To provide personalized guidance based on activity, journal
                entries, and your inputs.
              </li>
              <li><strong>Analytics:</strong> To monitor app usage, improve features, and maintain app performance.</li>
              <li>
                <strong>Notifications:</strong> To send program reminders and unlocked-content alerts via push
                notification, using your device's push token.
              </li>
              <li>
                <strong>Security and compliance:</strong> To detect and prevent fraud, maintain account security,
                and comply with the law.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Data Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We share data only with the following categories of trusted service providers, solely to operate the
              Service:
            </p>

            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>PROVIDER:</strong> Google Firebase (Authentication, Analytics, Crashlytics, Cloud Messaging)
                <br />
                <strong>PURPOSE:</strong> Sign-in, usage analytics, crash reporting, push notifications
                <br />
                <strong>DATA SHARED:</strong> Identifiers, device data, crash/diagnostic data, push token
              </p>

              <p>
                <strong>PROVIDER:</strong> Google Sign-In / Sign in with Apple
                <br />
                <strong>PURPOSE:</strong> Account authentication
                <br />
                <strong>DATA SHARED:</strong> Name, email, OAuth identifier
              </p>

              <p>
                <strong>PROVIDER:</strong> OpenAI
                <br />
                <strong>PURPOSE:</strong> Generates AI Chat responses and personalized guidance
                <br />
                <strong>DATA SHARED:</strong> Onboarding answers, chat messages, reflections you choose to
                submit for AI-personalized guidance
              </p>
            </div>

            <p className="text-muted-foreground mt-4">
              Posts you make to the Social feed are shared with, and visible to, other users of the Service by
              design.
            </p>
            <p className="text-muted-foreground mt-4">
              We do not sell your data, and we do not share it with third parties for advertising purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Retention and Deletion</h2>
            <p className="text-muted-foreground mb-4">
              You can request deletion of your account and associated data at:{" "}
              <a href="https://beavr.in/delete-account" className="text-primary hover:underline">
                https://beavr.in/delete-account
              </a>
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Account data is deleted within 30 days of a deletion request.</li>
              <li>Backups containing your data are purged within 90 days of a deletion request.</li>
              <li>
                We retain data we are required to keep for legal, tax, or fraud-prevention obligations for as
                long as that obligation applies.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Security</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>All personal data is transmitted over encrypted HTTPS connections.</li>
              <li>
                We follow industry-standard practices to safeguard your information from unauthorized access,
                including encryption at rest for sensitive fields where supported by our infrastructure providers.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Breach Notification</h2>
            <p className="text-muted-foreground">
              If a data breach is likely to result in risk to your rights, we will notify affected users and the
              relevant regulator without undue delay, consistent with our obligations under applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="text-muted-foreground">
              Beavr is not directed at, and is not intended for use by, anyone under the age of 18. We do not
              knowingly collect personal data from children. If you believe a child has provided us with personal
              data, contact us at team@beavr.in and we will delete it.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li><strong>Access:</strong> You can request a copy of the data we hold about you.</li>
              <li><strong>Correction:</strong> You can request correction of inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> You can delete your account and associated data via the link in Section 4.</li>
              <li>
                <strong>Grievance redressal:</strong> You can raise a complaint about how your data is handled
                with our Grievance Officer (Section 13).
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We will acknowledge rights requests within 7 days and respond substantively within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
            <p className="text-muted-foreground">
              Some of our service providers (Section 3) process data outside India. Where this occurs, we take
              reasonable steps to ensure your data continues to receive an appropriate level of protection.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Cookies (beavr.in website)</h2>
            <p className="text-muted-foreground">
              The beavr.in website does use cookies or similar tracking technologies for analytics.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Subscriptions & Payment Data</h2>
            <p className="text-muted-foreground">
              Where you purchase a Premium subscription through the Apple App Store or Google Play Store,
              your payment details are collected and processed directly by Apple or Google under their own
              privacy policies. Beavr does not receive or store your card details, and only receives confirmation
              of your subscription status.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Updates to This Policy</h2>
            <p className="text-muted-foreground mb-4">
              We may update this Privacy Policy periodically. We will notify users of significant changes via the app
              or email before they take effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Grievance Officer & Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              For any questions, concerns, or complaints about this Privacy Policy or how your data is handled:
            </p>
            <ul className="list-none ml-6 text-muted-foreground space-y-2">
              <li><strong>Grievance Officer:</strong> Priyanshu</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:team@beavr.in" className="text-primary hover:underline">
                  team@beavr.in
                </a>
              </li>
              <li>
                <strong>Website:</strong>{" "}
                <a href="https://beavr.in" className="text-primary hover:underline">
                  beavr.in
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
