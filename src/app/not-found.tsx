import { ErrorPage } from "@/components";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center pb-20 pt-10">
      <ErrorPage message="This page does not seem to exist. Please check the url" />
    </div>
  );
};
export default NotFound;
