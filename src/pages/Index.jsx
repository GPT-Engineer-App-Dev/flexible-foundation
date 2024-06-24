import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Bare-Bones Web App</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">
            This is a minimal web application with a basic structure. You can easily modify and build upon it.
          </p>
          <Button className="mt-4" variant="primary">
            Get Started
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default Index;