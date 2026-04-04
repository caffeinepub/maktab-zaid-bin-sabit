import { Button } from "@/components/ui/button";
import {
  BookMarked,
  BookOpen,
  Globe,
  Headphones,
  Heart,
  Languages,
  ScrollText,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";

const courses = [
  {
    icon: BookOpen,
    title: "Hifz ul Quran",
    duration: "3–5 Years",
    desc: "Complete memorization of the Holy Quran (30 Juz) under guidance of qualified Huffaz. Students learn proper Tajweed and revision methods.",
  },
  {
    icon: Star,
    title: "Nazra Quran",
    duration: "6–12 Months",
    desc: "Learn to read the Quran correctly with proper makharij and basic Tajweed rules. Suitable for beginners of all ages.",
  },
  {
    icon: Headphones,
    title: "Tajweed ul Quran",
    duration: "6 Months",
    desc: "Advanced rules of Tajweed including madd, ghunna, idgham and qalqalah for perfecting recitation of the Holy Quran.",
  },
  {
    icon: BookMarked,
    title: "Islamic Studies (Fiqh & Aqeedah)",
    duration: "1 Year",
    desc: "Comprehensive study of Islamic jurisprudence, beliefs, acts of worship, and essential Islamic knowledge for daily life.",
  },
  {
    icon: Languages,
    title: "Urdu Language",
    duration: "6 Months",
    desc: "Read, write and understand Urdu language with emphasis on Islamic literature and religious texts in Urdu.",
  },
  {
    icon: Globe,
    title: "Arabic Language",
    duration: "1 Year",
    desc: "Foundation Arabic grammar (Nahw & Sarf) to understand Quranic Arabic and classical Islamic texts.",
  },
  {
    icon: ScrollText,
    title: "Hadith Studies",
    duration: "1 Year",
    desc: "Study of selected Ahadith from major collections including Arbaeen Nawawi, Riyad us Saliheen, and Sahih Bukhari selections.",
  },
  {
    icon: Heart,
    title: "Seerah (Prophet's Biography)",
    duration: "3 Months",
    desc: "In-depth study of the life and character of Prophet Muhammad ﷺ to inspire love and emulation in students.",
  },
];

export function CoursesPage() {
  return (
    <div>
      <PageHero
        title="Our Courses"
        subtitle="Authentic Islamic education for every stage of life"
      />

      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`courses.item.${i + 1}`}
                className="bg-white rounded-2xl border border-islamic-border shadow-card hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-islamic-mint flex items-center justify-center flex-shrink-0">
                    <course.icon className="w-6 h-6 text-islamic-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-islamic-dark text-base leading-tight">
                      {course.title}
                    </h3>
                    <span className="text-xs text-islamic-green font-medium">
                      {course.duration}
                    </span>
                  </div>
                </div>
                <p className="text-islamic-body text-sm leading-relaxed flex-1">
                  {course.desc}
                </p>
                <Button
                  data-ocid={`courses.secondary_button.${i + 1}`}
                  variant="outline"
                  className="mt-4 rounded-full border-islamic-green text-islamic-green hover:bg-islamic-mint text-sm"
                >
                  Learn More
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Admission CTA */}
          <div className="mt-12 bg-islamic-green rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to Join?
            </h2>
            <p className="text-green-100 text-sm mb-6">
              Admissions are open for the 2026 session. Apply now to secure your
              seat.
            </p>
            <a href="/admission">
              <Button
                data-ocid="courses.primary_button"
                className="bg-white text-islamic-green hover:bg-islamic-mint rounded-full px-8 font-semibold"
              >
                Apply for Admission
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
