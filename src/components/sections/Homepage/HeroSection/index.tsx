import { ButtonLink } from "@/components";

const stats = [
  {
    figures: 200,
    text: "International Brands",
  },
  {
    figures: 2000,
    text: "High-Quality Products",
  },
  {
    figures: 30000,
    text: "Happy Customers",
  },
];

const HeroSection = () => {
  return (
    <section className="full-width content-grid bg-shade-100 pb-28 pt-12 lg:pt-24">
      <div className="flex items-center justify-between gap-12 max-lg:flex-col lg:gap-8">
        <div className="max-w-[38rem] space-y-5 lg:space-y-12">
          <div className="space-y-5 lg:space-y-8">
            <h2 className="font-integral text-4xl leading-[2.125rem] text-black max-md:max-w-[22.5rem] md:text-5xl lg:text-[4rem] lg:leading-[4rem]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>

            <p className="text-sm text-black/60 max-md:max-w-[22.5rem] md:text-base">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>

            <ButtonLink
              label="Shop Now"
              link="/shop"
              className="w-full px-14 py-4 md:w-fit"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 space-x-2 md:justify-between">
            {stats.map(({ figures, text }, i) => (
              <div key={i} className="w-[9.7rem] max-lg:first:border-r">
                <p className="text-2xl font-bold md:text-[2rem] lg:text-[2.5rem]">
                  {/* <Counter from={0} to={figures} />+ */}
                  {figures}+
                </p>
                <p className="text-xs text-black/60 md:text-sm lg:text-base">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <figure className="aspect-square w-96 rounded-full bg-neutral-500"></figure>
      </div>
    </section>
  );
};
export default HeroSection;
