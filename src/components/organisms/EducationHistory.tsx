import Image from "next/image";
import { QuoteBlock } from "../molecules/QuoteBlock";
import { TimelineItem } from "../molecules/TimelineItem";

export const EducationSection = ({
  data,
}: {
  data: {
    id: number | string;
    institution: string;
    role: string;
    description: string;
    startDate: string;
    endDate: string;
    isCurrent: boolean;
  }[];
}) => {
  // Logic Sorting: Mengurutkan dari yang TERBARU ke yang TERLAMA
  const sortedData = [...data].sort((a, b) => {
    // 1. Jika salah satu masi 'Present' (isCurrent), dia harus di paling atas
    if (a.isCurrent && !b.isCurrent) return -1;
    if (!a.isCurrent && b.isCurrent) return 1;

    // 2. Jika keduanya sudah selesai atau keduanya masi jalan,
    // urutkan berdasarkan endDate (Terbaru ke Terlama)
    const dateA = new Date(a.endDate || a.startDate).getTime();
    const dateB = new Date(b.endDate || b.startDate).getTime();

    return dateB - dateA;
  });
  return (
    <section
      id="about-me"
      aria-labelledby="this-is-my"
      className="section-container gap-10 grid grid-cols-12 mb-32"
    >
      {/* Sisi Kiri: Profil & Teks Branding */}
      <div className="flex justify-center flex-col col-span-12 lg:col-span-7 gap-10">
        <div className="flex items-center gap-6">
          <div className="relative aspect-video w-full">
            <Image
              src="/assets/thisme/thisismy.png"
              alt="My Profile"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="flex gap-2 flex-col text-3xl font-bold">
            <h2 id="this-is-my" className="text-brand-green">
              This Is My
            </h2>
            <h3 className="text-main-text leading-tight">
              Educational History That Makes Me Grow
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-xl text-zinc-300">
            Education that helps me build character, improve skills, knowledge,
            insight and experience.
          </p>
          <QuoteBlock
            text="Hang your ideals high in the sky! Dream as high as the sky. If you fall, you will fall among the stars."
            author="Ir. Soekarno Indonesia's 1st president"
          />
        </div>
      </div>

      {/* Sisi Kanan: Daftar Riwayat */}
      <div className="col-span-12 lg:col-span-5 border-l-4 border-brand-green p-6 flex flex-col gap-y-14">
        {sortedData.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};
