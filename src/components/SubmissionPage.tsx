
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface SubmissionPageProps {
  onNavigate: (page: string) => void;
}

const SubmissionPage = ({ onNavigate }: SubmissionPageProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasReceivedFeedback, setHasReceivedFeedback] = useState(true); // Simulating received feedback

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('dashboard')}
          className="mb-6"
        >
          ← Back to Dashboard
        </Button>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Submission Section */}
          <Card>
            <CardHeader>
              <CardTitle>Submit Your Work</CardTitle>
              <p className="text-gray-600">E-commerce Website Redesign - TechStart Inc.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Final Deliverable
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
                  <div className="text-gray-500">
                    <span className="text-2xl block mb-2">📁</span>
                    <span>Drag and drop your files here, or click to browse</span>
                    <div className="text-sm mt-1">Supports: .fig, .pdf, .zip, .png, .jpg</div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes or Reflections
                </label>
                <Textarea 
                  placeholder="Share your design process, challenges faced, and key decisions made..."
                  className="min-h-[120px]"
                />
              </div>

              {!isSubmitted ? (
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={handleSubmit}
                >
                  Submit Work
                </Button>
              ) : (
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-green-600 font-medium">✓ Work Submitted Successfully!</div>
                  <p className="text-sm text-gray-600 mt-1">Your mentor will review and provide feedback soon</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Feedback Section */}
          <Card>
            <CardHeader>
              <CardTitle>Mentor Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              {hasReceivedFeedback ? (
                <div className="space-y-6">
                  {/* Rating */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Overall Rating</span>
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-xl">
                          {'★'.repeat(5)}
                        </div>
                        <span className="ml-2 text-gray-600">5/5</span>
                      </div>
                    </div>
                  </div>

                  {/* Written Feedback */}
                  <div>
                    <h4 className="font-medium mb-2">Written Comments</h4>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        "Excellent work! Your redesign clearly addresses the user pain points we discussed. 
                        The navigation improvements and simplified checkout process show great UX thinking. 
                        The visual hierarchy is much clearer, and I love how you've incorporated the micro-interactions. 
                        This is exactly the kind of practical thinking we need. Well done!"
                      </p>
                      <div className="mt-3 text-xs text-gray-500">
                        - Sarah Chen, Senior UX Designer @ TechStart Inc.
                      </div>
                    </div>
                  </div>

                  {/* Badge Earned */}
                  <div>
                    <h4 className="font-medium mb-3">Badge Earned!</h4>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                          🎨
                        </div>
                        <div className="ml-3">
                          <div className="font-medium text-gray-900">UI/UX Hero</div>
                          <div className="text-sm text-gray-600">Completed first design challenge with 5-star rating</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => onNavigate('badges')}
                  >
                    View All Badges
                  </Button>
                </div>
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <span className="text-4xl block mb-2">⏳</span>
                  <p>Waiting for mentor feedback...</p>
                  <p className="text-sm mt-1">Usually received within 2-3 days</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
