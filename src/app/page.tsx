import { ProjectSection } from "@/components/organisms/ProjectSection";
import CTASurface from "@/components/organisms/CTASurface";
import Heroes from "@/components/organisms/Heroes";
import ProductCarousel from "@/components/organisms/ProductsCarousel";
import { HardSkills } from "@/components/organisms/HardSkills";
import { EducationSection } from "@/components/organisms/EducationHistory";
import {
  ProjectData,
  ToolsData,
  EducationData,
  CertificateData,
} from "@/store/data";
import { CertificateGallery } from "@/components/organisms/CertificateGallery";

export default function Home() {
  return (
    <>
      <Heroes />
      <ProjectSection title="Selected Projects" data={ProjectData} />
      <CTASurface />

      <ProductCarousel
        title="UI UX Design Portfolio"
        // Panggil datanya dulu, baru gunakan .filter
        data={ProjectData.filter((item) => item.category.includes("uiux"))}
      />

      <ProductCarousel
        title="Web Design Portfolio"
        data={ProjectData.filter((item) => item.category.includes("web"))}
      />
      {/* <ProductCarousel title="UI UX Design Portofolio" data={ProjectData} />
      <ProductCarousel title="Web Design Portofolio" data={ProjectData} /> */}
      <HardSkills tools={ToolsData} />
      <EducationSection data={EducationData} />
      <CertificateGallery data={CertificateData} />
    </>
  );
}
