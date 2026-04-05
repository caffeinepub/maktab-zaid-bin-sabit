import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  ChevronDown,
  ClipboardCheck,
  GraduationCap,
  MapPin,
  MessageCircle,
  Moon,
  Phone,
  Play,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

/* ── Data ────────────────────────────────────────────────── */

const features = [
  {
    icon: ClipboardCheck,
    emoji: "📋",
    title: "Online Admission",
    desc: "Simple online form – apply anytime, anywhere from your phone.",
  },
  {
    icon: GraduationCap,
    emoji: "👨‍🏫",
    title: "Experienced Teachers",
    desc: "Qualified Ustaad with years of dedicated Islamic teaching experience.",
  },
  {
    icon: Shield,
    emoji: "🕌",
    title: "Islamic Environment",
    desc: "Safe, disciplined, and spiritually nurturing environment for every child.",
  },
  {
    icon: BookOpen,
    emoji: "📖",
    title: "Daily Learning System",
    desc: "Structured daily lessons — Nazra, Hifz, Tajweed, and Islamic studies.",
  },
];

const videos = [
  {
    id: "RlC_c03dL3k",
    title: "Gift Distribution Programme",
    tag: "Event",
    link: "https://www.youtube.com/watch?v=RlC_c03dL3k",
  },
  {
    id: "qT9LdG9Kc6s",
    title: "Islamic Reminder – Daily Dua",
    tag: "Shorts",
    link: "https://www.youtube.com/watch?v=qT9LdG9Kc6s",
  },
  {
    id: "yV-21IV8R6A",
    title: "Quran Recitation – Amma Para",
    tag: "Classes",
    link: "https://www.youtube.com/watch?v=yV-21IV8R6A",
  },
];

const courses = [
  {
    emoji: "📖",
    title: "Qaida",
    level: "Beginner",
    levelColor: "bg-green-100 text-green-700",
    desc: "Islamic alphabet aur basic Quran padhna seekhein. Har bacche ka pehla qadam.",
  },
  {
    emoji: "📗",
    title: "Nazra",
    level: "Intermediate",
    levelColor: "bg-blue-100 text-blue-700",
    desc: "Pura Quran sahi makharij aur tajweed ke saath padhna.",
  },
  {
    emoji: "🌙",
    title: "Hifz",
    level: "Advanced",
    levelColor: "bg-purple-100 text-purple-700",
    desc: "Quran hafiz banein — dedicated ustaad ki nighrani mein.",
  },
  {
    emoji: "🎓",
    title: "Aalim",
    level: "Expert",
    levelColor: "bg-amber-100 text-amber-700",
    desc: "Mukammal Islamic education — Fiqh, Hadees, aur Quran tafseer.",
  },
];

const stats = [
  { value: "200+", label: "Students" },
  { value: "10+", label: "Teachers" },
  { value: "5+", label: "Courses" },
];

const WHATSAPP_LINK = "https://wa.me/918849100903?text=Assalamualaikum";

/* ── Section helpers ─────────────────────────────────────── */

function SectionTitle({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-10">
      <h2
        className={`text-2xl sm:text-3xl font-bold ${
          light ? "text-white" : "text-islamic-green"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-sm sm:text-base ${
            light ? "text-white/70" : "text-islamic-body"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mx-auto mt-3 h-1 w-12 rounded-full ${
          light ? "bg-islamic-gold" : "bg-islamic-gold"
        }`}
      />
    </div>
  );
}

/* ── Page Component ──────────────────────────────────────── */

export function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* ── 1. HERO ────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 islamic-hero-pattern"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,93,59,0.78), rgba(7,61,39,0.88)), url('/assets/generated/mosque-hero.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        data-ocid="hero.section"
      >
        {/* Animated content */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl mx-auto"
        >
          {/* Arabic Bismillah */}
          <p
            className="font-amiri text-islamic-gold text-2xl sm:text-3xl mb-4 leading-relaxed"
            dir="rtl"
            lang="ar"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          {/* Madrasa name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Maktab Zaid Bin Sabit
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-islamic-gold font-semibold mb-8">
            Deeni Taleem for Every Child
          </p>

          {/* CTA */}
          <Link to="/admission" data-ocid="hero.primary_button">
            <button
              type="button"
              className="px-8 py-3.5 rounded-full bg-islamic-gold text-islamic-dark font-bold text-base hover:bg-islamic-gold-light transition-all shadow-glow hover:shadow-xl hover:scale-105 active:scale-95"
            >
              Apply for Admission
            </button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/60 animate-bounce-gentle" />
        </div>
      </section>

      {/* ── 2. FEATURES ────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 islamic-pattern-green"
        data-ocid="features.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="Why Choose Us?"
              subtitle="Everything your child needs for their Islamic journey"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className="card-lift bg-white rounded-2xl p-6 shadow-card border border-islamic-border text-center h-full"
                  data-ocid={`features.item.${i + 1}`}
                >
                  <div className="text-4xl mb-4">{f.emoji}</div>
                  <h3 className="font-bold text-islamic-green text-base mb-2">
                    {f.title}
                  </h3>
                  <p className="text-islamic-body text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. VIDEOS ──────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 bg-white"
        data-ocid="videos.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="Watch Our Classes"
              subtitle="See how we teach — real classes, real students"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((v, i) => (
              <motion.a
                key={v.id}
                href={v.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group block rounded-2xl overflow-hidden shadow-card border border-islamic-border card-lift"
                data-ocid={`videos.item.${i + 1}`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-islamic-dark overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-white transition-all">
                      <Play
                        className="w-6 h-6 text-islamic-green ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                  {/* Tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-islamic-gold text-islamic-dark text-xs font-bold">
                    {v.tag}
                  </span>
                </div>
                {/* Title */}
                <div className="p-4 bg-white">
                  <p className="font-semibold text-islamic-green text-sm group-hover:text-islamic-green-light transition-colors">
                    {v.title}
                  </p>
                  <p className="text-islamic-body text-xs mt-1 flex items-center gap-1">
                    <Play className="w-3 h-3" /> Watch on YouTube
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/online-classes" data-ocid="videos.secondary_button">
              <button
                type="button"
                className="px-6 py-2.5 rounded-full border-2 border-islamic-green text-islamic-green font-semibold text-sm hover:bg-islamic-green hover:text-white transition-all"
              >
                View All Classes →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. COURSES ─────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 bg-islamic-mint islamic-pattern-green"
        data-ocid="courses.section"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle
              title="Our Courses"
              subtitle="From Qaida to Aalim — complete Islamic education"
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className="card-lift bg-white rounded-2xl overflow-hidden shadow-card border border-islamic-border h-full"
                  data-ocid={`courses.item.${i + 1}`}
                >
                  {/* Color top strip */}
                  <div className="h-2 bg-gradient-to-r from-islamic-green to-islamic-green-light" />
                  <div className="p-6">
                    <div className="text-4xl mb-3">{c.emoji}</div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-islamic-green text-lg">
                        {c.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mb-3 ${c.levelColor}`}
                    >
                      {c.level}
                    </span>
                    <p className="text-islamic-body text-sm leading-relaxed">
                      {c.desc}
                    </p>
                    <Link
                      to="/courses"
                      className="inline-block mt-4 text-islamic-green text-sm font-semibold hover:text-islamic-gold transition-colors"
                      data-ocid="courses.link"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. STATS ───────────────────────────────────────── */}
      <section
        className="py-14 sm:py-16 px-4 bg-islamic-green islamic-pattern"
        data-ocid="stats.section"
      >
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-4 sm:gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="text-center"
                data-ocid={`stats.item.${i + 1}`}
              >
                <p className="text-3xl sm:text-4xl font-bold text-islamic-gold">
                  {s.value}
                </p>
                <p className="text-white/70 text-sm mt-1 font-medium">
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. ABOUT US ────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 bg-white"
        data-ocid="about.section"
      >
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle title="About Us" />
            <div className="text-4xl mb-5">🕌</div>
            <p className="text-islamic-body text-base sm:text-lg leading-relaxed mb-8">
              We provide quality Islamic education for children in a peaceful
              environment. Our dedicated teachers guide every child with care,
              discipline, and love for the Quran and Islamic values.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { icon: Users, label: "Small Batch System" },
                { icon: BookOpen, label: "Quran Focus" },
                { icon: Moon, label: "Islamic Values" },
                { icon: Shield, label: "Safe Environment" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-islamic-mint border border-islamic-border text-islamic-green text-sm font-medium"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </div>
              ))}
            </div>
            <Link to="/admission" data-ocid="about.primary_button">
              <button
                type="button"
                className="px-8 py-3 rounded-full bg-islamic-green text-white font-bold hover:bg-islamic-green-light transition-all shadow-card hover:shadow-card-hover"
              >
                Apply for Admission
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 7. CONTACT ─────────────────────────────────────── */}
      <section
        className="py-16 sm:py-20 px-4 bg-islamic-mint islamic-pattern-green"
        data-ocid="contact.section"
      >
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionTitle title="Contact Us" subtitle="Hamare saath jurein" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-islamic-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-islamic-green" />
              </div>
              <div>
                <p className="text-xs text-islamic-body uppercase tracking-widest font-semibold mb-0.5">
                  Phone
                </p>
                <p className="font-bold text-islamic-green text-lg">
                  8849100903
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-islamic-border flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-islamic-green/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-islamic-green" />
              </div>
              <div>
                <p className="text-xs text-islamic-body uppercase tracking-widest font-semibold mb-0.5">
                  Address
                </p>
                <p className="text-islamic-body text-sm leading-relaxed">
                  2nd Floor, Muhammadi Jama Masjid (Markaz), Ahele Hadees,
                  Parixitlal Nagar, Behrampura, Ahmedabad – 380028
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.primary_button"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-md"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
