import { sectionName } from "./types";
import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type useSectionInViewProps = {
  sectionName: sectionName;
};

export function useSectionInView(sectionName: sectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref, inView };
}
