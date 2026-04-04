import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Headphones,
  Languages,
  Moon,
  Star,
  Sun,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const courses = [
  {
    icon: BookOpen,
    title: "Hifz ul Quran",
    desc: "Complete memorization of the Holy Quran under qualified Huffaz with Tajweed.",
  },
  {
    icon: Star,
    title: "Nazra Quran",
    desc: "Correct recitation with proper pronunciation and basic Tajweed rules.",
  },
  {
    icon: Headphones,
    title: "Tajweed ul Quran",
    desc: "Detailed study of Quranic recitation rules to achieve perfect tilawah.",
  },
  {
    icon: Languages,
    title: "Islamic Studies",
    desc: "Comprehensive Islamic education covering Fiqh, Aqeedah, and Seerah.",
  },
];

const benefits = [
  "Qualified and experienced Ulama as teachers",
  "Individual attention with small class sizes",
  "Safe, nurturing and Islamic environment",
  "Flexible timings for school-going students",
];

const timings = [
  {
    icon: Sun,
    urdu: "Subah ki Class",
    english: "Morning Session",
    time: "7:00 – 9:00 AM",
    bg: "bg-amber-50",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    border: "border-amber-200",
  },
  {
    icon: Clock,
    urdu: "Dopahar ki Class",
    english: "Afternoon Session",
    time: "2:00 – 4:00 PM",
    bg: "bg-sky-50",
    iconColor: "text-sky-500",
    iconBg: "bg-sky-100",
    border: "border-sky-200",
  },
  {
    icon: Moon,
    urdu: "Shaam ki Class",
    english: "Evening Session",
    time: "Maghrib – Isha",
    bg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    iconBg: "bg-indigo-100",
    border: "border-indigo-200",
  },
];

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-semibold text-islamic-green bg-islamic-mint px-3 py-1 rounded-full mb-4">
                بسم الله الرحمن الرحيم
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-islamic-dark leading-tight mb-3">
                Deeni Taleem + Akhlaq + Tarbiyat
              </h1>
              <p className="text-islamic-green font-semibold text-base sm:text-lg mb-2">
                Best Islamic education for children in Ahmedabad
              </p>
              <p className="text-islamic-body text-base sm:text-lg mb-6 leading-relaxed">
                Dedicated to nurturing young minds with authentic Quranic
                education, Islamic values, and moral character in a traditional
                yet modern setting.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/admission">
                  <Button
                    data-ocid="home.primary_button"
                    className="bg-islamic-green text-white hover:bg-islamic-green/90 rounded-full px-6 font-semibold"
                  >
                    Apply for Admission
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button
                    data-ocid="home.secondary_button"
                    variant="outline"
                    className="rounded-full px-6 border-islamic-green text-islamic-green hover:bg-islamic-mint font-semibold"
                  >
                    View Courses
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-card">
                <img
                  src="/assets/generated/hero-madrasa-classroom.dim_800x600.jpg"
                  alt="Students learning at Maktab Zaid Bin Sabit"
                  className="w-full h-72 sm:h-96 object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card px-4 py-3 flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-islamic-mint flex items-center justify-center">
                  <Users className="w-5 h-5 text-islamic-green" />
                </div>
                <div>
                  <p className="text-xs text-islamic-body">Enrolled Students</p>
                  <p className="text-sm font-bold text-islamic-dark">
                    200+ Students
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-card"
          data-ocid="home.panel"
        >
          <div className="bg-islamic-yellow flex-1 px-6 py-5">
            <div className="flex items-center gap-2 mb-1">
              <Award className="w-5 h-5 text-islamic-dark" />
              <span className="font-bold text-islamic-dark text-lg">
                Admission Open 2026-27 | Last Date: 30 April | Limited Seats
                Available
              </span>
            </div>
            <p className="text-islamic-dark/80 text-sm">
              New Session Starting Soon — Jaldi apply karen, jagah mahdood hai!
            </p>
          </div>
          <div className="bg-islamic-green flex items-center justify-center px-6 py-5">
            <Link to="/admission">
              <Button
                data-ocid="home.primary_button"
                className="bg-white text-islamic-green hover:bg-islamic-mint rounded-full font-semibold px-6 whitespace-nowrap"
              >
                Apply Today →
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Timings Section */}
      <section className="py-16 bg-white islamic-pattern-star">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-islamic-dark">
              Maktab Timings / Awqaat
            </h2>
            <p className="text-islamic-body mt-2 text-sm sm:text-base">
              Alag alag waqt par classes hoti hain — apni suvidha ke anusaar
              ayen
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {timings.map((t, i) => (
              <motion.div
                key={t.urdu}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`timings.item.${i + 1}`}
                className={`${t.bg} rounded-2xl border ${t.border} p-6 text-center shadow-card hover:shadow-md transition-shadow`}
              >
                <div
                  className={`w-14 h-14 rounded-full ${t.iconBg} flex items-center justify-center mx-auto mb-4`}
                >
                  <t.icon className={`w-7 h-7 ${t.iconColor}`} />
                </div>
                <h3 className="font-bold text-islamic-dark text-base mb-0.5">
                  {t.urdu}
                </h3>
                <p className="text-xs text-islamic-body mb-3">{t.english}</p>
                <div className="bg-white rounded-xl px-4 py-2 inline-block border border-islamic-green/20">
                  <span className="font-bold text-islamic-green text-sm">
                    {t.time}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-xs text-islamic-body mt-6 max-w-xl mx-auto"
          >
            * Timings may vary — please contact us to confirm /{" "}
            <span className="italic">
              Awqaat badal sakte hain, confirm karne ke liye hamse rabta karen
            </span>
          </motion.p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="bg-islamic-mint islamic-pattern-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-islamic-dark">
              Our Courses / Hamari Classes
            </h2>
            <p className="text-islamic-body mt-2 text-sm sm:text-base">
              Comprehensive Islamic education programs for all ages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`courses.item.${i + 1}`}
                className="bg-white rounded-2xl p-5 shadow-card hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-full bg-islamic-mint flex items-center justify-center mb-4">
                  <course.icon className="w-5 h-5 text-islamic-green" />
                </div>
                <h3 className="font-semibold text-islamic-dark text-base mb-2">
                  {course.title}
                </h3>
                <p className="text-islamic-body text-sm leading-relaxed">
                  {course.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/courses">
              <Button
                data-ocid="courses.secondary_button"
                variant="outline"
                className="rounded-full border-islamic-green text-islamic-green hover:bg-white font-semibold px-6"
              >
                View All Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-islamic-dark mb-6">
                Why Choose Us?
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-islamic-green flex-shrink-0 mt-0.5" />
                    <span className="text-islamic-body text-sm sm:text-base">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="bg-islamic-mint rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-islamic-green mb-2">
                15+
              </div>
              <p className="text-islamic-body mb-6">
                Years of Excellence in Islamic Education
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-islamic-green">
                    200+
                  </div>
                  <div className="text-xs text-islamic-body mt-1">
                    Enrolled Students
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-islamic-green">
                    12+
                  </div>
                  <div className="text-xs text-islamic-body mt-1">
                    Expert Teachers
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-islamic-green">8</div>
                  <div className="text-xs text-islamic-body mt-1">
                    Courses Offered
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="text-2xl font-bold text-islamic-green">
                    150+
                  </div>
                  <div className="text-xs text-islamic-body mt-1">
                    Graduates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-islamic-mint py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-5 h-5 text-islamic-yellow fill-islamic-yellow"
              />
            ))}
          </div>
          <blockquote className="text-islamic-dark text-lg sm:text-xl font-medium leading-relaxed mb-6">
            "Maktab Zaid Bin Sabit has transformed our child's relationship with
            the Quran. The teachers are dedicated, patient and truly inspiring.
            We are so grateful."
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-islamic-green flex items-center justify-center">
              <span className="text-white text-sm font-bold">AM</span>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-islamic-dark">
                Ahmed Malik
              </p>
              <p className="text-xs text-islamic-body">
                Parent of a Hifz Student
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
