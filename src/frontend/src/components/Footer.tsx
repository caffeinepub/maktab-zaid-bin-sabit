import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);

  return (
    <footer className="bg-islamic-sage islamic-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-full bg-islamic-green flex items-center justify-center">
                <Star className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="leading-tight">
                <span className="font-bold text-islamic-green text-sm block">
                  Maktab Zaid
                </span>
                <span className="text-[10px] text-islamic-body block">
                  Bin Sabit
                </span>
              </div>
            </div>
            <p className="text-sm text-islamic-body max-w-xs">
              Nurturing the next generation of Muslims through authentic Islamic
              education, Quran memorization, and moral character development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-islamic-dark text-sm mb-4 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Our Courses", to: "/courses" },
                { label: "Admission", to: "/admission" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="nav.link"
                    className="text-sm text-islamic-body hover:text-islamic-green transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-islamic-dark text-sm mb-4 uppercase tracking-wide">
              Contact / Rabta
            </h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-islamic-body">
                <MapPin className="w-4 h-4 text-islamic-green mt-0.5 flex-shrink-0" />
                <span>
                  2nd Floor, Muhammadi Jama Masjid (Markaz), Ahele Hadees,
                  Parixitlal Nagar, Behrampura, Ahmedabad – 380028
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm text-islamic-body">
                <Phone className="w-4 h-4 text-islamic-green flex-shrink-0" />
                <span>8849100903</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-islamic-body">
                <Mail className="w-4 h-4 text-islamic-green flex-shrink-0" />
                <span>info@maktabzaidsabit.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-islamic-body">
                <Clock className="w-4 h-4 text-islamic-green flex-shrink-0" />
                <span>Mon–Sat: 4:00 PM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-islamic-green/20 text-center">
          <p className="text-xs text-islamic-body">
            © {year}. Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-islamic-green hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
