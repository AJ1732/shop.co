import Image from "next/image";

const ImageDisplay = () => {
  return (
    <div className="grid gap-3.5 md:grid-cols-[9.5rem_1fr]">
      <div className="flex w-full gap-3.5 md:flex-col">
        {[1, 2, 3].map((item) => (
          <figure
            key={item}
            className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] bg-neutral-100 md:aspect-[19/21] md:max-w-[9.5rem]"
          >
            <Image
              fill
              src={"https://i.imgur.com/QkIa5tT.jpeg"}
              className="object-cover transition-all duration-300 hover:scale-105"
              alt="Product Image"
            />
          </figure>
        ))}
      </div>

      <figure className="relative aspect-[179/145] w-full overflow-hidden rounded-[1.25rem] bg-neutral-200 max-md:row-start-1 lg:aspect-[222/265]">
        <Image
          fill
          src={"https://i.imgur.com/QkIa5tT.jpeg"}
          className="object-cover transition-all duration-300 hover:scale-105"
          alt="Product Image"
        />
      </figure>
    </div>
  );
};
export default ImageDisplay;
