type ButtonPrimaryProps = {
  type: "button" | "submit";
  style: string;
  label: string;
  onClick?: () => void;
};

export default function ButtonPrimary({
  type,
  style,
  onClick,
  label,
}: ButtonPrimaryProps) {
  return (
    <button
      type={type}
      className={`bg-primary-700 px-6 py-3 text-light-100 transition-all hover:bg-primary-500 ${style}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

