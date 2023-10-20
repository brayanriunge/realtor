import Layout from "@/components/Layout";
import Image from "next/image";
import Topo from "@/public/topographical.jpeg"

export default function topgraphical(){
    return(
        <Layout>
            <section className="mt-10 py-20 mx-auto min-h-full w-5/6">
            <div className="flex items-center gap-8 justify-center">
                    <h1 className="text-3xl mt-5  mb-10 "  style={{ fontFamily: "Bungee Spice, cursive" }}>Topographical Survey</h1>
                </div>
                <div className="md:flex gap-8 items-center justify-between">
                    <Image src={Topo} alt="cost"  height={580} className="shadow rounded-lg"/>
                    <div>
                        <p className="text-justify ext-2xl font-bold py-10 text-primary-gray-500 my-5">
                        These surveys involve the meticulous mapping of natural and man-made features 
                        of a given piece of land, including contours, elevations, and structures. By 
                        conducting field surveys, I measure and record these features, creating comprehensive 
                        topographical maps and plans. This information is invaluable for site planning, construction, 
                        and engineering projects, contributing to the effective and efficient use of land resources. 
                        Overall, these activities collectively ensure accurate and legally sound land transactions and developments, 
                        playing a pivotal role in the responsible management of land resources.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}