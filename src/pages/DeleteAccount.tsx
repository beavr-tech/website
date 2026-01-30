import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

const DeleteAccount = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            ← Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4">Delete Your Beavr Account</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Beavr by Productivelife Technologies Private Limited
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Request Account Deletion</h2>
            <p className="text-muted-foreground mb-4">
              To request deletion of your Beavr account and associated personal data:
            </p>
            <ol className="list-decimal ml-6 space-y-2 text-muted-foreground">
              <li>Send an email to <a href="mailto:team@beavr.in" className="text-primary hover:underline font-medium">team@beavr.in</a></li>
              <li>Use the subject line <strong>"Account Deletion Request"</strong></li>
              <li>Send the request from the same email address used to create your Beavr account</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What Data Will Be Deleted</h2>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Account credentials (email, password hash, OAuth identifiers)</li>
              <li>Profile information</li>
              <li>App usage and wellness data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Important Notes</h2>
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Account deletion is irreversible</strong></li>
                  <li>OAuth accounts (Google, etc.) will be disconnected, but third-party accounts remain active</li>
                </ul>
              </AlertDescription>
            </Alert>
          </section>

          <div className="mt-12 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              <strong>Last Updated:</strong> Dec 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
