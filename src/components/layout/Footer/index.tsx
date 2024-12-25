import {
  ApplePaySVG,
  GooglePaySVG,
  MastercardSVG,
  PayPalSVG,
  VisaSVG,
} from "@/svgs";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { footerData } from "./constants";

const socialIcons = [
  {
    id: 1,
    icon: <FaTwitter />,
  },
  {
    id: 2,
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
  {
    id: 4,
    icon: <FaGithub />,
  },
];

const Footer = () => {
  return (
    <footer className="content-grid full-width -z-[1] divide-y-2 bg-shade-200 py-14 pt-36 text-sm text-black/60">
      <div className="flex items-start justify-between gap-6 py-8 max-lg:flex-col">
        <div className="max-w-[22rem] lg:max-w-[15.5rem]">
          <h2 className="-mt-3 mb-2 font-integral text-3xl text-black lg:mb-6 lg:text-4xl">
            SHOP.CO
          </h2>

          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          <div className="mt-8 flex gap-4 text-black">
            {socialIcons.map(({ id, icon }, i) => (
              <div
                key={`social-${id}`}
                className="group rounded-full border border-[#CCC] bg-white p-2 *:size-4 hover:border-black hover:bg-black hover:*:text-white"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full max-w-[52rem] grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {footerData.map(({ heading, link }) => (
            <div key={heading} className="space-y-6">
              <h3 className="font-medium uppercase leading-[1.125rem] tracking-[0.1875rem] text-black">
                {heading}
              </h3>

              <ul className="space-y-4">
                {link.map((item, i) => (
                  <li key={`footer-link-${i}`} className="capitalize">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 py-6 max-lg:flex-col">
        <p>Shop.co © 2000-2023, All Rights Reserved</p>

        <div className="flex gap-3">
          <VisaSVG />
          <MastercardSVG />
          <PayPalSVG />
          <ApplePaySVG />
          <GooglePaySVG />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
