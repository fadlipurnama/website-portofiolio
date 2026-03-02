import { GoMail } from "react-icons/go";
import { Button } from "../atoms/Button";
import Link from "next/link";

function CTASurface() {
  return (
    <section
      id="cta-surface-section"
      aria-labelledby="cta-surface-heading"
      className="section-container"
    >
      <div className="flex items-center justify-between p-6 flex-col gap-5 lg:flex-row bg-linear-to-br from-brand-gray2 to-brand-black">
        <h2 id="cta-surface-heading" className="text-2xl text-white font-bold">
          Interested working with me?
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <Button size="md" className="text-md font-medium" variant="outline2">
            See More Projects
          </Button>
          <Button size="md" className="text-md font-medium" variant="primary">
            <Link
              href={"mailto:fadlypurnama@gmail.com"}
              className="flex items-center gap-2"
            >
              <GoMail className="size-5" />
              Email Me
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTASurface;
