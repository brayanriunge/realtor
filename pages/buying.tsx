import Layout from "@/components/Layout"
import Image from "next/image"
import Farm from "@/public/land.jpeg"
import Cost from "@/public/Cost.jpeg"
import { BuyType } from "@/shared/types"
import Land from "@/components/Lands"
import Farming from "@/public/A farming village in Swaziland by whl_travel.jpeg"
import Cultivate from "@/public/Cultivation on the slopes of Mount Kenya.jpeg"
import Rift from "@/public/Rift Valley.jpeg"
import Tea from "@/public/Tea farms in Kericho.jpeg"
import Masai from "@/public/The Masai Mara in Kenya.jpeg"


const lands:Array<BuyType>=[
    {
        name: "Highlands",
        description: "Seize this extraordinary opportunity to own a parcel in one of Kenya's most enchanting highland regions. Whether you seek a tranquil retreat, an agricultural venture, or a unique investment, this property promises a life elevated in every way.",
        picture:Farming,
    },
    {
        name: "Mount Kenya slopes",
        description: "Don't miss out on this rare chance to own a slice of the Mountain Kenya slopes. Whether you're seeking an investment, a retreat, or a canvas for your dream home, this parcel offers boundless potential. Act swiftly.",
        picture:  Cultivate,
    },
    {
        name: "Rift Valley",
        description: "Escape to the enchanting beauty of the Rift Valley with this extraordinary opportunity to own a prime parcel of land. Nestled in the heart of Kenya's scenic wonders, this is your chance to build the life you've always imagined.",
        picture: Rift,
    },
    {
        name: "Secure Your Slice of Tea Paradise Today!",
        description: "Don't let this rare opportunity to own a parcel with thriving tea plantations pass you by. Whether you're a tea enthusiast, an investor, or a nature lover, this property promises a unique blend of natural beauty and sustainable living",
        picture: Tea,
    },
    {
        name: "Laikipia",
        description: "This is a rare chance to own a parcel in one of Kenya's most enchanting regions. Whether you're drawn by the allure of wildlife, the call of adventure, or the promise of a unique investment, this property offers boundless potential.",
        picture: Masai,
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
                        <p className="my-5 text-2xl text-justify py-10 text-primary-gray-500 font-bold">
                        Engaging in land buying and selling transactions is also within our purview, 
                        which involves providing expert guidance on both the legal and technical aspects 
                        of such transactions. This includes conducting surveys to establish precise 
                        property boundaries, offering informed opinions on property values, and assisting 
                        in negotiations between buyers and sellers.
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