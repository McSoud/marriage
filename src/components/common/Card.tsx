import { DetailedHTMLProps, HTMLAttributes } from "react";

type TProps = {
  id: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>["id"];
  children: DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >["children"];
};

const Card = ({ id, children }: TProps) => {
  return (
    <main id={`${id}-content`} className="mx-auto max-w-lg px-4 py-6">
      <div
        className="rounded-sm bg-cover bg-bottom bg-no-repeat shadow-[0_0_25px_10px_#0004]"
        style={{ backgroundImage: `url(/assets/images/${id}.webp)` }}
      >
        <div className="min-h-[calc(100vh-3rem)] px-5 py-10">{children}</div>
      </div>
    </main>
  );
};

export default Card;
