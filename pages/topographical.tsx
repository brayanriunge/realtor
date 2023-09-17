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
                        <p className="text-2xl font-bold py-10 text-primary-gray-500 my-5">
                        During topographical survey, we depict all natural features and elevations of your property.
                         Typically, a topographical survey would be required during new construction, 
                         remodelling projects, road or bridge construction and grading projects.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}