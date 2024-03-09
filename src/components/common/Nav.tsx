import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { CloseMenu, GithubIcon, HambugerMenu, LinkedInIcon } from "./icons";
import { ISite } from "@/definitions";

const resources = [
  { label: "Dashboard", path: "/" },
  // other links and pages
  // { label: "All Posts", path: "/blog" },
  // { label: "Something Else", path: "/blog" },
  { label: "About", path: "/about" },
];

interface NavProps {
  isRootPath: boolean;
  site: ISite;
}

const Nav: React.FC<NavProps> = ({ isRootPath, site }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { social } = site.siteMetadata;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="fixed w-full top-0 z-10 bg-white">
      <div className="mx-auto max-w-screen-lg flex justify-between items-center px-4 py-4 sm:px-10 md:px-20 lg:px-28">
        <div className="flex flex-row items-center justify-center text-center">
          <div>
            <Link to="/">
              <StaticImage
                className="rounded-full overflow-hidden"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../../images/profile-pic.jpeg"
                width={60}
                height={60}
                quality={100}
                imgStyle={{ borderRadius: "100%" }}
                alt="Profile picture"
              />
              <h3 className="font-bold">Jon</h3>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          {resources.map((resource, index) => (
            <Link key={`${resource.label}-${index}`} to={resource.path}>
              {resource.label}
            </Link>
          ))}
          <Link
            key={`key-${social.linkedin}`}
            to={`https://linkedin.com/in/${social.linkedin || ""}`}
          >
            <LinkedInIcon />
          </Link>
          <Link
            key={`key-${social.github}`}
            to={`https://linkedin.com/in/${social.linkedin || ""}`}
          >
            <GithubIcon />
          </Link>
        </div>
        <div className="md:hidden">
          {isOpen ? (
            <button onClick={() => setIsOpen(!isOpen)}>
              <HambugerMenu />
            </button>
          ) : (
            <button onClick={() => setIsOpen(!isOpen)}>
              <CloseMenu />
            </button>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="top-0 left-0 z-10 h-screen w-full flex flex-col justify-center items-center">
          <ul className="space-y-8 p-2 text-center -mt-[115px]">
            {resources.map((resource, index) => (
              <li key={`${resource.label}-${index}`} onClick={() => setIsOpen(false)}>
                <Link to={resource.path}>{resource.label}</Link>
              </li>
            ))}
            <li className="flex justify-center">
              <Link
                key={`key-${social.linkedin}`}
                to={`https://linkedin.com/in/${social.linkedin || ""}`}
              >
                <LinkedInIcon />
              </Link>
            </li>
            <li className="flex justify-center">
              <Link
                key={`key-${social.github}`}
                to={`https://linkedin.com/in/${social.linkedin || ""}`}
              >
                <GithubIcon />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
