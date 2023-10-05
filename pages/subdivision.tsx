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
                        <p className="my-5 text-2xl py-10 text-primary-gray-500 font-bold">
                        We offer services of land subdivision ,where we have participated in different parts of the country.
                         As Goldmark Realtors, we help our clients in coming up with a plan for subdividing your land and advise you on the
                          possible outcomes. As planners, we will advise you on whether subdividing your land will require some added utilities 
                          such as road for easier access,
                         a common facility for the new residents.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}