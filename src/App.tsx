import React, { useState, useEffect } from 'react';
import { Lead } from './types';
import { NavigationHeader } from './components/NavigationHeader';
import { LandingWebsite } from './components/public/LandingWebsite';
import { TrialBookingModal } from './components/modals/TrialBookingModal';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';

function AppContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedCourseId, setPreselectedCourseId] = useState<string | undefined>(undefined);
  const [activeBooking, setActiveBooking] = useState<Lead | null>(() => {
    try {
      const saved = localStorage.getItem('mam_active_booking');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const { localizedCourses } = useLanguage();

  const handleOpenBooking = (courseId?: string) => {
    setPreselectedCourseId(courseId);
    setIsBookingModalOpen(true);
  };

  const handleLeadCreated = (newLead: Lead) => {
    setActiveBooking(newLead);
    try {
      localStorage.setItem('mam_active_booking', JSON.stringify(newLead));
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Website Top Navigation */}
      <NavigationHeader
        onOpenBooking={() => handleOpenBooking()}
        hasActiveBooking={!!activeBooking}
        onViewBookingTicket={() => setIsBookingModalOpen(true)}
      />

      {/* Main Website View */}
      <main className="flex-1">
        <LandingWebsite
          onOpenBooking={() => handleOpenBooking()}
          onOpenBookingWithCourse={(courseId) => handleOpenBooking(courseId)}
          onLeadCreated={handleLeadCreated}
        />
      </main>

      {/* Trial Booking Modal */}
      <TrialBookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        courses={localizedCourses}
        preselectedCourseId={preselectedCourseId}
        onLeadCreated={handleLeadCreated}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
