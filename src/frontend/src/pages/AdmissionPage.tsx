import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Info } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { PageHero } from "../components/PageHero";

const courseOptions = [
  "Hifz ul Quran",
  "Nazra Quran",
  "Tajweed ul Quran",
  "Islamic Studies (Fiqh & Aqeedah)",
  "Urdu Language",
  "Arabic Language",
  "Hadith Studies",
  "Seerah (Prophet's Biography)",
];

export function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <PageHero
        title="Admission Form"
        subtitle="Fill in the details below to apply for enrollment"
      />

      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          {/* Info note */}
          <div className="bg-islamic-mint border border-islamic-green/20 rounded-xl px-4 py-3 flex items-start gap-3 mb-8">
            <Info className="w-4 h-4 text-islamic-green mt-0.5 flex-shrink-0" />
            <p className="text-sm text-islamic-body">
              This form is for inquiry purposes only. Our team will contact you
              within 2 working days.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-14"
              data-ocid="admission.success_state"
            >
              <CheckCircle className="w-14 h-14 text-islamic-green mx-auto mb-4" />
              <h2 className="text-xl font-bold text-islamic-dark mb-2">
                Application Submitted!
              </h2>
              <p className="text-islamic-body text-sm">
                Thank you for your interest. We will contact you shortly, In sha
                Allah.
              </p>
              <Button
                className="mt-6 bg-islamic-green text-white hover:bg-islamic-green/90 rounded-full px-6"
                onClick={() => setSubmitted(false)}
                data-ocid="admission.secondary_button"
              >
                Submit Another Application
              </Button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-card border border-islamic-border p-6 sm:p-8 space-y-5"
              data-ocid="admission.panel"
            >
              {/* Student Full Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="studentName"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Student Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="studentName"
                  name="studentName"
                  type="text"
                  placeholder="e.g. Muhammad Abdullah"
                  required
                  autoComplete="name"
                  data-ocid="admission.input"
                  className="border-islamic-border focus:ring-islamic-green"
                />
              </div>

              {/* Date of Birth */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="dob"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Date of Birth <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="dob"
                  name="dob"
                  type="date"
                  required
                  data-ocid="admission.input"
                  className="border-islamic-border focus:ring-islamic-green"
                />
              </div>

              {/* Guardian Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="guardianName"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Guardian / Father Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="guardianName"
                  name="guardianName"
                  type="text"
                  placeholder="e.g. Hafiz Salman Ahmed"
                  required
                  autoComplete="off"
                  data-ocid="admission.input"
                  className="border-islamic-border"
                />
              </div>

              {/* Contact Phone */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="phone"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Contact Phone <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+92 300 0000000"
                  required
                  autoComplete="tel"
                  data-ocid="admission.input"
                  className="border-islamic-border"
                />
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="address"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Address
                </Label>
                <Textarea
                  id="address"
                  name="address"
                  placeholder="House No, Street, City"
                  rows={3}
                  data-ocid="admission.textarea"
                  className="border-islamic-border resize-none"
                />
              </div>

              {/* Course */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="course"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Course Applying For <span className="text-red-500">*</span>
                </Label>
                <Select required>
                  <SelectTrigger
                    id="course"
                    data-ocid="admission.select"
                    className="border-islamic-border"
                  >
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    {courseOptions.map((c) => (
                      <SelectItem key={c} value={c}>
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Previous Education */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="prevEdu"
                  className="text-sm font-medium text-islamic-dark"
                >
                  Previous Education
                </Label>
                <Input
                  id="prevEdu"
                  name="prevEdu"
                  type="text"
                  placeholder="e.g. Completed Nazra, Class 5 school"
                  autoComplete="off"
                  data-ocid="admission.input"
                  className="border-islamic-border"
                />
              </div>

              <Button
                type="submit"
                data-ocid="admission.submit_button"
                className="w-full bg-islamic-green text-white hover:bg-islamic-green/90 rounded-full py-2.5 font-semibold text-base"
              >
                Submit Application
              </Button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}
