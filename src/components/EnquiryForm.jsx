import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const ENQUIRY_TYPES = [
  'General Enquiry',
  'Membership Plans',
  'Personal Training',
  'Group Training',
  'Facilities',
  'Other',
];

const INITIAL_FORM = {
  fullName: '',
  phone: '',
  email: '',
  enquiryType: '',
  message: '',
};

// Strip null bytes and control characters (except newlines for textarea)
function stripControlChars(value, allowNewlines = false) {
  if (allowNewlines) {
    return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');
  }
  return value.replace(/[\x00-\x1F\x7F]/g, '');
}

function validate(fields) {
  const errors = {};

  if (!fields.fullName.trim()) {
    errors.fullName = 'Full name is required.';
  } else if (fields.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters.';
  } else if (fields.fullName.trim().length > 100) {
    errors.fullName = 'Name must not exceed 100 characters.';
  }

  if (!fields.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (fields.phone.trim().length > 15) {
    errors.phone = 'Phone number must not exceed 15 characters.';
  } else if (!/^[6-9]\d{9}$/.test(fields.phone.replace(/\s+/g, ''))) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number.';
  }

  if (fields.email.trim()) {
    if (fields.email.trim().length > 254) {
      errors.email = 'Email must not exceed 254 characters.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      errors.email = 'Enter a valid email address.';
    }
  }

  if (!fields.enquiryType) {
    errors.enquiryType = 'Please select an enquiry type.';
  } else if (!ENQUIRY_TYPES.includes(fields.enquiryType)) {
    errors.enquiryType = 'Invalid enquiry type selected.';
  }

  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.';
  } else if (fields.message.trim().length > 2000) {
    errors.message = 'Message must not exceed 2000 characters.';
  }

  return errors;
}

/** Single form field with label, input/textarea, and error display */
function FormField({ id, label, error, required, children }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-heading uppercase tracking-wider text-white/70 mb-2"
      >
        {label}
        {required && <span className="text-brand-red ml-1">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1.5 text-brand-red text-xs mt-1.5"
            role="alert"
          >
            <AlertCircle size={12} />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

const inputBase =
  'w-full bg-brand-gray border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-red transition-colors duration-200';

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const THROTTLE_MS = 10000; // 10 seconds between submissions

  function handleChange(e) {
    const { name, value } = e.target;
    const isMessage = name === 'message';
    const sanitizedValue = stripControlChars(value, isMessage);
    
    setForm((prev) => ({ ...prev, [name]: sanitizedValue }));
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    // Validate on blur for immediate feedback
    const fieldErrors = validate({ ...form });
    setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastSubmitTime < THROTTLE_MS) {
      setErrors({ form: `Please wait a moment before submitting again.` });
      return;
    }

    const allErrors = validate(form);
    setErrors(allErrors);
    setTouched(
      Object.keys(INITIAL_FORM).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    );

    if (Object.keys(allErrors).length > 0) return;

    // Simulate async submission (ready for real backend/WhatsApp/email integration)
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setLastSubmitTime(Date.now());
    }, 1200);
  }

  function handleReset() {
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setSubmitted(false);
    setLastSubmitTime(0);
  }

  return (
    <section
      id="enquiry"
      className="section-padding px-4 bg-brand-dark"
      aria-label="Enquiry form"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="text-brand-red uppercase tracking-[0.2em] text-sm font-heading block mb-4"
          >
            Reach Out
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Send an <span className="text-brand-red">Enquiry</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-muted mt-4 text-base leading-relaxed"
          >
            Fill in the form below and our team will get back to you.
          </motion.p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="bg-brand-charcoal border border-white/5 p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                  className="w-16 h-16 bg-brand-red/10 border border-brand-red/30 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle size={32} className="text-brand-red" />
                </motion.div>
                <h3 className="font-heading text-2xl uppercase tracking-wider mb-3">
                  Enquiry Received!
                </h3>
                <p className="text-brand-muted text-base leading-relaxed mb-8 max-w-sm mx-auto">
                  {/* React JSX auto-escapes {form.fullName} — no XSS risk */}
                  Thank you, <strong className="text-white">{form.fullName.trim()}</strong>. We've recorded
                  your enquiry and will be in touch with you shortly.
                </p>
                <button
                  onClick={handleReset}
                  className="border border-white/20 text-white px-8 py-3 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200"
                >
                  Send Another Enquiry
                </button>
              </motion.div>
            ) : (
              /* ── Form State ── */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
                aria-label="Enquiry form"
              >
                {/* Row 1: Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="fullName"
                    label="Full Name"
                    error={touched.fullName ? errors.fullName : undefined}
                    required
                  >
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={100}
                      className={`${inputBase} ${
                        touched.fullName && errors.fullName
                          ? 'border-brand-red'
                          : ''
                      }`}
                    />
                    <p className="text-white/20 text-xs mt-1 text-right">
                      {form.fullName.trim().length} chars
                    </p>
                  </FormField>

                  <FormField
                    id="phone"
                    label="Phone Number"
                    error={touched.phone ? errors.phone : undefined}
                    required
                  >
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={10}
                      className={`${inputBase} ${
                        touched.phone && errors.phone ? 'border-brand-red' : ''
                      }`}
                    />
                  </FormField>
                </div>

                {/* Row 2: Email + Enquiry Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    id="email"
                    label="Email Address"
                    error={touched.email ? errors.email : undefined}
                  >
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com (optional)"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      maxLength={254}
                      className={`${inputBase} ${
                        touched.email && errors.email ? 'border-brand-red' : ''
                      }`}
                    />
                  </FormField>

                  <FormField
                    id="enquiryType"
                    label="Enquiry Type"
                    error={touched.enquiryType ? errors.enquiryType : undefined}
                    required
                  >
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      value={form.enquiryType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`${inputBase} appearance-none cursor-pointer ${
                        touched.enquiryType && errors.enquiryType
                          ? 'border-brand-red'
                          : ''
                      } ${!form.enquiryType ? 'text-white/30' : ''}`}
                    >
                      <option value="" disabled>
                        Select enquiry type
                      </option>
                      {ENQUIRY_TYPES.map((type) => (
                        <option key={type} value={type} className="text-white bg-brand-gray">
                          {type}
                        </option>
                      ))}
                    </select>
                  </FormField>
                </div>

                {/* Row 3: Message */}
                <FormField
                  id="message"
                  label="Message"
                  error={touched.message ? errors.message : undefined}
                  required
                >
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help you…"
                    value={form.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={2000}
                    className={`${inputBase} resize-none ${
                      touched.message && errors.message ? 'border-brand-red' : ''
                    }`}
                  />
                  <p className="text-white/20 text-xs mt-1 text-right">
                    {form.message.trim().length} chars
                  </p>
                </FormField>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-brand-red text-white px-10 py-4 font-heading uppercase tracking-wider text-sm hover:bg-brand-red-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                  <p className="text-white/30 text-xs text-center sm:text-left">
                    * Required fields. We respect your privacy.
                  </p>
                </div>
                {errors.form && (
                  <p className="text-brand-red text-xs flex items-center gap-1.5" role="alert">
                    <AlertCircle size={12} />
                    {errors.form}
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
