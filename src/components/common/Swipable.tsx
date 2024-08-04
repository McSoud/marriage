import { useEffect } from "react";
import SvgCursor from "../svgs/Cursor";

const Swipable = () => {
  useEffect(() => {
    const swipeable = document.querySelector("#swipable-animation");
    console.log(swipeable);
    const timer = setTimeout(() => {
      swipeable && swipeable?.remove();
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      id="swipable-animation"
      className="absolute bottom-20 z-10 flex w-full justify-center"
    >
      <div className="animate-swipe flex w-1/2 justify-end">
        <SvgCursor className="size-12 animate-pulse [filter:drop-shadow(0_0_5px_#5c5653)]" />
      </div>
    </div>
  );
};

export default Swipable;
