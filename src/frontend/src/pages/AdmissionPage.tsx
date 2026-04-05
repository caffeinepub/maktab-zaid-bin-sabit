import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwYXW13Dz7lWBmfx5A1wI9dv1jTUUicflQy9TT6jrJtRrohY0RFlFnEWtx0uQbEn-ej/exec";

const WHATSAPP_NUMBER = "918128265964";
const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=Assalamualaikum%20maine%20admission%20form%20fill%20kiya%20hai`;

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const COURSES = ["Qaida", "Nazra", "Hifz", "Aalim"];

interface FormState {
  name: string;
  dob: string;
  fatherName: string;
  mobile: string;
  whatsapp: string;
  address: string;
  gender: string;
  course: string;
  previousEducation: string;
}

interface FormErrors {
  name?: string;
  dob?: string;
  fatherName?: string;
  mobile?: string;
  whatsapp?: string;
  address?: string;
  gender?: string;
  course?: string;
}

const initialForm: FormState = {
  name: "",
  dob: "",
  fatherName: "",
  mobile: "",
  whatsapp: "",
  address: "",
  gender: "",
  course: "",
  previousEducation: "",
};

export function AdmissionPage() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) setSubmitError("");
  }

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Student ka naam likhein";
    if (!form.dob) newErrors.dob = "Date of birth zaroor hai";
    if (!form.fatherName.trim())
      newErrors.fatherName = "Father ka naam likhein";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number likhein";
    else if (!/^[0-9]{10,13}$/.test(form.mobile.replace(/\s/g, "")))
      newErrors.mobile = "Sahi mobile number likhein (10-13 digits)";
    if (!form.whatsapp.trim()) newErrors.whatsapp = "WhatsApp number likhein";
    else if (!/^[0-9]{10,13}$/.test(form.whatsapp.replace(/\s/g, "")))
      newErrors.whatsapp = "Sahi WhatsApp number likhein (10-13 digits)";
    if (!form.address.trim()) newErrors.address = "Address likhein";
    if (!form.gender) newErrors.gender = "Gender select karein";
    if (!form.course) newErrors.course = "Course select karein";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSubmitError("");

    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name: form.name.trim(),
          dob: form.dob,
          fatherName: form.fatherName.trim(),
          mobile: form.mobile.trim(),
          whatsapp: form.whatsapp.trim(),
          address: form.address.trim(),
          gender: form.gender,
          course: form.course,
          previousEducation: form.previousEducation.trim(),
        }),
      });
    } catch {
      // Network-level error — GAS endpoint is fire-and-forget
    } finally {
      setLoading(false);
    }

    // Open WhatsApp with all form data
    const message = `Assalamualaikum,\nNew Admission:\n\nName: ${form.name.trim()}\nDOB: ${form.dob}\nFather: ${form.fatherName.trim()}\nMobile: ${form.mobile.trim()}\nWhatsApp: ${form.whatsapp.trim()}\nGender: ${form.gender}\nCourse: ${form.course}\nAddress: ${form.address.trim()}\nPrevious Education: ${form.previousEducation.trim() || "N/A"}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
  }

  const inputClass =
    "w-full rounded-xl border border-[#0B5D3B]/30 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0B5D3B]/40 focus:border-[#0B5D3B] bg-white shadow-sm transition placeholder:text-gray-400";
  const labelClass = "block text-sm font-semibold text-[#0B5D3B] mb-1";
  const errorClass = "text-xs text-red-500 mt-1";

  return (
    <div className="min-h-screen pb-24 bg-[#f0f7f4] islamic-pattern-green">
      {/* ── Dark Green Header Strip ── */}
      <div className="bg-[#0B5D3B] islamic-pattern py-8 px-4 text-center relative overflow-hidden">
        <span className="absolute top-3 left-6 text-[#D4AF37] text-2xl opacity-40 select-none">
          ✦
        </span>
        <span className="absolute top-3 right-6 text-[#D4AF37] text-2xl opacity-40 select-none">
          ✦
        </span>
        <span className="absolute bottom-3 left-1/4 text-[#D4AF37] text-sm opacity-25 select-none">
          ✦
        </span>
        <span className="absolute bottom-3 right-1/4 text-[#D4AF37] text-sm opacity-25 select-none">
          ✦
        </span>

        {/* Bismillah */}
        <p
          className="font-amiri text-[#D4AF37] text-2xl sm:text-3xl leading-relaxed mb-2"
          dir="rtl"
          lang="ar"
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </p>

        <div className="mx-auto mb-3 w-16 h-px bg-[#D4AF37] opacity-60" />

        <h1 className="text-white font-bold text-xl sm:text-2xl tracking-wide mb-1">
          Maktab Zaid Bin Sabit — Admission Form
        </h1>

        <p className="text-white/75 text-sm sm:text-base max-w-md mx-auto">
          Assalamu Alaikum, barah-e-karam apne bacche ka admission form fill
          karein
        </p>

        <div className="mx-auto mt-4 w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      </div>

      {/* ── Main Content ── */}
      <div className="max-w-xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {submitted ? (
            /* ── Success Card ── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-xl border border-[#0B5D3B]/10 px-8 py-12 text-center relative overflow-hidden"
              data-ocid="admission.success_state"
            >
              <span className="absolute top-4 left-8 text-[#D4AF37] text-3xl opacity-30 select-none">
                ✦
              </span>
              <span className="absolute top-4 right-8 text-[#D4AF37] text-3xl opacity-30 select-none">
                ✦
              </span>
              <span className="absolute bottom-4 left-1/3 text-[#D4AF37] text-lg opacity-20 select-none">
                ✦
              </span>
              <span className="absolute bottom-4 right-1/3 text-[#D4AF37] text-lg opacity-20 select-none">
                ✦
              </span>

              <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#0B5D3B]/10 border-4 border-[#0B5D3B] flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-[#0B5D3B]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-label="Form submitted successfully"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p
                className="font-amiri text-[#D4AF37] text-xl mb-3"
                dir="rtl"
                lang="ar"
              >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </p>

              <h2 className="text-3xl font-bold text-[#0B5D3B] mb-2">
                JazakAllah! 🤲
              </h2>
              <p className="text-lg font-semibold text-gray-700 mb-3">
                Aapka form receive ho gaya hai
              </p>
              <p className="text-sm text-gray-500 mb-8 max-w-xs mx-auto">
                WhatsApp par aapka message bhi bheja gaya hai. Hamari team 24
                ghante mein aapse rabta karegi. InshAllah.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-7 py-3 rounded-full shadow-md hover:bg-[#1ebe5d] active:scale-95 transition-all"
              >
                <WhatsAppIcon size={20} />
                Chat on WhatsApp
              </a>
            </motion.div>
          ) : (
            /* ── Form Card ── */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white rounded-2xl shadow-xl border border-[#0B5D3B]/10 px-6 py-8 sm:px-10"
            >
              <form
                onSubmit={handleSubmit}
                noValidate
                data-ocid="admission.form"
              >
                <div className="flex flex-col gap-5">
                  {/* 1. Student Full Name */}
                  <div>
                    <label htmlFor="student-name" className={labelClass}>
                      Student Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="student-name"
                      type="text"
                      className={inputClass}
                      placeholder="Jaise: Muhammad Ibrahim"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      data-ocid="admission.input"
                    />
                    {errors.name && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* 2. Date of Birth */}
                  <div>
                    <label htmlFor="dob" className={labelClass}>
                      Date of Birth <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="dob"
                      type="date"
                      className={inputClass}
                      value={form.dob}
                      onChange={(e) => updateField("dob", e.target.value)}
                      data-ocid="admission.input"
                    />
                    {errors.dob && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.dob}
                      </p>
                    )}
                  </div>

                  {/* 3. Father Name */}
                  <div>
                    <label htmlFor="father-name" className={labelClass}>
                      Father Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="father-name"
                      type="text"
                      className={inputClass}
                      placeholder="Jaise: Abdul Rahman"
                      value={form.fatherName}
                      onChange={(e) =>
                        updateField("fatherName", e.target.value)
                      }
                      data-ocid="admission.input"
                    />
                    {errors.fatherName && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.fatherName}
                      </p>
                    )}
                  </div>

                  {/* 4. Mobile Number */}
                  <div>
                    <label htmlFor="mobile" className={labelClass}>
                      Mobile Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="mobile"
                      type="tel"
                      className={inputClass}
                      placeholder="10 digit number"
                      value={form.mobile}
                      onChange={(e) => updateField("mobile", e.target.value)}
                      data-ocid="admission.input"
                    />
                    {errors.mobile && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* 5. WhatsApp Number */}
                  <div>
                    <label htmlFor="whatsapp" className={labelClass}>
                      WhatsApp Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="whatsapp"
                      type="tel"
                      className={inputClass}
                      placeholder="WhatsApp wala number"
                      value={form.whatsapp}
                      onChange={(e) => updateField("whatsapp", e.target.value)}
                      data-ocid="admission.input"
                    />
                    {errors.whatsapp && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.whatsapp}
                      </p>
                    )}
                  </div>

                  {/* 6. Address */}
                  <div>
                    <label htmlFor="address" className={labelClass}>
                      Address <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="address"
                      rows={3}
                      className={`${inputClass} resize-none`}
                      placeholder="Ghar ka poora pata likhein"
                      value={form.address}
                      onChange={(e) => updateField("address", e.target.value)}
                      data-ocid="admission.textarea"
                    />
                    {errors.address && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.address}
                      </p>
                    )}
                  </div>

                  {/* 7. Gender — using fieldset + legend for a11y */}
                  <fieldset className="border-none p-0 m-0">
                    <legend className={`${labelClass} float-none w-full`}>
                      Gender <span className="text-red-400">*</span>
                    </legend>
                    <div className="flex gap-3 mt-1">
                      {["Male", "Female"].map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => updateField("gender", g)}
                          data-ocid="admission.radio"
                          className={`flex-1 py-3 rounded-xl border-2 text-sm font-semibold transition-all ${
                            form.gender === g
                              ? "bg-[#0B5D3B] border-[#0B5D3B] text-white shadow-md"
                              : "bg-white border-[#0B5D3B]/30 text-[#0B5D3B] hover:border-[#0B5D3B] hover:bg-[#0B5D3B]/5"
                          }`}
                        >
                          {g === "Male" ? "♂ Male" : "♀ Female"}
                        </button>
                      ))}
                    </div>
                    {errors.gender && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.gender}
                      </p>
                    )}
                  </fieldset>

                  {/* 8. Course Dropdown */}
                  <div>
                    <label htmlFor="course" className={labelClass}>
                      Course <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="course"
                      className={`${inputClass} cursor-pointer`}
                      value={form.course}
                      onChange={(e) => updateField("course", e.target.value)}
                      data-ocid="admission.select"
                    >
                      <option value="">-- Course chunein --</option>
                      {COURSES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p
                        className={errorClass}
                        data-ocid="admission.error_state"
                      >
                        {errors.course}
                      </p>
                    )}
                  </div>

                  {/* 9. Previous Education (Optional) */}
                  <div>
                    <label htmlFor="prev-edu" className={labelClass}>
                      Previous Education{" "}
                      <span className="text-gray-400 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      id="prev-edu"
                      type="text"
                      className={inputClass}
                      placeholder="Jaise: Class 5, Madrasah xyz"
                      value={form.previousEducation}
                      onChange={(e) =>
                        updateField("previousEducation", e.target.value)
                      }
                      data-ocid="admission.input"
                    />
                  </div>
                </div>

                {/* Network error */}
                {submitError && (
                  <p
                    className="mt-4 text-center text-sm text-red-500"
                    data-ocid="admission.error_state"
                  >
                    {submitError}
                  </p>
                )}

                {/* Submit button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    data-ocid="admission.submit_button"
                    className="w-full bg-[#0B5D3B] text-[#D4AF37] font-bold rounded-xl py-3.5 text-base hover:brightness-110 active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-[#D4AF37]"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Bhej rahe hain...
                      </>
                    ) : (
                      <>
                        <span>✦</span>
                        Submit Admission Form
                        <span>✦</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">
                    Form submit hone par WhatsApp message automatically bheja
                    jayega. JazakAllah Khair.
                  </p>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp par contact karein"
        data-ocid="admission.open_modal_button"
        className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg text-white transition-transform hover:scale-110 active:scale-95"
        style={{ backgroundColor: "#25D366" }}
      >
        <span
          className="absolute inset-0 rounded-full animate-ping"
          style={{ backgroundColor: "rgba(37,211,102,0.35)" }}
        />
        <WhatsAppIcon size={28} />
      </a>
    </div>
  );
}
