import { cn } from "@/lib/utils";

interface ProfileSectionProps {
  children: React.ReactNode;
  className?: string;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  children,
  className,
}) => {
  return <section className={cn("py-6", className)}>{children}</section>;
};

const ProfilePage = () => {
  return (
    <div className="py-10">
      <div className="divide-y divide-black/10 rounded-2xl border border-black/10 px-4 py-4">
        <ProfileSection className="flex justify-between gap-4 pt-0 max-md:flex-col md:gap-12">
          <div className="space-y-4 pt-4">
            <div className="aspect-square w-20 rounded-full border bg-black/10"></div>

            <div>
              <h2 className="whitespace-nowrap text-2xl font-medium leading-7">
                Pseudo Name
              </h2>
              <p className="text-black/60">1732ABC</p>
            </div>
          </div>

          <div className="size-full min-h-40 bg-black/10"></div>
        </ProfileSection>

        <ProfileSection className="flex divide-black/10 max-md:flex-col max-md:divide-y md:divide-x">
          {profileInfo.map(({ title, value }) => (
            <article
              key={title}
              className="w-full space-y-2 first:pl-0 last:pr-0 max-md:py-6 max-md:first:pt-0 max-md:last:pb-0 md:px-4"
            >
              <h3 className="text-sm font-medium uppercase text-black/60">
                {title}
              </h3>
              <p className="text-xl">{value}</p>
            </article>
          ))}
        </ProfileSection>

        {/* <ProfileSection className="flex divide-black/10 max-md:flex-col max-md:divide-y md:divide-x">
          {profileInfo2.map(({ title, value }) => (
            <article
              key={title}
              className="w-full space-y-2 first:pl-0 last:pr-0 max-md:py-6 max-md:first:pt-0 max-md:last:pb-0 md:px-4"
            >
              <h3 className="text-sm font-medium uppercase text-black/60">
                title
              </h3>
              <p className="text-xl">value</p>
            </article>
          ))}
        </ProfileSection> */}
      </div>
    </div>
  );
};
export default ProfilePage;

const profileInfo = [
  {
    title: "email",
    value: "pseudoemail@email.com",
  },
  {
    title: "address",
    value: "1732 Pseudo Street",
  },
  {
    title: "location",
    value: "North Pole",
  },
];

// const profileInfo2 = [
//   {
//     title: "email",
//     value: "pseudoemail@email.com",
//   },
//   {
//     title: "address",
//     value: "1732 Pseudo Street",
//   },
// ];
