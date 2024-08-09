import { ButtonLink, InputField } from "@/components";
import { Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="-mb-32 flex justify-between gap-8 rounded-[1.25rem] bg-black px-6 py-7 max-lg:flex-col md:px-16 md:py-9 lg:-mb-24">
      <h2 className="-mt-0.5 max-w-[35rem] font-integral text-[2rem] leading-[2.1875rem] text-white lg:text-[2.5rem] lg:leading-[2.8125rem]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h2>

      <div className="max-lg:mx-auto flex w-full flex-col justify-center gap-3 text-white lg:max-w-[22rem]">
        <InputField
          startIcon={<Mail />}
          placeholder="Enter your email address"
          iconProps={{
            className: "stroke-black/40",
          }}
        />
        <ButtonLink
          label="Subscribe to Newsletter"
          className="w-full bg-neutral-100 py-6 text-black hover:bg-shade-200"
        />
      </div>
    </section>
  );
};
export default CTASection;
