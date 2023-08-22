import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

type Prop = {
  items: { label: string; link: string }[];
};

export default function Dropdown({ items }: Prop) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownToggled = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative flex flex-col  items-center rounded-lg">
      <button
        onClick={dropdownToggled}
        className="rounded-lg bg-secondary-gray-300 p-4 flex items-center justify-between font-bold text-lg tracking-wider duration-500 border-4 
        w-52 border-transparent active:border-white active:text-black shadow-xl">
        Services
        {!isOpen ? (
          <ChevronDownIcon className="h-8" />
        ) : (
          <ChevronUpIcon className="h-8" />
        )}
      </button>
      {isOpen && (
        <ul className="bg-secondary-gray-300 absolute flex flex-col top-20 rounded-lg p-2 items-start">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between hover:bg-primary-gray cursor-pointer rounded-r-lg border-l-transparent p-4 hover:border-l-white border-l-4">
              <a href={item.link} className="font-bold">
                {" "}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
