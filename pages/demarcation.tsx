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
                        <p className="text-2xl font-bold text-primary-gray-500 py-10 my-5">
                        When performing land demarcation, we consider the roads, commercial  space and extra space for public use. We ensure allotment of these spaces is as per the government norms.Based on the approvals from the concerned authorities and clients,layout designed is marked on the respective site.
                        </p>
                    </div>

                </div>

            </section>
        </Layout>
    )
}