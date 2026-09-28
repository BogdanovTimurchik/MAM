import React, { useState } from 'react';
import { X, CheckCircle2, User, Phone, Mail, Award, Laptop, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Course, Lead } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

interface TrialBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  preselectedCourseId?: string;
  onLeadCreated: (lead: Lead) => void;
}

export const TrialBookingModal: React.FC<TrialBookingModalProps> = ({
  isOpen,
  onClose,
  courses,
  preselectedCourseId,
  onLeadCreated
}) => {
  const { t } = useLanguage();
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState(11);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [courseId, setCourseId] = useState(preselectedCourseId || courses[0]?.id || 'python-ai-kids');
  const [preferredSlot, setPreferredSlot] = useState('Вторник 16:00 (Лаб. Альфа)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!parentName.trim()) newErrors.parentName = t.bookingModal.parentNameLabel;
    if (!studentName.trim()) newErrors.studentName = t.bookingModal.studentNameLabel;
    if (!phone.trim() || phone.length < 8) newErrors.phone = t.bookingModal.phoneLabel;
    if (!email.trim() || !email.includes('@')) newErrors.email = t.bookingModal.emailLabel;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newLead: Lead = {
      id: `lead-${Date.now().toString().slice(-4)}`,
      parentName,
      studentName,
      studentAge,
      phone,
      email,
      interestedCourseId: courseId,
      preferredSlot,
      stage: 'Trial Booked',
      notes: `Заявка через сайт MAM на слот: ${preferredSlot}. Возраст: ${studentAge} лет.`,
      createdAt: new Date().toISOString().split('T')[0],
      trialDate: preferredSlot,
      dealValue: 1440
    };

    onLeadCreated(newLead);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div id="trial-booking-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div 
        id="trial-booking-modal-card"
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-800"
      >
        {/* Top Glow Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500" />

        {/* Close Button */}
        <button
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  MAM TRIAL
                </span>
                <span className="text-xs font-mono text-slate-500">{t.hero.spotsRemainingBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {t.bookingModal.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {t.bookingModal.subtitle}
              </p>
            </div>

            {/* Quick Benefits Banner */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 text-center text-xs">
              <div className="flex flex-col items-center">
                <Laptop className="w-4 h-4 text-emerald-600 mb-1" />
                <span className="text-[11px] font-semibold text-slate-800">1:1 Workstation</span>
                <span className="text-[9px] text-slate-500">ThinkPad / Mac</span>
              </div>
              <div className="flex flex-col items-center border-x border-slate-200 px-1">
                <Award className="w-4 h-4 text-teal-600 mb-1" />
                <span className="text-[11px] font-semibold text-slate-800">5:1 Ratio</span>
                <span className="text-[9px] text-slate-500">Max Attention</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-4 h-4 text-indigo-600 mb-1" />
                <span className="text-[11px] font-semibold text-slate-800">First Code</span>
                <span className="text-[9px] text-slate-500">In 12 Minutes</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.parentNameLabel}
                  </label>
                  <div className="relative">
                    <input
                      id="input-parent-name"
                      type="text"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      placeholder={t.bookingModal.parentNamePlaceholder}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white ${
                        errors.parentName ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    <User className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                  {errors.parentName && <p className="text-[10px] text-rose-500 mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.phoneLabel}
                  </label>
                  <div className="relative">
                    <input
                      id="input-parent-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.bookingModal.phonePlaceholder}
                      className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white ${
                        errors.phone ? 'border-rose-400' : 'border-slate-200'
                      }`}
                    />
                    <Phone className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                  {errors.phone && <p className="text-[10px] text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.studentNameLabel}
                  </label>
                  <input
                    id="input-student-name"
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder={t.bookingModal.studentNamePlaceholder}
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white ${
                      errors.studentName ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  {errors.studentName && <p className="text-[10px] text-rose-500 mt-1">{errors.studentName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.studentAgeLabel}
                  </label>
                  <select
                    id="input-student-age"
                    value={studentAge}
                    onChange={(e) => setStudentAge(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white"
                  >
                    {Array.from({ length: 11 }, (_, i) => i + 7).map((age) => (
                      <option key={age} value={age}>
                        {age} {t.calculator.yearsOldUnit}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t.bookingModal.emailLabel}
                </label>
                <div className="relative">
                  <input
                    id="input-parent-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="family@example.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white ${
                      errors.email ? 'border-rose-400' : 'border-slate-200'
                    }`}
                  />
                  <Mail className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
                {errors.email && <p className="text-[10px] text-rose-500 mt-1">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.courseLabel}
                  </label>
                  <select
                    id="input-course-select"
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white"
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} ({c.ageRange})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t.bookingModal.preferredTimeLabel}
                  </label>
                  <select
                    id="input-slot-select"
                    value={preferredSlot}
                    onChange={(e) => setPreferredSlot(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white"
                  >
                    <option value="Вторник 16:00 (Лаб. Альфа)">Вторник 16:00 (Лаб. Альфа — 1 место)</option>
                    <option value="Среда 17:30 (Лаб. Бета)">Среда 17:30 (Лаб. Бета — 2 места)</option>
                    <option value="Четверг 16:00 (Лаб. Альфа)">Четверг 16:00 (Лаб. Альфа — 1 место)</option>
                    <option value="Суббота 11:00 (Интенсив Дельта)">Суббота 11:00 (Интенсив Дельта — 1 место)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  id="submit-booking-form-btn"
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-white" />
                  <span>{t.bookingModal.submitBtn}</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  🔒 {t.bookingModal.guaranteeText}
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 sm:p-12 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-50 border-2 border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-600" />
            </div>

            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                VERIFIED
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
                {t.bookingModal.successTitle}
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                {t.bookingModal.successDesc}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs font-mono space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">{t.bookingModal.parentNameLabel.replace('*', '').trim()}:</span>
                <span className="text-slate-900 font-sans font-medium">{parentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.bookingModal.phoneLabel.replace('*', '').trim()}:</span>
                <span className="text-emerald-700 font-bold">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">{t.bookingModal.preferredTimeLabel}:</span>
                <span className="text-slate-900">{preferredSlot}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors"
            >
              {t.bookingModal.doneBtn}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

