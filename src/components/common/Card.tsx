import { DetailedHTMLProps, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type TProps = {
  id: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>["id"];
  children: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["children"];
  className?: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["className"];
};

const Card = ({ id, children, className }: TProps) => {
  return (
    <main id={`${id}-content`} className="mx-auto max-w-lg px-3 py-4">
      <div
        className={twMerge(
          "rounded-sm bg-cover bg-bottom bg-no-repeat shadow-[0_0_25px_10px_#0004]",
          className,
        )}
        style={{ backgroundImage: `url(/assets/images/${id}.webp)` }}
      >
        <div className="h-[calc(100dvh-2rem)] px-4 py-8 text-center">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Card;
