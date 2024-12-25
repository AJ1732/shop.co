import { formatCurrency } from "@/utils";
import { StarRating } from "./components";

const InfoDisplay = () => {
  return (
    <div className="flex flex-col divide-y divide-black/10">
      <header className="pb-6">
        <h2 className="font-integral text-2xl leading-[1.2] md:text-[2rem] lg:text-[2.5rem]">
          One Life Graphic Tshirt
        </h2>

        <div className="my-3 flex items-center justify-start gap-2 md:my-3.5">
          <StarRating rating={4.95} />

          <p className="text-black/60">
            <span className="text-black">4.5</span>/5
          </p>
        </div>

        <p className="text-[2rem] font-bold">{formatCurrency(260)}</p>

        <p className="mt-3 leading-[1.375rem] text-black/60 max-md:text-sm">
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
      </header>
    </div>
  );
};
export default InfoDisplay;
