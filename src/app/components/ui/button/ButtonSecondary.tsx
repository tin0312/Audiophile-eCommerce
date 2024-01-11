import { LabelProp } from "@/types/global";

export default function ButtonSecondary({ label }: LabelProp) {
  return (
    <button className="border border-dark-900 px-6 py-3 font-bold text-dark-850 transition-all hover:bg-dark-900 hover:text-light-100">
      {label}
    </button>
  );
}
