import { Button } from "@/components/ui/button";
import { Award, BookOpen, ScrollText, Star } from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";

const courses = [
  {
    icon: BookOpen,
    title: "Qaida",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
    duration: "3–6 Months",
    desc: "Arabic alphabet se Quran padhne ki pehli buniyad. Har harf ki sahi awaaz aur pronunciation seekhi jaati hai. Bachon ke liye perfect starting point.",
  },
  {
    icon: Star,
    title: "Amma Para",
    level: "Intermediate",
    levelColor: "bg-amber-100 text-amber-700",
    duration: "4–6 Months",
    desc: "Para 30 (Amma) ki tilawat tajweed ke basic qawaid ke saath parhai jaati hai. Students fluent reading ki taraf aage badhte hain.",
  },
  {
    icon: ScrollText,
    title: "Nazra Quran",
    level: "Advanced",
    levelColor: "bg-blue-100 text-blue-700",
    duration: "6–12 Months",
    desc: "Pura Quran sahi makharij aur tajweed ke saath padhna seekhein. Qualified Ustaad ki nighrani mein mukammal Quran tilawat.",
  },
  {
    icon: Award,
    title: "Hifz Program",
    level: "Special",
    levelColor: "bg-purple-100 text-purple-700",
    duration: "3–5 Years",
    desc: "Puri zindagi ke liye Quran Hafiz banein. Dedicated Ustaad, structured revision system aur parent progress updates ke saath mukammal Hifz program.",
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`courses.item.${i + 1}`}
                className="bg-white rounded-2xl border border-islamic-border shadow-card hover:shadow-md transition-shadow p-6 flex flex-col"
              >
                {/* Level badge */}
                <span
                  className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full mb-4 ${course.levelColor}`}
                >
                  {course.level}
                </span>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-islamic-mint flex items-center justify-center flex-shrink-0">
                    <course.icon className="w-6 h-6 text-islamic-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-islamic-dark text-lg leading-tight">
                      {course.title}
                    </h3>
                    <span className="text-xs text-islamic-green font-semibold">
                      {course.duration}
                    </span>
                  </div>
                </div>

                <p className="text-islamic-body text-sm leading-relaxed flex-1">
                  {course.desc}
                </p>

                <a href="/admission">
                  <Button
                    data-ocid={`courses.secondary_button.${i + 1}`}
                    variant="outline"
                    className="mt-4 w-full rounded-full border-islamic-green text-islamic-green hover:bg-islamic-mint text-sm font-semibold"
                  >
                    Enroll Now
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Admission CTA */}
          <div className="mt-12 bg-islamic-green rounded-2xl p-8 text-center islamic-pattern">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ready to Join?
            </h2>
            <p className="text-green-100 text-sm mb-6">
              Admissions are open for the 2026-27 session. Apply now to secure
              your seat.
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
