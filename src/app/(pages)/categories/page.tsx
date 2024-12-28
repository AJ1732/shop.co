import Link from "next/link";
import { categories } from "@/constants";

const CategoriesPage = () => {
  return (
    <div className="flex flex-wrap gap-2 py-4 pb-28">
      {categories.map((category) => (
        <Link
          key={category}
          href={`/categories/${category}`}
          className="cursor-pointer rounded-full bg-black/5 px-4 py-2 text-black/80 hover:text-black"
        >
          <p key={category}>{category.split("-").join(" ")}</p>
        </Link>
      ))}
    </div>
  );
};
export default CategoriesPage;
