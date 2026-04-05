import {
  CheckCircle,
  Loader2,
  LogOut,
  RefreshCw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";

const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";
const API_URL =
  "https://script.google.com/macros/s/AKfycbwYXW13Dz7lWBmfx5A1wI9dv1jTUUicflQy9TT6jrJtRrohY0RFlFnEWtx0uQbEn-ej/exec";

type Student = {
  Name: string;
  DOB: string;
  FatherName: string;
  Mobile: string;
  Course: string;
};

function normalizeFatherName(obj: Record<string, string>): string {
  return (
    obj["Father Name"] ||
    obj.FatherName ||
    obj.father_name ||
    obj.fatherName ||
    obj.father ||
    ""
  );
}

function normalizeStudent(obj: Record<string, string>): Student {
  return {
    Name: obj.Name || obj.name || obj.student_name || "",
    DOB: obj.DOB || obj.dob || obj["Date of Birth"] || obj.date_of_birth || "",
    FatherName: normalizeFatherName(obj),
    Mobile: obj.Mobile || obj.mobile || obj.phone || obj.Phone || "",
    Course: obj.Course || obj.course || "",
  };
}

// Shared input style helpers
const inputBase: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  border: "1.5px solid rgba(212,175,55,0.25)",
  color: "#fff",
  caretColor: "#D4AF37",
};

function FocusInput({
  id,
  type,
  value,
  onChange,
  placeholder,
  ocid,
  extraStyle,
  className,
}: {
  id: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  ocid: string;
  extraStyle?: React.CSSProperties;
  className?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      id={id}
      type={type}
      autoComplete={type === "password" ? "current-password" : "username"}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      data-ocid={ocid}
      className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${className ?? ""}`}
      style={{
        ...inputBase,
        borderColor: focused ? "rgba(212,175,55,0.7)" : "rgba(212,175,55,0.25)",
        ...extraStyle,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
}

// ─── Login Screen ─────────────────────────────────────────────────────────────
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [passFocused, setPassFocused] = useState(false);

  function handleLogin() {
    if (username.trim() === ADMIN_USER && password === ADMIN_PASS) {
      setError("");
      onLogin();
    } else {
      setError("Invalid login. Please check your credentials.");
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      handleLogin();
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 islamic-pattern"
      style={{ backgroundColor: "#0B5D3B" }}
      data-ocid="admin.login.page"
    >
      <div
        className="w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden"
        style={{
          background: "rgba(5, 40, 26, 0.92)",
          border: "1.5px solid rgba(212,175,55,0.35)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Gold top accent bar */}
        <div
          className="h-1 w-full"
          style={{
            background: "linear-gradient(90deg, #D4AF37, #f0d060, #D4AF37)",
          }}
        />

        <div className="px-8 py-8">
          {/* Bismillah */}
          <p
            className="font-amiri text-center text-2xl mb-1 leading-loose"
            style={{ color: "#D4AF37" }}
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>

          {/* Icon + Title */}
          <div className="flex flex-col items-center mb-6">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center mb-3"
              style={{
                background: "rgba(212,175,55,0.15)",
                border: "1.5px solid rgba(212,175,55,0.4)",
              }}
            >
              <ShieldCheck size={26} style={{ color: "#D4AF37" }} />
            </div>
            <h1
              className="text-2xl font-bold tracking-wide"
              style={{ color: "#D4AF37" }}
            >
              Admin Panel
            </h1>
            <p
              className="text-sm mt-1"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Maktab Zaid Bin Sabit
            </p>
          </div>

          <div className="space-y-4">
            {/* Username */}
            <div>
              <label
                htmlFor="admin-username"
                className="block text-xs font-semibold mb-1.5 tracking-wide"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                USERNAME
              </label>
              <FocusInput
                id="admin-username"
                type="text"
                value={username}
                onChange={setUsername}
                placeholder="Enter username"
                ocid="admin.login.input"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-xs font-semibold mb-1.5 tracking-wide"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                PASSWORD
              </label>
              <div className="relative">
                <input
                  id="admin-password"
                  type={showPass ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Enter password"
                  data-ocid="admin.login.input"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all pr-12"
                  style={{
                    ...inputBase,
                    borderColor: passFocused
                      ? "rgba(212,175,55,0.7)"
                      : "rgba(212,175,55,0.25)",
                  }}
                  onFocus={() => setPassFocused(true)}
                  onBlur={() => setPassFocused(false)}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs px-1"
                  style={{ color: "rgba(212,175,55,0.6)" }}
                  tabIndex={-1}
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <p
                data-ocid="admin.login.error_state"
                className="text-xs text-center py-2 px-3 rounded-lg"
                style={{
                  color: "#ff8080",
                  background: "rgba(255,80,80,0.1)",
                  border: "1px solid rgba(255,80,80,0.2)",
                }}
              >
                {error}
              </p>
            )}

            {/* Login Button */}
            <button
              type="button"
              onClick={handleLogin}
              data-ocid="admin.login.submit_button"
              className="w-full py-3 rounded-xl font-bold text-sm tracking-wide transition-all mt-2 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #c9a22a)",
                color: "#0B5D3B",
                boxShadow: "0 4px 20px rgba(212,175,55,0.3)",
              }}
            >
              Login
            </button>
          </div>

          {/* Footer hint */}
          <p
            className="text-center text-xs mt-5"
            style={{ color: "rgba(255,255,255,0.25)" }}
          >
            Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Dashboard Screen ─────────────────────────────────────────────────────────
function DashboardScreen({
  onLogout,
  showLoginSuccess,
}: { onLogout: () => void; showLoginSuccess: boolean }) {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [successVisible, setSuccessVisible] = useState(showLoginSuccess);

  useEffect(() => {
    if (showLoginSuccess) {
      const timer = setTimeout(() => setSuccessVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showLoginSuccess]);

  async function loadStudents() {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const json = await res.json();

      // Handle various response shapes
      let raw: Record<string, string>[] = [];
      if (Array.isArray(json)) {
        raw = json;
      } else if (json && Array.isArray(json.data)) {
        raw = json.data;
      } else if (json && Array.isArray(json.students)) {
        raw = json.students;
      } else {
        throw new Error("Unexpected API response format");
      }

      setStudents(raw.map(normalizeStudent));
      setLoaded(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to fetch data. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#071f13" }}
      data-ocid="admin.dashboard.page"
    >
      {/* Header */}
      <header
        className="sticky top-0 z-40 flex items-center justify-between px-4 py-3 md:px-8"
        style={{
          background: "rgba(5, 30, 18, 0.96)",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex items-center gap-2.5">
          <ShieldCheck size={20} style={{ color: "#D4AF37" }} />
          <h1
            className="text-lg font-bold tracking-wide"
            style={{ color: "#D4AF37" }}
          >
            Admin Dashboard
          </h1>
        </div>
        <button
          type="button"
          onClick={onLogout}
          data-ocid="admin.dashboard.button"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
          style={{
            border: "1px solid rgba(212,175,55,0.4)",
            color: "#D4AF37",
            background: "rgba(212,175,55,0.08)",
          }}
        >
          <LogOut size={13} />
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="p-4 md:p-8 max-w-6xl mx-auto">
        {/* Login Success Banner */}
        {successVisible && (
          <div
            data-ocid="admin.login.success_state"
            className="flex items-center gap-3 rounded-xl px-5 py-3 mb-5 text-sm font-semibold"
            style={{
              background: "rgba(11,93,59,0.5)",
              border: "1px solid rgba(107,232,160,0.35)",
              color: "#6be8a0",
            }}
          >
            <CheckCircle
              size={18}
              style={{ color: "#6be8a0", flexShrink: 0 }}
            />
            Login Successful
          </div>
        )}

        {/* Welcome card */}
        <div
          className="rounded-2xl p-5 mb-6"
          style={{
            background: "rgba(11,93,59,0.25)",
            border: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          <p
            className="font-amiri text-xl mb-1"
            style={{ color: "rgba(212,175,55,0.8)" }}
          >
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </p>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
            Welcome, Admin — Maktab Zaid Bin Sabit
          </p>
        </div>

        {/* Students Panel */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          {/* Panel header */}
          <div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 py-4"
            style={{ borderBottom: "1px solid rgba(212,175,55,0.12)" }}
          >
            <div className="flex items-center gap-2">
              <Users size={18} style={{ color: "#D4AF37" }} />
              <span className="font-semibold text-white text-sm">
                Student Records
                {loaded && students.length > 0 && (
                  <span
                    className="ml-2 text-xs px-2 py-0.5 rounded-full font-bold"
                    style={{
                      background: "rgba(212,175,55,0.2)",
                      color: "#D4AF37",
                    }}
                    data-ocid="admin.students.success_state"
                  >
                    {students.length} students loaded
                  </span>
                )}
              </span>
            </div>

            <button
              type="button"
              onClick={loadStudents}
              disabled={loading}
              data-ocid="admin.students.primary_button"
              className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all hover:opacity-90 active:scale-[0.97] disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #D4AF37, #c9a22a)",
                color: "#0B5D3B",
                boxShadow: "0 4px 16px rgba(212,175,55,0.25)",
                minWidth: "140px",
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : loaded ? (
                <RefreshCw size={15} />
              ) : (
                <Users size={15} />
              )}
              {loading ? "Loading..." : loaded ? "Reload" : "Load Students"}
            </button>
          </div>

          {/* Loading state */}
          {loading && (
            <div
              data-ocid="admin.students.loading_state"
              className="flex items-center justify-center gap-3 py-16"
            >
              <Loader2
                size={24}
                className="animate-spin"
                style={{ color: "#D4AF37" }}
              />
              <span
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Fetching student records…
              </span>
            </div>
          )}

          {/* Error state */}
          {!loading && error && (
            <div
              data-ocid="admin.students.error_state"
              className="mx-5 my-5 p-4 rounded-xl text-sm"
              style={{
                background: "rgba(255,80,80,0.08)",
                border: "1px solid rgba(255,80,80,0.25)",
                color: "#ff9090",
              }}
            >
              <strong>Error:</strong> {error}
            </div>
          )}

          {/* Empty state — before first load */}
          {!loading && !error && !loaded && (
            <div
              data-ocid="admin.students.empty_state"
              className="flex flex-col items-center justify-center py-16 gap-3"
            >
              <Users size={40} style={{ color: "rgba(212,175,55,0.25)" }} />
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                Click{" "}
                <strong style={{ color: "rgba(212,175,55,0.6)" }}>
                  Load Students
                </strong>{" "}
                to fetch data
              </p>
            </div>
          )}

          {/* Empty results */}
          {!loading && !error && loaded && students.length === 0 && (
            <div
              data-ocid="admin.students.empty_state"
              className="flex flex-col items-center justify-center py-16 gap-3"
            >
              <Users size={40} style={{ color: "rgba(212,175,55,0.25)" }} />
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
                No student records found.
              </p>
            </div>
          )}

          {/* Table */}
          {!loading && !error && students.length > 0 && (
            <div className="overflow-x-auto" data-ocid="admin.students.table">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr style={{ background: "rgba(212,175,55,0.15)" }}>
                    {[
                      "#",
                      "Name",
                      "DOB",
                      "Father Name",
                      "Mobile",
                      "Course",
                    ].map((col) => (
                      <th
                        key={col}
                        className="px-4 py-3 text-left font-semibold whitespace-nowrap text-xs tracking-wide"
                        style={{
                          color: "#D4AF37",
                          borderBottom: "1px solid rgba(212,175,55,0.2)",
                        }}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((s, i) => (
                    <tr
                      key={`student-${i}-${s.Name}`}
                      data-ocid="admin.students.row"
                      className="transition-colors hover:bg-white/5"
                      style={{
                        background:
                          i % 2 === 0
                            ? "rgba(255,255,255,0.02)"
                            : "transparent",
                        borderBottom: "1px solid rgba(255,255,255,0.04)",
                      }}
                    >
                      <td
                        className="px-4 py-3 text-xs"
                        style={{ color: "rgba(212,175,55,0.5)" }}
                      >
                        {i + 1}
                      </td>
                      <td
                        className="px-4 py-3 font-medium whitespace-nowrap"
                        style={{ color: "#fff" }}
                      >
                        {s.Name || "—"}
                      </td>
                      <td
                        className="px-4 py-3 whitespace-nowrap"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {s.DOB || "—"}
                      </td>
                      <td
                        className="px-4 py-3 whitespace-nowrap"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {s.FatherName || "—"}
                      </td>
                      <td
                        className="px-4 py-3 whitespace-nowrap"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {s.Mobile || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap"
                          style={{
                            background: "rgba(11,93,59,0.5)",
                            color: "#6be8a0",
                            border: "1px solid rgba(107,232,160,0.2)",
                          }}
                        >
                          {s.Course || "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="text-center py-6 text-xs"
        style={{ color: "rgba(255,255,255,0.2)" }}
      >
        © {new Date().getFullYear()} Maktab Zaid Bin Sabit — Admin Panel
      </footer>
    </div>
  );
}

// ─── AdminPage (entry) ─────────────────────────────────────────────────────────
export function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  if (!isLoggedIn) {
    return (
      <LoginScreen
        onLogin={() => {
          setLoginSuccess(true);
          setIsLoggedIn(true);
        }}
      />
    );
  }

  return (
    <DashboardScreen
      onLogout={() => {
        setIsLoggedIn(false);
        setLoginSuccess(false);
      }}
      showLoginSuccess={loginSuccess}
    />
  );
}
