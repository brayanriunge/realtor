import Layout from "@/components/Layout";
import Image from "next/image";
import Demarc from "@/public/plot demarcation.jpeg"

export default function demarcation(){
    return(
        <Layout>
            <section className="mt-10 min-h-full w-5/6 mx-auto py-20">
                <div className="flex items-center gap-8 justify-center">
                    <h1 className="text-3xl mt-5  mb-10 "  style={{ fontFamily: "Bungee Spice, cursive" }}>Plot Demarcation</h1>
                </div>
                <div className="md:flex gap-8 items-center justify-between">
                    <Image src={Demarc} alt="cost" height={560}  className="shadow rounded-lg"/>
                    <div>
                        <p className="text-2xl text-justify font-bold text-primary-gray-500 py-10 my-5">
                        Plot demarcation is a task that requires one to physically mark out the boundaries 
                        of a specific piece of land. Utilizing specialized surveying equipment, I accurately 
                        establish the plot&aposs boundaries and install physical markers like pegs, posts, or fences 
                        to provide a clear definition of the property&aposs limits. Detailed field notes and sketches 
                        are kept to document the demarcation process, ensuring clients have a thorough understanding 
                        of their property boundaries.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}