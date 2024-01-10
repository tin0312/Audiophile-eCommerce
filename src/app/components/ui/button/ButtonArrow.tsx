import Image from "next/image";
import { LabelProp } from "@/types/global";

export default function ButtonArrow({ label }: LabelProp) {
  return (
    <div>
      <button>
        <span className="lg:text-sm text-xs opacity-50">{label}</span>
        <Image
          src="/assets/icons/shared/buttons/button-arrow-right.svg"
          alt="arrow-icon"
          width={8}
          height={16}
          className="ml-2 inline"
        />
      </button>
    </div>
  );
}
