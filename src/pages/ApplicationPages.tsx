import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Briefcase, Upload, X, CheckCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ── helpers ─────────────────────────────────────────── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-ghost/80 text-[11px] font-bold uppercase tracking-[1px] mb-2">
      {children}
    </label>
  );
}

function FieldInput({ id, type = 'text', placeholder, required, ...rest }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all"
      {...rest}
    />
  );
}

function SelectField({ id, children, required, ...rest }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select
        id={id}
        required={required}
        className="w-full appearance-none bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all cursor-pointer"
        {...rest}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan pointer-events-none" />
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
      <h2 className="text-white font-bold text-lg uppercase tracking-[1.5px] mb-6 pb-3 border-b border-white/10 flex items-center gap-2">
        <span className="w-1 h-5 bg-cyan rounded-full inline-block" />
        {title}
      </h2>
      <div className="flex flex-col gap-5">{children}</div>
    </div>
  );
}

/* ── File Upload ─────────────────────────────────────── */
function FileUpload({
  id,
  label,
  accept,
  required,
  file,
  onChange,
}: {
  id: string;
  label: string;
  accept: string;
  required?: boolean;
  file: File | null;
  onChange: (f: File | null) => void;
}) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Label>{label}{required ? ' *' : ' (Optional)'}</Label>
      <div
        onClick={() => ref.current?.click()}
        className={`relative flex items-center justify-center gap-3 border-2 border-dashed rounded-xl py-8 cursor-pointer transition-all ${
          file ? 'border-cyan/50 bg-cyan/5' : 'border-white/10 hover:border-cyan/30 hover:bg-white/5'
        }`}
      >
        <input
          ref={ref}
          id={id}
          type="file"
          accept={accept}
          required={required}
          className="hidden"
          onChange={(e) => onChange(e.target.files?.[0] ?? null)}
        />
        {file ? (
          <div className="flex items-center gap-3 text-cyan text-sm font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span className="truncate max-w-[200px]">{file.name}</span>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onChange(null); if (ref.current) ref.current.value = ''; }}
              className="ml-1 text-white/40 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="text-center">
            <Upload className="w-8 h-8 text-white/30 mx-auto mb-2" />
            <p className="text-ghost/50 text-sm">Click to upload</p>
            <p className="text-ghost/30 text-xs mt-1">{accept.replace(/\./g, '').toUpperCase()}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Opt dropdown ────────────────────────────────────── */
const optNa = <option value="" className="bg-navy">Select one...</option>;

/* ══════════════════════════════════════════════════════ */
/*   SALES APPLICATION PAGE                               */
/* ══════════════════════════════════════════════════════ */
export function SalesApplicationPage() {
  const [resume, setResume] = useState<File | null>(null);
  const [certs, setCerts] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return <ThankYou role="Sales" />;
  }

  return (
    <main className="min-h-screen bg-navy relative pt-44 pb-24 overflow-hidden">
      <BgDecorations />
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <PageHeader
          icon={Briefcase}
          label="Sales Position"
          title="Sales Application"
          subtitle="Tell us about yourself and your sales experience. Fields marked * are required."
          backTo="/employment"
        />

        <form onSubmit={handleSubmit} noValidate>
          {/* Basic Info */}
          <SectionCard title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label>Full Name *</Label>
                <FieldInput id="sales-name" placeholder="Jane Smith" required />
              </div>
              <div>
                <Label>Phone Number *</Label>
                <FieldInput id="sales-phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
            </div>
            <div>
              <Label>Email Address *</Label>
              <FieldInput id="sales-email" type="email" placeholder="jane@example.com" required />
            </div>
            <div>
              <Label>City / Area You Live In *</Label>
              <FieldInput id="sales-city" placeholder="e.g. Savannah, GA" required />
            </div>
          </SectionCard>

          {/* Work Details */}
          <SectionCard title="Work Details">
            <div>
              <Label>Availability *</Label>
              <SelectField id="sales-availability" required>
                {optNa}
                <option value="full-time" className="bg-navy">Full-Time</option>
                <option value="part-time" className="bg-navy">Part-Time</option>
              </SelectField>
            </div>
            <div>
              <Label>When Can You Start? *</Label>
              <FieldInput id="sales-start" type="date" required />
            </div>
          </SectionCard>

          {/* Experience */}
          <SectionCard title="Experience">
            <div>
              <Label>Years of Experience in Sales or Construction *</Label>
              <SelectField id="sales-years" required>
                {optNa}
                <option value="0" className="bg-navy">0</option>
                <option value="1-2" className="bg-navy">1–2 Years</option>
                <option value="3-5" className="bg-navy">3–5 Years</option>
                <option value="5+" className="bg-navy">5+ Years</option>
              </SelectField>
            </div>
            <div>
              <Label>Briefly Describe Your Experience *</Label>
              <textarea
                id="sales-experience"
                rows={4}
                required
                placeholder="Describe your sales background, industries worked in, key achievements..."
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none"
              />
            </div>
          </SectionCard>

          {/* Qualifications */}
          <SectionCard title="Qualifications">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <Label>Valid Driver's License? *</Label>
                <SelectField id="sales-license" required>
                  {optNa}
                  <option value="yes" className="bg-navy">Yes</option>
                  <option value="no" className="bg-navy">No</option>
                </SelectField>
              </div>
              <div>
                <Label>Reliable Transportation? *</Label>
                <SelectField id="sales-transport" required>
                  {optNa}
                  <option value="yes" className="bg-navy">Yes</option>
                  <option value="no" className="bg-navy">No</option>
                </SelectField>
              </div>
              <div>
                <Label>Authorized to Work in U.S.? *</Label>
                <SelectField id="sales-authorized" required>
                  {optNa}
                  <option value="yes" className="bg-navy">Yes</option>
                  <option value="no" className="bg-navy">No</option>
                </SelectField>
              </div>
            </div>
          </SectionCard>

          {/* Resume */}
          <SectionCard title="Resume & Documents">
            <FileUpload
              id="sales-resume"
              label="Upload Resume *"
              accept=".pdf,.doc,.docx"
              required
              file={resume}
              onChange={setResume}
            />
            <FileUpload
              id="sales-certs"
              label="Upload Certifications or Past Work"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              file={certs}
              onChange={setCerts}
            />
          </SectionCard>

          {/* Final Questions */}
          <SectionCard title="Final Questions">
            <div>
              <Label>Why Do You Want to Work With Us? *</Label>
              <textarea
                id="sales-why"
                rows={3}
                required
                placeholder="Tell us what draws you to Diamond Roof Restoration..."
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none"
              />
            </div>
            <div>
              <Label>Target Annual Income *</Label>
              <FieldInput id="sales-target-income" placeholder="e.g. $80,000" required />
            </div>
            <div>
              <Label>What Have You Earned in a Previous Sales Role? *</Label>
              <FieldInput id="sales-past-income" placeholder="e.g. $65,000 base + $20,000 commission" required />
            </div>
          </SectionCard>

          {/* Submit */}
          <ConsentAndSubmit submitLabel="Submit Sales Application" />
        </form>
      </div>
    </main>
  );
}

/* ══════════════════════════════════════════════════════ */
/*   LABOR / SUBCONTRACTOR APPLICATION PAGE               */
/* ══════════════════════════════════════════════════════ */
export function LaborApplicationPage() {
  const [resume, setResume] = useState<File | null>(null);
  const [photos, setPhotos] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (submitted) {
    return <ThankYou role="Labor / Subcontractor" />;
  }

  return (
    <main className="min-h-screen bg-navy relative pt-44 pb-24 overflow-hidden">
      <BgDecorations />
      <div className="container mx-auto px-6 relative z-10 max-w-3xl">
        <PageHeader
          icon={HardHatIcon}
          label="Labor / Subcontractor Position"
          title="Field Application"
          subtitle="Join our roofing crew. Fields marked * are required."
          backTo="/employment"
        />

        <form onSubmit={handleSubmit} noValidate>
          {/* Basic Info */}
          <SectionCard title="Basic Information">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label>Full Name *</Label>
                <FieldInput id="labor-name" placeholder="John Doe" required />
              </div>
              <div>
                <Label>Phone Number *</Label>
                <FieldInput id="labor-phone" type="tel" placeholder="(555) 000-0000" required />
              </div>
            </div>
            <div>
              <Label>Email Address *</Label>
              <FieldInput id="labor-email" type="email" placeholder="john@example.com" required />
            </div>
            <div>
              <Label>City / Area You Live In *</Label>
              <FieldInput id="labor-city" placeholder="e.g. Jesup, GA" required />
            </div>
          </SectionCard>

          {/* Work Details */}
          <SectionCard title="Work Details">
            <div>
              <Label>Availability *</Label>
              <SelectField id="labor-availability" required>
                {optNa}
                <option value="full-time" className="bg-navy">Full-Time</option>
                <option value="part-time" className="bg-navy">Part-Time</option>
              </SelectField>
            </div>
            <div>
              <Label>When Can You Start? *</Label>
              <FieldInput id="labor-start" type="date" required />
            </div>
          </SectionCard>

          {/* Experience */}
          <SectionCard title="Experience">
            <div>
              <Label>Years of Construction / Roofing Experience *</Label>
              <SelectField id="labor-years" required>
                {optNa}
                <option value="0" className="bg-navy">0</option>
                <option value="1-2" className="bg-navy">1–2 Years</option>
                <option value="3-5" className="bg-navy">3–5 Years</option>
                <option value="5+" className="bg-navy">5+ Years</option>
              </SelectField>
            </div>
            <div>
              <Label>Briefly Describe Your Experience *</Label>
              <textarea
                id="labor-experience"
                rows={4}
                required
                placeholder="Types of roofing, projects worked on, trades and skills..."
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none"
              />
            </div>
          </SectionCard>

          {/* Practical Questions */}
          <SectionCard title="Practical Questions">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label>Valid Driver's License? *</Label>
                <SelectField id="labor-license" required>
                  {optNa}
                  <option value="yes" className="bg-navy">Yes</option>
                  <option value="no" className="bg-navy">No</option>
                </SelectField>
              </div>
              <div>
                <Label>Reliable Transportation? *</Label>
                <SelectField id="labor-transport" required>
                  {optNa}
                  <option value="yes" className="bg-navy">Yes</option>
                  <option value="no" className="bg-navy">No</option>
                </SelectField>
              </div>
            </div>
            <div>
              <Label>Comfortable Working on Roofs / Heights? *</Label>
              <SelectField id="labor-heights" required>
                {optNa}
                <option value="yes" className="bg-navy">Yes</option>
                <option value="no" className="bg-navy">No</option>
              </SelectField>
            </div>
            <div>
              <div className="flex items-start justify-between mb-2">
                <Label>Do You Have Your Own Tools?</Label>
              </div>
              <p className="text-ghost/40 text-xs mb-2 -mt-1">
                Not a disqualifier — we have positions for all levels of equipment ownership.
              </p>
              <SelectField id="labor-tools" required>
                {optNa}
                <option value="yes" className="bg-navy">Yes</option>
                <option value="no" className="bg-navy">No</option>
              </SelectField>
            </div>
          </SectionCard>

          {/* Resume */}
          <SectionCard title="Resume & Work Samples">
            <FileUpload
              id="labor-resume"
              label="Upload Resume"
              accept=".pdf,.doc,.docx"
              file={resume}
              onChange={setResume}
            />
            <FileUpload
              id="labor-photos"
              label="Upload Photos of Past Work"
              accept=".jpg,.jpeg,.png,.pdf"
              file={photos}
              onChange={setPhotos}
            />
          </SectionCard>

          {/* Final Question */}
          <SectionCard title="Final Question">
            <div>
              <Label>Why Do You Want to Work With Us? (Optional)</Label>
              <textarea
                id="labor-why"
                rows={3}
                placeholder="What interests you about Diamond Roof Restoration?..."
                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 focus:bg-white/5 transition-all resize-none"
              />
            </div>
          </SectionCard>

          {/* Confirmation checkbox + submit */}
          <ConsentAndSubmit submitLabel="Submit Application" showAccuracyCheck />
        </form>
      </div>
    </main>
  );
}

/* ══════════════════════════════════════════════════════ */
/*   SHARED SUB-COMPONENTS                               */
/* ══════════════════════════════════════════════════════ */

function HardHatIcon({ className }: { className?: string }) {
  return <HardHat className={className} />;
}

function BgDecorations() {
  return (
    <>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none" />
    </>
  );
}

function PageHeader({
  icon: Icon,
  label,
  title,
  subtitle,
  backTo,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  subtitle: string;
  backTo: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-ghost/50 hover:text-cyan text-xs uppercase tracking-[2px] font-bold transition-colors mb-8"
      >
        ← Back to Careers
      </Link>
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-[11px] font-bold uppercase tracking-[2px] mb-5">
        <Icon className="w-3.5 h-3.5" />
        {label}
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight mb-4">
        {title}
      </h1>
      <p className="text-ghost/60 text-base leading-relaxed">{subtitle}</p>
    </motion.div>
  );
}

function ConsentAndSubmit({
  submitLabel,
  showAccuracyCheck = false,
}: {
  submitLabel: string;
  showAccuracyCheck?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {showAccuracyCheck && (
        <div className="flex items-start gap-3 mb-6 p-5 rounded-xl bg-white/5 border border-white/10">
          <input
            type="checkbox"
            id="accuracy-confirm"
            required
            className="mt-0.5 flex-shrink-0 w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-cyan checked:border-cyan relative cursor-pointer transition-colors"
          />
          <label htmlFor="accuracy-confirm" className="text-[11px] text-ghost/70 leading-relaxed cursor-pointer">
            <span className="text-white font-semibold">I confirm the information provided is accurate.</span>{' '}
            I understand that submitting false information may disqualify my application.
          </label>
        </div>
      )}

      <div className="flex items-start gap-3 mb-8 p-5 rounded-xl bg-white/5 border border-white/10">
        <input
          type="checkbox"
          id="consent-employment"
          required
          className="mt-0.5 flex-shrink-0 w-4 h-4 rounded appearance-none border border-white/20 bg-white/5 checked:bg-cyan checked:border-cyan relative cursor-pointer transition-colors"
        />
        <label htmlFor="consent-employment" className="text-[11px] text-ghost/70 leading-relaxed cursor-pointer">
          I agree to the{' '}
          <Link to="/terms" className="text-cyan hover:underline">Terms &amp; Conditions</Link>{' '}
          and{' '}
          <Link to="/privacy" className="text-cyan hover:underline">Privacy Policy</Link>.{' '}
          My information will only be used for hiring purposes.
        </label>
      </div>

      <button
        type="submit"
        className="w-full group shimmer-btn bg-cyan text-white px-8 py-5 rounded-xl text-[13px] font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.3)] hover:shadow-[0_0_50px_rgba(64,145,177,0.5)] transition-all flex items-center justify-center gap-3"
      >
        <span>{submitLabel}</span>
        <CheckCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
    </motion.div>
  );
}

function ThankYou({ role }: { role: string }) {
  return (
    <main className="min-h-screen bg-navy flex items-center justify-center pt-32 pb-24 overflow-hidden relative">
      <BgDecorations />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center max-w-lg mx-auto px-6"
      >
        <div className="w-20 h-20 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-cyan" />
        </div>
        <h1 className="text-4xl font-extrabold text-white uppercase tracking-tight mb-4">
          Application Submitted!
        </h1>
        <p className="text-ghost/70 text-base leading-relaxed mb-8">
          Thank you for applying for the <span className="text-cyan font-semibold">{role}</span> position at Diamond Roof Restoration.
          Our team will review your application and reach out within <strong className="text-white">2–3 business days</strong>.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 shimmer-btn bg-cyan text-white px-8 py-4 rounded-xl text-sm font-extrabold uppercase tracking-[2px] shadow-[0_0_30px_rgba(64,145,177,0.3)] hover:shadow-[0_0_50px_rgba(64,145,177,0.5)] transition-all"
        >
          Return Home
        </Link>
      </motion.div>
    </main>
  );
}
