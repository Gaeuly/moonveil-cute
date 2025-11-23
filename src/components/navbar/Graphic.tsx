interface Props {
  className?: string;
  rotation?: string; // Buat muter-muter curvanya
}

/**
 * Ini komponen "Siku Lengkung" (Inverted Radius).
 * Fungsinya buat nambal sudut biar keliatan cair/liquid.
 */
const Graphic = ({ className }: Props) => {
  return (
    <div className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        {/* Path ini bentuknya segitiga siku yang sisi miringnya cekung.
           Warnanya ngikutin parent (fill-current / text-white/black).
        */}
        <path
          d="M0 0v18C0 8.059 8.059 0 18 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Graphic;