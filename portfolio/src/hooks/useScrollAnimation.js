import { useEffect } from "react";

const useScrollAnimation = () => {

  useEffect(() => {

    const elements =
      document.querySelectorAll(".reveal");

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if(entry.isIntersecting){
              entry.target.classList.add("active");
            }

          });

        },
        { threshold: .2 }
      );

    elements.forEach(el =>
      observer.observe(el)
    );

  }, []);

};

export default useScrollAnimation;