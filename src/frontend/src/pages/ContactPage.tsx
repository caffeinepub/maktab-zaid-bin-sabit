import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { motion } from "motion/react";
import { PageHero } from "../components/PageHero";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address / Pata",
    value:
      "2nd Floor, Muhammadi Jama Masjid (Markaz), Ahele Hadees, Parixitlal Nagar, Behrampura, Ahmedabad – 380028",
  },
  {
    icon: Phone,
    label: "Phone / Phone Nambr",
    value: "8849100903",
  },
  {
    icon: Mail,
    label: "Email",
    value: "use7115@gmail.com",
  },
  {
    icon: Clock,
    label: "Office Hours / Daftar Awqaat",
    value: "Mon–Sat: 4:00 PM – 6:00 PM",
  },
];

export function ContactPage() {
  return (
    <div>
      <PageHero
        title="Contact Us / Hamse Rabta Karen"
        subtitle="We'd love to hear from you. Hamse kisi bhi tarah sampark karen."
      />

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-xl font-bold text-islamic-dark mb-6">
                Get In Touch / Rabta Karen
              </h2>
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  data-ocid={`contact.item.${i + 1}`}
                  className="flex items-start gap-4 bg-white rounded-xl border border-islamic-border shadow-card p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-islamic-mint flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-islamic-green" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-islamic-green uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm text-islamic-dark">{item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h2 className="text-xl font-bold text-islamic-dark mb-6">
                Find Us Here / Hamare Paas Ayen
              </h2>
              <div
                data-ocid="contact.map_marker"
                className="bg-islamic-mint rounded-2xl border border-islamic-green/20 h-64 flex flex-col items-center justify-center gap-4 text-center p-8"
              >
                <div className="w-16 h-16 rounded-full bg-islamic-green/10 border-2 border-islamic-green/30 flex items-center justify-center">
                  <Navigation className="w-7 h-7 text-islamic-green" />
                </div>
                <div>
                  <p className="font-semibold text-islamic-dark">
                    Maktab Zaid Bin Sabit
                  </p>
                  <p className="text-sm text-islamic-body mt-1">
                    2nd Floor, Muhammadi Jama Masjid (Markaz),
                    <br />
                    Ahele Hadees, Parixitlal Nagar,
                    <br />
                    Behrampura, Ahmedabad – 380028
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Muhammadi+Jama+Masjid+Behrampura+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.primary_button"
                  className="text-xs font-semibold text-islamic-green underline underline-offset-2 hover:text-islamic-green/80"
                >
                  Open in Google Maps →
                </a>
              </div>

              {/* Additional note */}
              <div className="mt-5 bg-islamic-yellow/20 border border-islamic-yellow/40 rounded-xl p-4">
                <p className="text-sm font-semibold text-islamic-dark mb-1">
                  Admission Open 2026-27 | Last Date: 30 April | Limited Seats
                  Available
                </p>
                <p className="text-xs text-islamic-body">
                  Visit us in person or call to schedule a meeting with our
                  admissions team. Seedha aayein ya call karen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
