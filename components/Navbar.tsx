import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "@/public/goldmark.jpg";

export default function Navbar() {
  const router = useRouter();
  const flexStyles = "flex items-center justify-between ";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const dropdownItems = [
    { label: "Land Subdivision", link: "/subdivision" },
    { label: "Title Processing", link: "/title" },
    { label: "Land Buying and Selling", link: "/buying" },
    { label: "Plot demarcation", link: "/demarcation" },
    { label: "Topographical Survey", link: "/topographical" },
  ];

  return (
    <nav>
      <div
        className={`${flexStyles} w-full top-0 z-30 fixed py-2 bg-secondary-gray-200 shadow`}>
        <div className={`${flexStyles} mx-auto w-5/6`}>
          <div className={`${flexStyles} w-full gap-4`}>
            {/**left side */}
            {/**put logo here  */}
            <Image src={Logo} alt="logo" width={90} height={20} />
            <span className="text-secondary-gray-700 text-2xl">
              Goldmark Realtors
            </span>
            {/**right side */}
            {isAboveMediaScreens ? (
              <div className={`${flexStyles} w-full`}>
                <div
                  className={`${flexStyles} text-sm text-primary-gray-500  gap-8`}>
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/" ? "text-primary-gray" : ""
                      }`}>
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/subdivision"}>
                    <a
                      className={`${
                        router.pathname === "/subdivision"
                          ? "text-primary-gray"
                          : ""
                      }`}>
                      Land Subdivision
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/title"}>
                    <a
                      className={`${
                        router.pathname === "/title" ? "text-primary-gray" : ""
                      }`}>
                      Title Processing
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/buying"}>
                    <a
                      className={`${
                        router.pathname === "/buying" ? "text-primary-gray" : ""
                      }`}>
                      Land Buying and Selling
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/demarcation"}>
                    <a
                      className={`${
                        router.pathname === "/demarcation"
                          ? "text-primary-gray"
                          : ""
                      }`}>
                      Plot Demarcation
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/topographical"}>
                    <a
                      className={`${
                        router.pathname === "/topographical"
                          ? "text-primary-gray"
                          : ""
                      }`}>
                      Topographical Survey
                    </a>
                  </Link>
                </div>
                <div>
                  <Link
                    className="text-sm text-primary-gray-500"
                    href={"/comments"}>
                    Comments
                  </Link>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full p-2 bg-secondary-gray-300"
                onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 " />
              </button>
            )}

            {/**mobile menu modal */}
            {!isAboveMediaScreens && isMenuToggled && (
              <div className="fixed right-0 bottom-0 h-full w-[300px] z-40 bg-secondary-gray-300 drop-shadow-xl">
                {/**close icon */}
                <div className="p-12 flex justify-end ">
                  <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-primary-gray-500 " />
                  </button>
                </div>
                {/**menu items */}
                <div className="flex flex-col gap-10 text-2xl ml-[33%]">
                  <Link legacyBehavior href={"/"}>
                    <a
                      className={`${
                        router.pathname === "/" ? "text-primary-gray-500" : ""
                      }`}>
                      Home
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/subdivision"}>
                    <a
                      className={`${
                        router.pathname === "/subdivision"
                          ? "text-primary-gray"
                          : ""
                      }`}>
                      Land Subdivision
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/title"}>
                    <a
                      className={`${
                        router.pathname === "/title" ? "text-primary-gray" : ""
                      }`}>
                      Title Processing
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/buying"}>
                    <a
                      className={`${
                        router.pathname === "/buying" ? "text-primary-gray" : ""
                      }`}>
                      Land Buying and Selling
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/demarcation"}>
                    <a
                      className={`${
                        router.pathname === "/demarcation"
                          ? "text-primary-gray"
                          : ""
                      }`}>
                      Plot Demarcation
                    </a>
                  </Link>
                  <Link legacyBehavior href={"/topographical"}>
                    <a
                      className={`${
                        router.pathname === "/topographical"
                          ? "text-primary-gray"
                          : ""
                      }`}>
                      Topographical Survey
                    </a>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
