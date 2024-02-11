"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./SectionHeading";
import SubmitButton from "./SubmitButton";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 w-[min(100%,38rem)] scroll-mt-28 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="-mt-6 text-stone-700 dark:text-white/80">
        Contact me directly at{" "}
        <a className="underline" href="mailto:victorbenedict.bulaong@gmail.com">
          victorbenedict.bulaong@gmail.com
        </a>{" "}
        or fill out the form below
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully");
        }}
      >
        <input
          className="boarder h-14 rounded-lg border-black/15 pl-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none dark:focus:bg-opacity-100"
          name="senderEmail"
          type="email"
          placeholder="Your email"
          required
          maxLength={100}
        />
        <textarea
          className="my-3 h-52 rounded-lg border border-black/15 p-4 transition-all dark:bg-white dark:bg-opacity-80 dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
