
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface StudentDashboardProps {
  onNavigate: (page: string, taskId?: string) => void;
}

const tasks = [
  {
    id: '1',
    title: 'E-commerce Website Redesign',
    company: 'TechStart Inc.',
    description: 'Redesign our product pages to improve conversion rates',
    deadline: '5 days',
    duration: '2 weeks',
    tags: ['UI/UX', 'Figma', 'User Research'],
    applicants: 12
  },
  {
    id: '2',
    title: 'Mobile App API Integration',
    company: 'Digital Solutions',
    description: 'Integrate payment gateway and user authentication APIs',
    deadline: '3 days',
    duration: '1 week',
    tags: ['JavaScript', 'Node.js', 'API'],
    applicants: 8
  },
  {
    id: '3',
    title: 'Social Media Analytics Dashboard',
    company: 'GrowthCorp',
    description: 'Build a dashboard to track social media performance metrics',
    deadline: '1 week',
    duration: '3 weeks',
    tags: ['React', 'D3.js', 'Analytics'],
    applicants: 15
  }
];

const StudentDashboard = ({ onNavigate }: StudentDashboardProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Notification Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <span className="text-blue-600 mr-2">📬</span>
            <span className="text-blue-800 font-medium">1 new feedback received!</span>
            <Button variant="ghost" size="sm" className="ml-auto text-blue-600">
              View
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tasks Completed</span>
                    <span className="font-medium">7/10</span>
                  </div>
                  <Progress value={70} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>In Progress</span>
                    <span className="font-medium">2</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Badges Earned</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full" 
                  onClick={() => onNavigate('badges')}
                >
                  View Badges
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Available Tasks</h1>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Filter</Button>
                <Button variant="outline" size="sm">Sort</Button>
              </div>
            </div>

            <div className="grid gap-6">
              {tasks.map((task) => (
                <Card key={task.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {task.title}
                        </h3>
                        <p className="text-gray-600">{task.company}</p>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>Deadline: {task.deadline}</div>
                        <div>Duration: {task.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{task.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {task.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {task.applicants} students applied
                      </span>
                      <Button onClick={() => onNavigate('task-details', task.id)}>
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
