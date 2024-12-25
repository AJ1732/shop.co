"use client";
import { ButtonLink } from "@/components";

const ErrorPage = ({ message }: { message: string }) => {
  return (
    <div className="mx-auto flex size-full items-center justify-between gap-10 max-lg:flex-col-reverse lg:py-16 lg:pb-5">
      <div className="flex w-full flex-col gap-4">
        <h3
          className={`mb-10 font-integral text-5xl font-extrabold lg:text-7xl`}
        >
          Oops...
        </h3>

        <p className="text-lg lg:text-xl">
          Something went wrong, <br />
          {message} <br /> <br />
        </p>

        <ButtonLink
          link="/"
          className="max-w-40 py-6 text-lg md:max-w-60 lg:max-w-80"
        >
          Go Home
        </ButtonLink>
      </div>

      <div></div>
    </div>
  );
};
export default ErrorPage;
