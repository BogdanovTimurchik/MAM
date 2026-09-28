export type EcosystemView = 'website' | 'mobile' | 'admin' | 'marketing';

export type UserRole = 'public' | 'student_parent' | 'admin_teacher';

export interface Course {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  ageRange: string;
  minAge: number;
  maxAge: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Начальный' | 'Средний' | 'Продвинутый';
  durationMonths: number;
  sessionsPerWeek: number;
  hoursPerSession: number;
  monthlyTuitionUSD: number;
  tags: string[];
  gradient: string;
  badge: string;
  outcomeProject: string;
  curriculumModules: {
    title: string;
    weeks: string;
    deliverables: string[];
  }[];
  hardwareRequirements: string;
}

export interface Student {
  id: string;
  fullName: string;
  age: number;
  avatar: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  courseId: string;
  groupId: string;
  currentLevel: number;
  xpPoints: number;
  streakDays: number;
  attendanceRate: number;
  laptopId: string;
  joinedDate: string;
  recentProjects: {
    title: string;
    description: string;
    stars: number;
    completionDate: string;
    demoUrl?: string;
  }[];
  mentorNotes: {
    date: string;
    mentor: string;
    note: string;
    rating: number;
  }[];
}

export interface MiniGroup {
  id: string;
  code: string;
  courseId: string;
  courseTitle: string;
  mentorName: string;
  mentorAvatar: string;
  daySchedule: string;
  timeSlot: string;
  labRoom: string;
  maxCapacity: 5;
  studentIds: string[];
  status: 'Active' | 'Forming' | 'Completed';
  currentModule: string;
}

export interface HardwareDevice {
  id: string;
  serialNumber: string;
  model: string;
  specs: string;
  assignedStudentId?: string;
  assignedStudentName?: string;
  labStation: string;
  batteryHealthPercent: number;
  osStatus: 'Encrypted & Monitored' | 'Standard' | 'Maintenance Required' | 'Зашифровано и проверено' | 'Требуется ТО' | 'Стандартный';
  status: 'In-Lab Assigned' | 'Available' | 'Bench Repair';
  lastAuditDate: string;
}

export interface Lead {
  id: string;
  parentName: string;
  studentName: string;
  studentAge: number;
  phone: string;
  email: string;
  interestedCourseId: string;
  preferredSlot: string;
  stage: 'New Lead' | 'Trial Booked' | 'Trial Completed' | 'Enrolled' | 'Disqualified';
  notes: string;
  createdAt: string;
  trialDate?: string;
  dealValue: number;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  studentName: string;
  courseName: string;
  issueDate: string;
  mentorName: string;
  gradeScore: string;
  verificationCode: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  category: string;
  answer: string;
}
