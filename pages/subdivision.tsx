import Image from "next/image"
import Layout from "@/components/Layout"
import Subdivision from "@/public/subdivision.jpeg"
export default function subdivison(){
    return(
        <Layout>
            <section className="w-5/6 mx-auto  mt-5 min-h-full py-20">
               <div className="flex items-center gap-8 justify-center">
                    <h1 className="text-3xl mt-6  mb-10 "  style={{ fontFamily: "Bungee Spice, cursive" }}>Land Subdivision</h1>
                </div>
                <div className="md:flex gap-8 justify-between mt-5 items-center">
                    <Image src={Subdivision} alt="cost" height={540} className="shadow rounded-lg"/>
                    <div>
                        <p className="my-5 text-2xl py-10 text-primary-gray-500 text-justify font-bold">
                        land subdivision, involves the meticulous process of dividing a larger parcel 
                        of land into smaller, individual lots. This necessitates conducting precise surveys 
                        to determine the boundaries of each subdivided lot and preparing detailed subdivision 
                        plans and legal documents outlining the new configurations. Additionally, compliance 
                        with local zoning regulations and subdivision ordinances is essential, requiring coordination 
                        with local authorities for plan approval.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}