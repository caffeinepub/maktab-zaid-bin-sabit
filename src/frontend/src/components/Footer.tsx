import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

function YouTubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
      aria-label="YouTube"
      role="img"
    >
      <title>YouTube</title>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
      aria-label="Instagram"
      role="img"
    >
      <title>Instagram</title>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="18"
      height="18"
      aria-label="Facebook"
      role="img"
    >
      <title>Facebook</title>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function Footer() {
  const hostname = encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  );

  return (
    <footer
      className="bg-islamic-green islamic-pattern"
      data-ocid="footer.panel"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <span className="text-islamic-gold text-xl">☽</span>
              </div>
              <div>
                <p className="text-white font-bold text-sm">
                  Maktab Zaid Bin Sabit
                </p>
                <p className="text-white/50 text-xs">
                  Quality Islamic Education
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Nurturing the next generation of Muslims through authentic Islamic
              education, Quran memorization, and moral character development.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2 mt-5">
              {[
                { label: "YouTube", icon: YouTubeIcon, href: "#" },
                { label: "Instagram", icon: InstagramIcon, href: "#" },
                { label: "Facebook", icon: FacebookIcon, href: "#" },
              ].map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-ocid="footer.link"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-islamic-gold hover:text-islamic-dark transition-all"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "Our Courses", to: "/courses" },
                { label: "Online Classes", to: "/online-classes" },
                { label: "Admission", to: "/admission" },
                { label: "Store", to: "/store" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    data-ocid="footer.link"
                    className="text-sm text-white/60 hover:text-islamic-gold transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-islamic-gold/50 text-xs">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
              Contact / Rabta
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-islamic-gold mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">
                  2nd Floor, Muhammadi Jama Masjid (Markaz), Ahele Hadees,
                  Parixitlal Nagar, Behrampura, Ahmedabad – 380028
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Phone className="w-4 h-4 text-islamic-gold flex-shrink-0" />
                <span>8849100903</span>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-white/60">
                <Mail className="w-4 h-4 text-islamic-gold flex-shrink-0" />
                <span>use7115@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 text-center space-y-1.5">
          <p className="text-white/80 text-sm font-semibold">
            © 2026 Maktab Zaid Bin Sabit
          </p>
          <p className="text-white/40 text-xs">
            Quality Islamic Education in Ahmedabad
          </p>
          <p className="text-white/30 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-islamic-gold/50 hover:text-islamic-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
