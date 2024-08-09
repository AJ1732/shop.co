import { ErrorPage } from "@/components";

const NotFound = () => {
  return (
    <div className="flex items-center pt-10 pb-20 justify-center">
      <ErrorPage message="This page does not seem to exist. Please check the url" />
    </div>
  );
};
export default NotFound;
