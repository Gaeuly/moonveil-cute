interface Props {
  className?: string;
}

const Graphic = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="overflow-visible"
      >
        <path
          d="M0 0 L0 20 C0 9 9 0 20 0 V-1 H0 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Graphic;