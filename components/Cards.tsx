import { BenefitsType } from "@/shared/types";
import { CheckBadgeIcon, EyeIcon, MegaphoneIcon } from "@heroicons/react/24/solid";
import Benefit from "./Benefits";

const benefits: Array<BenefitsType>= [
    {
        icon:  < EyeIcon className="h-6 w-6" />,
        title:"Vision" ,
        description: "Charting Territories, Building Futures: Redefining Land Solutions for a Sustainable Tomorrow",
    },
    {
        icon: <MegaphoneIcon className="h-6 w-6"/>,
        title: "Motto" ,
        description: "Precision in Every Plot, Excellence in Every Inch",
    },
    {
        icon: <CheckBadgeIcon className="h-6 w-6"/> ,
        title: " Main Objective" ,
        description: "Ensuring that every survey conducted is highly accurate, meeting industry standards and client requirements.",
    },
]

export default function Cards() {
  return <div className="mx-auto min-h-full w-5/6 py-20">
    <div className="md:flex items-center  justify-between gap-8">
    {benefits.map((benefit: BenefitsType)=>(
        <Benefit
        key={benefit.title}
        icon={benefit.icon}
        title={benefit.title}
        description={benefit.description}
        
        />
    ))}
  </div>
  </div>;
}
