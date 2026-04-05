import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Play, PlayCircle } from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";

const playlists = [
  {
    title: "Online Quran Academy",
    embed:
      "https://www.youtube.com/embed/videoseries?list=PLjpr-OyAX5wvd0baPWulCWKxT5xtz8wjw",
    desc: "Complete Quran learning series with step-by-step guidance.",
  },
  {
    title: "Amma Para Recitation by Arbaz Qureshi",
    embed:
      "https://www.youtube.com/embed/videoseries?list=PLjpr-OyAX5wvOc0vuB7c8KGTQt59Alkzj",
    desc: "Full Amma Para (Juz 30) recitation with clear pronunciation.",
  },
  {
    title: "Dua Learning Series",
    embed:
      "https://www.youtube.com/embed/videoseries?list=PLjpr-OyAX5wvWYgsU-2cZdasuOpcHDBTj",
    desc: "Daily duas aur unke ma'ana — easy steps mein seekhein.",
  },
];

const reels = [
  {
    url: "https://www.youtube.com/embed/qT9LdG9Kc6s",
    label: "Islamic Reminder 1",
  },
  {
    url: "https://www.youtube.com/embed/yV-21IV8R6A",
    label: "Islamic Reminder 2",
  },
  {
    url: "https://www.youtube.com/embed/koJaIVpOI1c",
    label: "Islamic Reminder 3",
  },
];

const IALLOW =
  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";

export function OnlineClassesPage() {
  const reelContainerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="scroll-smooth">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-[#0D4A26] to-[#1F6F3E] islamic-pattern py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-semibold text-white/80 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-4 tracking-wider">
              بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Online Classes
            </h1>
            <p className="text-white/90 text-base sm:text-xl font-medium">
              Ab ghar baithe Deeni Taleem hasil karein
            </p>
            <p className="text-white/70 text-sm mt-2">
              Learn Quran, Duas &amp; Islamic knowledge from the comfort of your
              home
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/918849100903?text=Assalamualaikum%20mujhe%20online%20class%20join%20karni%20hai"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="online-classes.primary_button"
              >
                <Button className="bg-white text-islamic-green hover:bg-islamic-mint rounded-full px-8 py-3 font-bold text-base shadow-md hover:shadow-lg transition-all">
                  <Play className="w-4 h-4 mr-2 fill-islamic-green" />
                  Join Online Class
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-islamic-mint text-islamic-green text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Featured
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-islamic-dark">
              Gift Distribution Programme
            </h2>
            <p className="text-islamic-body text-sm mt-2">
              Maktab ke khaas programme ki jhalkiyan dekhein
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden shadow-card bg-islamic-dark"
            data-ocid="online-classes.card"
          >
            {/* Overlay title pill */}
            <div className="absolute top-3 left-3 z-10 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
              🎬 Gift Distribution Programme
            </div>
            <div className="aspect-video w-full">
              <iframe
                src="https://www.youtube.com/embed/RlC_c03dL3k"
                title="Gift Distribution Programme"
                allow={IALLOW}
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className="py-14 bg-islamic-mint islamic-pattern-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-islamic-green/10 text-islamic-green text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Playlists
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-islamic-dark">
              Our Learning Playlists
            </h2>
            <p className="text-islamic-body text-sm mt-2">
              Step-by-step Quran aur Dua courses — apni pace mein seekhein
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playlists.map((pl, i) => (
              <motion.div
                key={pl.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`playlists.item.${i + 1}`}
                className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-video w-full bg-islamic-dark">
                  {/* Overlay title pill */}
                  <div className="absolute top-3 left-3 z-10 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                    🎬 {pl.title}
                  </div>
                  <iframe
                    src={pl.embed}
                    title={pl.title}
                    allow={IALLOW}
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <PlayCircle className="w-4 h-4 text-islamic-green flex-shrink-0" />
                    <h3 className="font-semibold text-islamic-dark text-sm leading-snug">
                      {pl.title}
                    </h3>
                  </div>
                  <p className="text-xs text-islamic-body mt-1">{pl.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Islamic Reels Section */}
      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8"
          >
            <span className="inline-block bg-islamic-mint text-islamic-green text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Short Videos
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-islamic-dark">
              Islamic Reminders 🎬
            </h2>
            <p className="text-islamic-body text-sm mt-2">
              Short Islamic videos — swipe karo
            </p>
          </motion.div>

          {/* Reel Scroll Container */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            ref={reelContainerRef}
            className="flex gap-4 overflow-x-auto pb-4"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {reels.map((reel, i) => (
              <div
                key={reel.url}
                data-ocid={`reels.item.${i + 1}`}
                className="relative flex-shrink-0 rounded-3xl overflow-hidden shadow-card bg-islamic-dark"
                style={{
                  width: "270px",
                  height: "480px",
                  scrollSnapAlign: "start",
                }}
              >
                {/* Overlay label */}
                <div className="absolute top-3 left-3 z-10 bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                  🎬 {reel.label}
                </div>
                <iframe
                  src={reel.url}
                  title={reel.label}
                  allow={IALLOW}
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ width: "270px", height: "480px", border: "none" }}
                />
              </div>
            ))}
          </motion.div>

          <p className="text-center text-xs text-islamic-body mt-3 md:hidden">
            ← Swipe to see more →
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-[#0D4A26] to-[#1F6F3E] py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Ghar baithe seekhein — Join karein aaj!
            </h2>
            <p className="text-white/80 text-sm sm:text-base mb-8">
              Koi bhi umar, koi bhi level — hamare saath Deeni Taleem shuru
              karein
            </p>
            <a
              href="https://wa.me/918849100903?text=Assalamualaikum%20mujhe%20online%20class%20join%20karni%20hai"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="online-classes.secondary_button"
            >
              <Button className="bg-white text-islamic-green hover:bg-islamic-mint rounded-full px-8 py-3 font-bold text-base shadow-md hover:shadow-lg transition-all">
                Join Online Class
              </Button>
            </a>
            <div className="mt-6">
              <Link
                to="/admission"
                className="text-white/70 text-sm hover:text-white underline underline-offset-4 transition-colors"
                data-ocid="online-classes.link"
              >
                Ya Admission ke liye apply karein →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
