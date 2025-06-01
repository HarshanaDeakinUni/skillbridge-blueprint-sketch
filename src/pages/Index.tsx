
import { useState } from "react";
import Navigation from "@/components/Navigation";
import LandingPage from "@/components/LandingPage";
import StudentDashboard from "@/components/StudentDashboard";
import TaskDetailsPage from "@/components/TaskDetailsPage";
import SubmissionPage from "@/components/SubmissionPage";
import BadgeShowcase from "@/components/BadgeShowcase";

const Index = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [selectedTaskId, setSelectedTaskId] = useState<string>('');

  const handleNavigate = (page: string, taskId?: string) => {
    setCurrentPage(page);
    if (taskId) {
      setSelectedTaskId(taskId);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'landing' && (
        <LandingPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'dashboard' && (
        <StudentDashboard onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'task-details' && (
        <TaskDetailsPage taskId={selectedTaskId} onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'submission' && (
        <SubmissionPage onNavigate={handleNavigate} />
      )}
      
      {currentPage === 'badges' && (
        <BadgeShowcase onNavigate={handleNavigate} />
      )}
    </div>
  );
};

export default Index;
