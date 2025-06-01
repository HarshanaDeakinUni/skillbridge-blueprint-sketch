
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BadgeShowcaseProps {
  onNavigate: (page: string) => void;
}

const badges = [
  {
    id: 1,
    name: 'UI/UX Hero',
    description: 'Completed first design challenge with 5-star rating',
    icon: '🎨',
    earned: true,
    category: 'Design'
  },
  {
    id: 2,
    name: 'Frontend Wizard',
    description: 'Built 3 responsive web applications',
    icon: '⚡',
    earned: true,
    category: 'Development'
  },
  {
    id: 3,
    name: 'API Master',
    description: 'Successfully integrated 5+ external APIs',
    icon: '🔗',
    earned: true,
    category: 'Backend'
  },
  {
    id: 4,
    name: 'Client Favorite',
    description: 'Received 3 consecutive 5-star ratings',
    icon: '⭐',
    earned: true,
    category: 'Performance'
  },
  {
    id: 5,
    name: 'Quick Learner',
    description: 'Completed first task ahead of deadline',
    icon: '🚀',
    earned: true,
    category: 'Performance'
  },
  {
    id: 6,
    name: 'Team Player',
    description: 'Collaborate on 5+ team projects',
    icon: '🤝',
    earned: false,
    category: 'Collaboration'
  },
  {
    id: 7,
    name: 'Data Scientist',
    description: 'Complete 3 data analysis projects',
    icon: '📊',
    earned: false,
    category: 'Analytics'
  },
  {
    id: 8,
    name: 'Mobile Expert',
    description: 'Build 3 mobile applications',
    icon: '📱',
    earned: false,
    category: 'Mobile'
  }
];

const BadgeShowcase = ({ onNavigate }: BadgeShowcaseProps) => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const availableBadges = badges.filter(badge => !badge.earned);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('dashboard')}
          className="mb-6"
        >
          ← Back to Dashboard
        </Button>

        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
            AS
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Alex Student</h1>
          <p className="text-gray-600">Computer Science Student • Portfolio Builder</p>
          <div className="flex justify-center space-x-6 mt-4 text-sm">
            <div>
              <span className="font-bold text-2xl text-blue-600">{earnedBadges.length}</span>
              <div className="text-gray-600">Badges Earned</div>
            </div>
            <div>
              <span className="font-bold text-2xl text-green-600">7</span>
              <div className="text-gray-600">Tasks Completed</div>
            </div>
            <div>
              <span className="font-bold text-2xl text-purple-600">4.9</span>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>
        </div>

        {/* Earned Badges */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🏆 Earned Badges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {earnedBadges.map((badge) => (
              <Card key={badge.id} className="hover:shadow-lg transition-shadow border-2 border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{badge.icon}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{badge.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{badge.description}</p>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                    {badge.category}
                  </div>
                  <div className="text-xs text-green-600 font-medium mt-2">✓ Earned</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Badges */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Available Badges</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {availableBadges.map((badge) => (
              <Card key={badge.id} className="hover:shadow-lg transition-shadow border border-gray-200 opacity-75">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 grayscale">{badge.icon}</div>
                  <h3 className="font-bold text-gray-700 mb-2">{badge.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{badge.description}</p>
                  <div className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {badge.category}
                  </div>
                  <div className="text-xs text-gray-400 font-medium mt-2">🔒 Locked</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to earn more badges?</h3>
          <p className="text-gray-600 mb-4">Complete more tasks and challenges to unlock achievements</p>
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            onClick={() => onNavigate('dashboard')}
          >
            Browse Available Tasks
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BadgeShowcase;
