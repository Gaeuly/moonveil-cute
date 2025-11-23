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
        // Hapus overflow-visible biar gak bleeding pixel-nya
      >
        {/* Logika Path Referensi (d="M0 0v18C0 8.059...") disesuaikan ke 20px:
          M0 0  -> Mulai dari pojok kiri atas
          v20   -> Garis lurus ke bawah (kiri bawah)
          C0 9 9 0 20 0 -> Kurva cekung mulus ke kanan atas
          Z     -> Tutup path
        */}
        <path
          d="M0 0v20C0 9 9 0 20 0Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Graphic;