import { dude } from "@/lib/data";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { FieldError, useForm, UseFormRegister } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email({ message: "Invalid email address" }),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  website: z.string().optional(), // honeypot
});

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  disabled?: boolean;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

type ValidFieldNames = "name" | "email" | "subject" | "message" | "website";

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  disabled,
  error,
  valueAsNumber,
}) => (
  <>
    <input
      type={type}
      placeholder={placeholder}
      {...register(name, { valueAsNumber })}
      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed aria-invalid:ring-2 aria-invalid:ring-rose-500/20"
      aria-invalid={!!error}
      disabled={disabled}
    />
    {error && <span className="text-rose-500 text-sm">{error.message}</span>}
  </>
);

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    if (values.website) {
      await new Promise((res) => setTimeout(res, 500));
      toast.success("Thank you for reaching out! 🤖");
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Something went wrong");

      toast.success("Thanks for reaching out.\nI will get back to you soon.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Please try again or email me if the issue persists.");
      }
    }
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Leave a Message
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-400 mb-8">
                I&apos;m always open to discussing new projects or opportunities
                to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a
                    href={`mailto:${dude.email}`}
                    className="text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {dude.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-slate-400">{dude.location}</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="hidden lg:block mt-12 p-8 bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-slate-700/50 rounded-xl">
              <p className="text-lg text-slate-300 italic">
                `Let&apos;s build something amazing together!`
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Honeypot field */}
              <input
                className="absolute w-px h-px opacity-0 pointer-events-none:"
                type="text"
                {...register("website")}
                autoComplete="off"
                tabIndex={-1}
              />
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Name
                </label>
                <FormField
                  type="text"
                  placeholder="Your name"
                  name="name"
                  register={register}
                  error={errors.name}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Email
                </label>
                <FormField
                  type="email"
                  placeholder="your.email@example.com"
                  name="email"
                  register={register}
                  error={errors.email}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <FormField
                  type="text"
                  placeholder="Work opportunity"
                  name="subject"
                  register={register}
                  disabled={isSubmitting}
                  error={errors.subject}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  placeholder={"Tell me about your project..."}
                  {...register("message")}
                  className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none disabled:opacity-60 disabled:cursor-not-allowed aria-invalid:ring-2 aria-invalid:ring-rose-500/20"
                  aria-invalid={!!errors.message}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <span className="text-rose-500 text-sm">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                  isSubmitting && "pointer-events-none",
                )}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
            <div className="flex gap-1 justify-center items-center">
              <span className="text-xs leading-loose text-slate-300">
                Powered by
              </span>
              <Image
                width={40}
                height={40}
                src="/logos/resend.svg"
                alt="Resend logo"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
