import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, AlertCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/** BMI standard formula: weight (kg) / height (m)^2.
 * Returns null if inputs are invalid (belt-and-suspenders beyond UI validation). */
function calcBMI(weightKg, heightCm) {
  // Guard: heights and weights must be finite positive numbers
  if (!Number.isFinite(weightKg) || !Number.isFinite(heightCm)) return null;
  if (heightCm <= 0 || weightKg <= 0) return null;
  const heightM = heightCm / 100;
  const result = weightKg / (heightM * heightM);
  // Guard: ensure result is a valid finite number
  return Number.isFinite(result) ? result : null;
}

/** Returns label, colour class, and interpretation text for a given BMI value */
function getBMICategory(bmi) {
  if (bmi < 18.5)
    return {
      label: 'Underweight',
      color: 'text-blue-400',
      barColor: 'bg-blue-400',
      barWidth: `${Math.max(4, ((bmi / 40) * 100)).toFixed(1)}%`,
      info: 'Your BMI is below the healthy range. Consider a nutrition and strength-building plan.',
    };
  if (bmi < 25)
    return {
      label: 'Normal Weight',
      color: 'text-green-400',
      barColor: 'bg-green-400',
      barWidth: `${((bmi / 40) * 100).toFixed(1)}%`,
      info: 'Great job! Your BMI is within the healthy range. Keep up your fitness routine.',
    };
  if (bmi < 30)
    return {
      label: 'Overweight',
      color: 'text-yellow-400',
      barColor: 'bg-yellow-400',
      barWidth: `${((bmi / 40) * 100).toFixed(1)}%`,
      info: 'Your BMI is slightly above the healthy range. A structured fitness plan can help.',
    };
  return {
    label: 'Obese',
    color: 'text-brand-red',
    barColor: 'bg-brand-red',
    barWidth: `${Math.min(98, ((bmi / 40) * 100)).toFixed(1)}%`,
    info: 'Your BMI is above the healthy range. Consult a fitness professional to build a safe plan.',
  };
}

function validateInputs(height, weight) {
  const errors = {};
  const h = parseFloat(height);
  const w = parseFloat(weight);

  if (!height.trim()) {
    errors.height = 'Height is required.';
  } else if (isNaN(h) || h <= 0) {
    errors.height = 'Enter a valid positive number.';
  } else if (h < 50 || h > 300) {
    errors.height = 'Enter a realistic height between 50 cm and 300 cm.';
  }

  if (!weight.trim()) {
    errors.weight = 'Weight is required.';
  } else if (isNaN(w) || w <= 0) {
    errors.weight = 'Enter a valid positive number.';
  } else if (w < 10 || w > 500) {
    errors.weight = 'Enter a realistic weight between 10 kg and 500 kg.';
  }

  return errors;
}

const inputBase =
  'w-full bg-brand-gray border border-white/10 text-white px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-brand-red transition-colors duration-200';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [errors, setErrors] = useState({});
  const [result, setResult] = useState(null);

  function handleCalculate(e) {
    e.preventDefault();
    const validationErrors = validateInputs(height, weight);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setResult(null);
      return;
    }
    const bmi = calcBMI(parseFloat(weight), parseFloat(height));
    if (bmi === null) {
      setErrors({ height: 'Unable to calculate BMI. Please check your inputs.' });
      return;
    }
    setResult(bmi);
  }

  function handleReset() {
    setHeight('');
    setWeight('');
    setErrors({});
    setResult(null);
  }

  const category = result !== null ? getBMICategory(result) : null;

  return (
    <section
      id="bmi"
      className="section-padding px-4 bg-brand-charcoal"
      aria-label="BMI Calculator"
    >
      <div className="max-w-2xl mx-auto">
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
            Know Your Numbers
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            BMI <span className="text-brand-red">Calculator</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-muted mt-4 text-base leading-relaxed"
          >
            Calculate your Body Mass Index using height and weight.
            BMI is a general indicator — consult a trainer for a personalised assessment.
          </motion.p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          className="bg-brand-gray/50 border border-white/5 p-8 md:p-10"
        >
          <form onSubmit={handleCalculate} noValidate aria-label="BMI calculator form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {/* Height */}
              <div>
                <label
                  htmlFor="bmi-height"
                  className="block text-sm font-heading uppercase tracking-wider text-white/70 mb-2"
                >
                  Height <span className="text-brand-red">*</span>
                  <span className="text-white/30 ml-2 text-xs normal-case tracking-normal">(cm)</span>
                </label>
                <input
                  id="bmi-height"
                  type="number"
                  inputMode="decimal"
                  min="50"
                  max="300"
                  step="0.1"
                  placeholder="e.g. 170"
                  value={height}
                  onChange={(e) => {
                    setHeight(e.target.value);
                    if (errors.height) setErrors((p) => ({ ...p, height: undefined }));
                    setResult(null);
                  }}
                  className={`${inputBase} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                    errors.height ? 'border-brand-red' : ''
                  }`}
                  aria-describedby={errors.height ? 'height-error' : undefined}
                />
                <AnimatePresence>
                  {errors.height && (
                    <motion.p
                      id="height-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-brand-red text-xs mt-1.5"
                      role="alert"
                    >
                      <AlertCircle size={12} />
                      {errors.height}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Weight */}
              <div>
                <label
                  htmlFor="bmi-weight"
                  className="block text-sm font-heading uppercase tracking-wider text-white/70 mb-2"
                >
                  Weight <span className="text-brand-red">*</span>
                  <span className="text-white/30 ml-2 text-xs normal-case tracking-normal">(kg)</span>
                </label>
                <input
                  id="bmi-weight"
                  type="number"
                  inputMode="decimal"
                  min="10"
                  max="500"
                  step="0.1"
                  placeholder="e.g. 70"
                  value={weight}
                  onChange={(e) => {
                    setWeight(e.target.value);
                    if (errors.weight) setErrors((p) => ({ ...p, weight: undefined }));
                    setResult(null);
                  }}
                  className={`${inputBase} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
                    errors.weight ? 'border-brand-red' : ''
                  }`}
                  aria-describedby={errors.weight ? 'weight-error' : undefined}
                />
                <AnimatePresence>
                  {errors.weight && (
                    <motion.p
                      id="weight-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-1.5 text-brand-red text-xs mt-1.5"
                      role="alert"
                    >
                      <AlertCircle size={12} />
                      {errors.weight}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-brand-red text-white py-4 font-heading uppercase tracking-wider text-sm hover:bg-brand-red-light transition-colors duration-200"
              >
                Calculate BMI
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 border border-white/20 text-white py-4 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <RefreshCw size={14} />
                Reset
              </button>
            </div>
          </form>

          {/* Result */}
          <AnimatePresence>
            {result !== null && category && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="mt-8 pt-8 border-t border-white/10"
                role="region"
                aria-label="BMI result"
                aria-live="polite"
              >
                {/* BMI Number */}
                <div className="text-center mb-6">
                  <p className="text-brand-muted text-sm font-heading uppercase tracking-wider mb-2">
                    Your BMI
                  </p>
                  <p className="font-display text-7xl md:text-8xl text-white leading-none">
                    {result.toFixed(1)}
                  </p>
                  <p className={`font-heading text-xl uppercase tracking-wider mt-3 ${category.color}`}>
                    {category.label}
                  </p>
                </div>

                {/* Visual bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-white/30 font-heading uppercase tracking-wider mb-2">
                    <span>0</span>
                    <span>Healthy: 18.5 – 24.9</span>
                    <span>40+</span>
                  </div>
                  <div className="h-2 bg-brand-gray rounded-full overflow-hidden relative">
                    {/* Reference band for healthy range */}
                    <div
                      className="absolute top-0 h-full bg-green-400/20"
                      style={{ left: `${(18.5 / 40) * 100}%`, width: `${((25 - 18.5) / 40) * 100}%` }}
                    />
                    {/* Your BMI marker */}
                    <motion.div
                      className={`h-full ${category.barColor} rounded-full`}
                      initial={{ width: 0 }}
                      animate={{ width: category.barWidth }}
                      transition={{ duration: 0.7, ease: 'easeOut' }}
                    />
                  </div>
                </div>

                {/* Interpretation */}
                <p className="text-brand-muted text-sm leading-relaxed text-center">
                  {category.info}
                </p>

                {/* BMI reference table */}
                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  {[
                    { label: 'Underweight', range: '< 18.5', color: 'border-blue-400/40 text-blue-400' },
                    { label: 'Normal', range: '18.5 – 24.9', color: 'border-green-400/40 text-green-400' },
                    { label: 'Overweight', range: '25 – 29.9', color: 'border-yellow-400/40 text-yellow-400' },
                    { label: 'Obese', range: '≥ 30', color: 'border-brand-red/40 text-brand-red' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className={`border rounded-sm py-2 px-2 ${
                        category.label.toLowerCase().includes(row.label.toLowerCase())
                          ? row.color
                          : 'border-white/5 text-white/30'
                      }`}
                    >
                      <p className="font-heading text-xs uppercase tracking-wider">{row.label}</p>
                      <p className="text-xs mt-0.5">{row.range}</p>
                    </div>
                  ))}
                </div>

                <p className="text-white/20 text-xs text-center mt-4 italic">
                  BMI is a general screening tool and does not account for muscle mass,
                  bone density or body composition. Consult a fitness professional for
                  personalised advice.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
