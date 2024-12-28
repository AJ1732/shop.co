import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const NoticeSection = () => {
  return (
    <section className="bg-shade-50 flex w-full flex-col items-center gap-8 py-10 md:py-20">
      <h2 className="font-integral text-[2rem] md:text-4xl lg:text-center lg:text-[3rem]">
        Important Notice
      </h2>
      <div className="grid max-w-5xl gap-8 px-4 md:grid-cols-2">
        <div className="space-y-4 text-black/60">
          <h3 className="text-xl font-semibold text-black">Demo Project</h3>
          <p>
            This is a demo e-commerce website built to showcase web development
            skills. It is not a real online store and no actual transactions can
            be made.
          </p>
          <p>
            All product data is provided by{" "}
            <Link
              href="https://dummyjson.com/docs/products"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-black hover:underline"
            >
              DummyJSON API
            </Link>
            .
          </p>
        </div>

        <div className="space-y-4 text-black/60">
          <h3 className="text-xl font-semibold text-black">Tech Stack</h3>
          <ul className="list-inside list-disc space-y-2">
            <li>Built with Next.js 14 (App Router)</li>
            <li>UI Components from shadcn/ui</li>
            <li>Styling with TailwindCSS</li>
            <li>State Management using Redux Toolkit</li>
            <li>API Integration with Axios</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-4 text-xl font-semibold text-black">
            Design Credit
          </h3>
          <div className="flex items-start justify-start gap-4 max-md:flex-col">
            <Link
              href="https://www.figma.com/community/file/1273571982885059508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-transform hover:scale-105"
            >
              <span>View Figma Template</span>
            </Link>
            <Link
              href="https://github.com/AJ1732/shop.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-black px-6 py-3 transition-transform hover:scale-105"
            >
              <FaGithub className="size-5" />
              <span>View Source Code</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoticeSection;
