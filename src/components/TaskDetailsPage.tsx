
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface TaskDetailsPageProps {
  taskId: string;
  onNavigate: (page: string) => void;
}

const TaskDetailsPage = ({ taskId, onNavigate }: TaskDetailsPageProps) => {
  const [isApplied, setIsApplied] = useState(false);

  // Mock task data - in real app this would come from API
  const task = {
    id: taskId,
    title: 'E-commerce Website Redesign',
    company: 'TechStart Inc.',
    description: 'We are looking for a talented UI/UX designer to redesign our e-commerce product pages. The goal is to improve user experience and increase conversion rates. You will work closely with our product team to understand user pain points and create wireframes, prototypes, and final designs.',
    fullDescription: `This project involves:
    • Conducting user research and analyzing current metrics
    • Creating user personas and journey maps
    • Designing wireframes and interactive prototypes
    • Delivering final high-fidelity designs in Figma
    • Presenting your design decisions to stakeholders`,
    deadline: '5 days',
    duration: '2 weeks',
    tags: ['UI/UX', 'Figma', 'User Research', 'Prototyping'],
    applicants: 12,
    requirements: [
      'Proficiency in Figma or similar design tools',
      'Understanding of e-commerce best practices',
      'Portfolio showcasing UI/UX work',
      'Strong communication skills'
    ]
  };

  const handleApply = () => {
    setIsApplied(true);
    setTimeout(() => {
      onNavigate('submission');
    }, 1500);
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

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl mb-2">{task.title}</CardTitle>
                    <p className="text-lg text-gray-600">{task.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="font-medium">Deadline: {task.deadline}</div>
                    <div>Duration: {task.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{task.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Details</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <pre className="whitespace-pre-wrap text-sm text-gray-700">
                        {task.fullDescription}
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                    <ul className="space-y-2">
                      {task.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {task.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Apply for this Task</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{task.applicants}</div>
                  <div className="text-sm text-gray-600">students applied</div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deadline:</span>
                    <span className="font-medium">{task.deadline}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{task.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Difficulty:</span>
                    <span className="font-medium">Intermediate</span>
                  </div>
                </div>

                {!isApplied ? (
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    onClick={handleApply}
                  >
                    Apply Now
                  </Button>
                ) : (
                  <div className="text-center">
                    <div className="text-green-600 font-medium mb-2">✓ Application Submitted!</div>
                    <p className="text-sm text-gray-600">You'll hear back within 2-3 days</p>
                  </div>
                )}

                <div className="text-xs text-gray-500 text-center">
                  By applying, you agree to our terms of service
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
