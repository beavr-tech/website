import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-3">Beavr Terms & Conditions</h1>

        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">
            <strong>Last updated:</strong> 15 Aug 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of these Terms</h2>
            <p className="text-muted-foreground">
              These Terms & Conditions ("Terms") are a binding agreement between you and Productivelife
              Technologies Private Limited ("Beavr", "we", "us", "our"), governing your access to and use of the
              Beavr mobile application and the beavr.in website (together, the "Service"). By creating an account,
              completing onboarding, or otherwise using the Service, you agree to these Terms and to our Privacy
              Policy. If you do not agree, do not use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of the Service</h2>
            <p className="text-muted-foreground mb-4">
              Beavr is a habit-change companion app centered on quitting smoking and nicotine use. The Service
              currently includes:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                Onboarding assessment - a questionnaire used to personalize your program and
                recommendations.
              </li>
              <li>
                Quit Smoking program - a structured, day-by-day set of modules and lessons that unlock
                progressively as you complete them.
              </li>
              <li>Missions & Goals - self-set or suggested habit targets and progress tracking.</li>
              <li>
                AI Chat companion - a conversational feature that provides supportive, AI-generated responses
                based on your inputs (see Section 6).
              </li>
              <li>
                Social feed - an in-app community space where you may post updates and see posts from other
                users.
              </li>
              <li>Journaling & reflections - private entries you create to track your progress and mindset.</li>
              <li>Subscription / Premium tier - optional paid features (see Section 8).</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We may add, change, or remove features at any time. Beavr is a self-help and habit-support tool - it
              is not a healthcare service, and Section 5 below governs how you should treat anything the app tells
              you about quitting nicotine.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Eligibility</h2>
            <p className="text-muted-foreground">
              You must be at least 18 years old to create a Beavr account. By registering, you confirm you meet
              this requirement and that any information you provide during onboarding and sign-up is accurate.
              Beavr is intended for people who already use tobacco or nicotine products and want support to
              reduce or quit - it is not designed for and must not be used to encourage nicotine use by anyone,
              including minors or non-users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Accounts & Sign-In</h2>
            <p className="text-muted-foreground mb-4">
              You can create a Beavr account using Google Sign-In, Sign in with Apple, or email/OTP verification.
              You are responsible for:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>keeping your login credentials and device confidential;</li>
              <li>all activity that occurs under your account; and</li>
              <li>
                notifying us promptly at <a href="mailto:team@beavr.in" className="text-primary hover:underline">team@beavr.in</a>{" "}
                if you suspect unauthorized access.
              </li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We may suspend an account we reasonably believe has been compromised, until access is verified.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Health & Wellness Disclaimer</h2>
            <p className="text-muted-foreground font-semibold mb-4">NOT MEDICAL ADVICE</p>
            <p className="text-muted-foreground mb-4">
              Beavr is a self-directed motivational and habit-tracking tool. It does not provide medical,
              psychiatric, or clinical advice, is not a substitute for consultation with a doctor, and does not
              diagnose, treat, cure, or prevent nicotine dependence or any medical or mental-health condition.
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Content in the Quit Smoking program, missions, and AI Chat is general and educational in nature.</li>
              <li>
                If you use nicotine replacement therapy, prescription medication, or have an underlying health
                condition, consult a licensed healthcare provider before changing your nicotine use.
              </li>
              <li>
                If you are experiencing a medical emergency, cravings-related crisis, or thoughts of self-harm,
                contact local emergency services or a crisis line immediately - do not rely on the Service.
              </li>
              <li>
                Beavr does not guarantee any particular outcome (e.g., successfully quitting) from using the
                Service.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. AI-Generated Content</h2>
            <p className="text-muted-foreground mb-4">
              The AI Chat feature and any AI-personalized guidance are generated using third-party large-language-
              model providers based on the inputs you give the app, including onboarding answers and chat
              messages. You acknowledge that:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                AI-generated responses may be incomplete, generic, or occasionally inaccurate, and are not
                reviewed by a human before being shown to you;
              </li>
              <li>
                AI Chat output is not professional, medical, or psychological advice and should be treated the
                same as any other in-app educational content under Section 5;
              </li>
              <li>
                you should exercise your own judgment before acting on anything the AI Chat feature tells you.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Content</h2>

            <h3 className="text-xl font-semibold mb-2">7.1 License you grant us</h3>
            <p className="text-muted-foreground mb-4">
              Journal entries, reflections, onboarding answers, and social posts you create ("User Content")
              remain yours. By submitting User Content, you grant Beavr a worldwide, non-exclusive, royalty-free
              license to host, store, reproduce, and - for content you post to the social feed - display that content
              to other users, solely to operate and improve the Service. Journal and reflection entries are private
              to you and are not shown to other users unless you explicitly choose to share them.
            </p>

            <h3 className="text-xl font-semibold mb-2">7.2 Acceptable use</h3>
            <p className="text-muted-foreground mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                post content that is unlawful, harassing, hateful, sexually explicit, or promotes self-harm,
                violence, or substance misuse beyond nicotine cessation discussion;
              </li>
              <li>impersonate another person or misrepresent your affiliation;</li>
              <li>upload content that infringes someone else's intellectual property or privacy;</li>
              <li>attempt to reverse-engineer, scrape, or interfere with the Service or its AI systems;</li>
              <li>use the Service for any purpose other than personal, non-commercial habit support.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-5 mb-2">7.3 Moderation</h3>
            <p className="text-muted-foreground">
              We may review, remove, or restrict social posts that violate these Terms, and may suspend accounts
              of repeat offenders. See Section 17 for how to report content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Subscriptions & Payments</h2>
            <p className="text-muted-foreground mb-4">
              Beavr offers optional paid Premium features. Where subscriptions are purchased through the Apple
              App Store or Google Play Store:
            </p>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>
                billing, renewal, and payment processing are handled entirely by Apple or Google under their
                respective terms - Beavr never receives or stores your card details;
              </li>
              <li>
                subscriptions auto-renew at the end of each billing period unless cancelled at least 24 hours
                before renewal, through your App Store or Play Store account settings;
              </li>
              <li>
                prices are shown before purchase and may change for future billing periods with advance notice
                through the store;
              </li>
              <li>
                refunds are governed by Apple's and Google's respective refund policies, not by Beavr directly;
              </li>
              <li>
                any free trial converts automatically to a paid subscription unless cancelled before the trial ends.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground">
              The Beavr name, logo, app design, illustrations, program content, and underlying software are
              owned by Beavr or its licensors and protected by intellectual-property law. Except for the limited right
              to use the Service for personal purposes, nothing in these Terms transfers any ownership rights to
              you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
            <p className="text-muted-foreground">
              The Service relies on third-party providers, including Firebase (authentication, analytics, crash
              reporting, and push notifications), Google Sign-In, Sign in with Apple, and OpenAI (AI Chat). Your
              use of these integrations is also subject to those providers' own terms. See our Privacy Policy for
              how data is shared with them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Notifications & Communications</h2>
            <p className="text-muted-foreground">
              By using the Service you consent to receive push notifications (e.g., program reminders, unlocked-
              day alerts) and transactional emails. You can manage push notification permissions in your device
              settings and, where offered, in-app notification preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Suspension, Termination & Deletion</h2>
            <p className="text-muted-foreground">
              You may delete your account at any time at beavr.in/delete-account. We may suspend or terminate
              your access if you violate these Terms, if required by law, or to protect the Service or other users,
              with notice where practicable. Sections that by their nature should survive termination (e.g., IP,
              warranty disclaimer, liability, governing law) continue to apply after your account is closed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Disclaimer of Warranties</h2>
            <p className="text-muted-foreground">
              The Service is provided "as is" and "as available," without warranties of any kind, express or implied,
              including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant
              that the Service will be uninterrupted, error-free, or that it will help you achieve any specific result.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the maximum extent permitted by law, Beavr will not be liable for indirect, incidental, special,
              consequential, or punitive damages, or for loss of data, arising from your use of the Service. Beavr's
              total liability for any claim relating to the Service is limited to the amount you paid us, if any, in the
              12 months preceding the claim. Nothing in these Terms limits liability that cannot be excluded under
              applicable law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">15. Indemnification</h2>
            <p className="text-muted-foreground">
              You agree to indemnify and hold Beavr harmless from claims, damages, and expenses (including
              reasonable legal fees) arising from your violation of these Terms, your User Content, or your misuse
              of the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">16. Governing Law & Disputes</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of India - Uttar Pradesh, without regard to conflict-of-law
              principles. Any dispute arising from these Terms or the Service will be subject to the exclusive
              jurisdiction of the courts of Mathura, India, unless applicable local consumer-protection law gives
              you the right to bring a claim in your own jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">17. Grievance Officer</h2>
            <p className="text-muted-foreground mb-4">
              In accordance with the Information Technology Act, 2000 and rules made thereunder (relevant
              because the Service includes user-generated posts in the Social feed), complaints about content or
              these Terms can be addressed to our Grievance Officer:
            </p>
            <ul className="list-none ml-6 text-muted-foreground space-y-2">
              <li><strong>Name:</strong> Priyanshu</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:team@beavr.in" className="text-primary hover:underline">
                  team@beavr.in
                </a>
              </li>
              <li><strong>Response time:</strong> acknowledged within 24 hours, resolved within 15 days.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">18. Changes to these Terms</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. If changes are material, we will notify you in-app or by
              email before they take effect. Continued use of the Service after changes take effect constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">19. General</h2>
            <ul className="list-disc ml-6 text-muted-foreground space-y-2">
              <li>Severability - if any provision is found unenforceable, the rest of these Terms remain in effect.</li>
              <li>No waiver - failure to enforce a provision is not a waiver of it.</li>
              <li>
                Assignment - you may not assign these Terms; Beavr may assign them in connection with a
                merger, acquisition, or sale of assets.
              </li>
              <li>
                Entire agreement - these Terms, together with the Privacy Policy, are the entire agreement
                between you and Beavr regarding the Service.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">20. Contact</h2>
            <p className="text-muted-foreground">
              Questions about these Terms:{" "}
              <a href="mailto:team@beavr.in" className="text-primary hover:underline">
                team@beavr.in
              </a>
              ,{" "}
              <a href="https://beavr.in" className="text-primary hover:underline">
                beavr.in
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
