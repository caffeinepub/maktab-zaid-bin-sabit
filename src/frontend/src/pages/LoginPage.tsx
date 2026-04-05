import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Eye, EyeOff, Lock, User } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

function GoogleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
        <path
          fill="#4285F4"
          d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
        />
        <path
          fill="#34A853"
          d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
        />
        <path
          fill="#FBBC05"
          d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
        />
        <path
          fill="#EA4335"
          d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
        />
      </g>
    </svg>
  );
}

export function LoginPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // UI only — no real auth
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-auto py-8 px-4 islamic-hero-pattern"
      style={{
        backgroundColor: "#061f14",
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='0.8'%3E%3Cpath d='M40 8 L46 22 L61 22 L50 31 L54 46 L40 37 L26 46 L30 31 L19 22 L34 22 Z'/%3E%3Ccircle cx='40' cy='40' r='18' stroke-dasharray='3,5'/%3E%3Cpath d='M40 22 L40 58 M22 40 L58 40'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
      data-ocid="login.modal"
    >
      {/* Back link */}
      <Link
        to="/"
        className="absolute top-5 left-5 flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium transition-colors"
        data-ocid="login.link"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.06)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {/* Gold top stripe */}
        <div className="h-1.5 bg-gradient-to-r from-islamic-gold via-islamic-gold-light to-islamic-gold" />

        <div className="p-7 sm:p-9">
          {/* Bismillah */}
          <p
            className="font-amiri text-islamic-gold text-2xl text-center mb-5 leading-relaxed"
            dir="rtl"
            lang="ar"
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          {/* Crescent icon */}
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-3xl">☽</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-white text-xl font-bold text-center mb-1">
            Welcome to Maktab Zaid Bin Sabit
          </h1>
          <p className="text-white/50 text-sm text-center mb-7">
            Login to your account
          </p>

          {/* Google Login */}
          <button
            type="button"
            data-ocid="login.primary_button"
            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-semibold text-sm shadow-md hover:shadow-lg hover:bg-gray-50 transition-all mb-5 border border-gray-200"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-white/40 text-xs">or login with</span>
            <div className="flex-1 h-px bg-white/15" />
          </div>

          {/* Name + Password Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-ocid="login.modal"
          >
            {/* Name */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-sm font-medium">
                Your Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-ocid="login.input"
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-islamic-gold focus:ring-islamic-gold/30 rounded-xl"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <Label className="text-white/70 text-sm font-medium">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-ocid="login.input"
                  className="pl-10 pr-11 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-islamic-gold focus:ring-islamic-gold/30 rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              data-ocid="login.submit_button"
              className="w-full py-3 rounded-xl bg-islamic-green text-islamic-gold font-bold text-sm hover:bg-islamic-green-light transition-all shadow-md hover:shadow-lg mt-2"
            >
              Login
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
