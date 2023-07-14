import { Link } from "react-router-dom";
import { Location, Message, PaymentCard, Phone } from "../components/SVG";

const Footer = () => {
  const footerLinks = [
    {
      title: "Links",
      links: ["Home", "About Us", "Courses", "Contact Us", "Blog", "FAQs"],
    },
    {
      title: "Others",
      links: [
        "Privacy Policy",
        "Terms & Conditions",
        "Cookie Policy",
        "Sitemap",
        "Accessibility",
      ],
    },
  ];
  return (
    <>
      <footer>
        <div className="bg-[#FFF8F8] pt-[180px] pb-[70px]">
          <div className="container flex flex-wrap">
            <div className="w-4/12 pr-4">
              <p className="text-[#12141D] text-[22px] font-semibold pb-3">
                About Us
              </p>
              <p className="text-[#6B6B6B] text-sm pb-3">
                Training centre. Ltd. Company Number 10647280, England and
                Wales, VAT No. GB-267018794
              </p>
              <p className="text-sm text-[#3F3F3F] pb-3 flex items-center gap-x-2">
                <Phone />
                <span>020 3900 4072</span>
              </p>
              <p className="text-sm text-[#3F3F3F] pb-3 flex items-center gap-x-2">
                <Message /> <span> trainingcentre.org</span>
              </p>
              <p className="text-sm text-[#3F3F3F] flex items-center gap-x-2">
                <Location />{" "}
                <span>
                  11 Floor, 15 St Botolph Street, <br /> London EC3A 7BB
                </span>
              </p>
            </div>
            <div className="w-4/12 flex flex-wrap">
              {footerLinks.map((item, index) => {
                return (
                  <div className="w-1/2" key={index}>
                    <p className="text-[#12141D] text-[22px] font-semibold pb-3">
                      {item?.title}
                    </p>
                    <ul>
                      {item?.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <Link to="/" className="text-sm pb-3">
                              {link}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
            <div className="w-4/12">
              <p className="text-[#12141D] text-[22px] font-semibold pb-3">
                Secure payment
              </p>
              <p>
                <PaymentCard />
              </p>
              <p className="text-xl font-semibold text-[#3F3F3F] pt-[55px] pb-[20px]">
                Certificate Validation
              </p>
              <div className="flex ">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="bg-white w-8/12 border-[1px] border-[#00000012] rounded-l-[8px] py-[14px] pl-3 focus:outline-[1px] focus:outline-[#00000012]  "
                />
                <button className="bg-[#F5AA40] rounded-r-[8px] w-4/12 text-white text-xs">
                  Validate
                </button>
              </div>
            </div>
          </div>
        </div>
        <p className="text-white text-center bg-[#5EB9B3] py-[27px] text-base font-medium">
          Copyright © 2021 Training Centre. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
