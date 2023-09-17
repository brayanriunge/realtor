import { StaticImageData } from "next/image";
import { JsxElement } from "typescript";

export interface BenefitsType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface BuyType{
  name: string;
  description: string;
  picture:StaticImageData;
}