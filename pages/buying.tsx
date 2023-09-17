import Layout from "@/components/Layout"
import Image from "next/image"
import Farm from "@/public/land.jpeg"
import Cost from "@/public/Cost.jpeg"
import { BuyType } from "@/shared/types"
import Land from "@/components/Lands"


const lands:Array<BuyType>=[
    {
        name: "40 by 80",
        description: "located near Rumuruti town opposite  Kenya power substation",
        picture: Cost,
    },
    {
        name: "40 by 80",
        description: "located near Rumuruti town opposite  Kenya power substation",
        picture:  Cost,
    },
    {
        name: "40 by 80",
        description: "located near Rumuruti town opposite  Kenya power substation",
        picture: Cost,
    },
    {
        name: "40 by 80",
        description: "located near Rumuruti town opposite  Kenya power substation",
        picture: Cost,
    },
    {
        name: "40 by 80",
        description: "located near Rumuruti town opposite  Kenya power substation",
        picture: Cost,
    },
]

export default function buying(){
    return(
        <Layout>
            <section className="mx-auto min-h-full w-5/6 py-20 mt-10 ">
            <div className="flex items-center gap-8 justify-center">
                    <h1 className="text-3xl mt-5  mb-10 "  style={{ fontFamily: "Bungee Spice, cursive" }}>Buying Land and Selling</h1>
                </div>
                <div className="md:flex gap-8 justify-between mt-5 item-center">
                  <Image src={Farm} alt="cost" height={580} className="shadow rounded-lg"/>
                    <div>
                        <p className="my-5 text-2xl py-10 text-primary-gray-500 font-bold">
                        As Goldmark Realtors, we buy and sell land at affordable prices.
                         Our properties are valued added whereby we ensure that there is internal access roads,
                          water/boreholes and electricity installed or being installed making your property ready for immediate development.
                         We do all the paper work to acquire your title deed of your property.
                        </p>
                    </div>
                </div>
                {/**land images */}
                <div className="mt-10 h-[353px] overflow-y-hidden overflow-x-auto w-full">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {lands.map((land: BuyType)=>(
                            <Land
                            key={land.name}
                            name={land.name}
                            picture={land.picture}
                            description={land.description}
                            />
                        ))}
                    </ul>

                </div>
            </section>
        </Layout>
    )
}