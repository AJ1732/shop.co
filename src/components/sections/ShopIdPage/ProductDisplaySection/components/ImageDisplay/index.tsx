import Image from "next/image";
// import { Skeleton } from "@/components/ui/skeleton";

interface ImageDisplayProps {
  images: string[];
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ images }) => {
  // if (isLoading) {
  //   return (
  //     <div className="grid gap-3.5 md:grid-cols-[9.5rem_1fr]">
  //       <div className="flex w-full gap-3.5 md:flex-col">
  //         {[1, 2, 3].map((item) => (
  //           <Skeleton
  //             key={item}
  //             className="aspect-square w-full rounded-[1.25rem] md:aspect-[19/21] md:max-w-[9.5rem]"
  //           />
  //         ))}
  //       </div>
  //       <Skeleton className="aspect-[179/145] w-full rounded-[1.25rem] max-md:row-start-1 lg:aspect-[222/265]" />
  //     </div>
  //   );
  // }

  if (!images?.length) {
    return (
      <div className="rounded-xl bg-warn/10 p-4">
        No product images available
      </div>
    );
  }

  return (
    <div className="grid gap-3.5 md:grid-cols-[9.5rem_1fr]">
      <div className="flex w-full gap-3.5 md:flex-col">
        {images.slice(0, 3).map((image, index) => (
          <figure
            key={index}
            className="relative aspect-square w-full overflow-hidden rounded-[1.25rem] bg-neutral-100 md:aspect-[19/21] md:max-w-[9.5rem]"
          >
            <Image
              fill
              src={image}
              className="object-cover transition-all duration-300 hover:scale-105"
              alt={`Product Image ${index + 1}`}
            />
          </figure>
        ))}
      </div>

      <figure className="relative aspect-[179/145] w-full overflow-hidden rounded-[1.25rem] bg-neutral-200 max-md:row-start-1 lg:aspect-[222/265]">
        <Image
          fill
          src={images[images.length - 1]}
          className="object-cover transition-all duration-300 hover:scale-105"
          alt="Product Main Image"
        />
      </figure>
    </div>
  );
};
export default ImageDisplay;
