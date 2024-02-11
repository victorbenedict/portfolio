import { useFormStatus } from "react-dom";
import { RiMailSendLine } from "react-icons/ri";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2  rounded-full bg-stone-700 text-white outline-none transition hover:scale-110 hover:bg-stone-800 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:bg-opacity-10 dark:hover:bg-opacity-20"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <RiMailSendLine className="transition-all group-hover:scale-105" />{" "}
        </>
      )}
    </button>
  );
}
