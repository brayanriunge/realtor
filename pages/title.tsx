import Layout from "@/components/Layout";
import Image from "next/image";
import Title from "@/public/title.jpeg"

export default function title(){
    return(
        <Layout>
            <section className="mt-10 mx-auto min-h-full w-5/6 py-20">
            <div className="flex items-center gap-8 justify-center">
                    <h1 className="text-3xl mt-5  mb-10 "  style={{ fontFamily: "Bungee Spice, cursive" }}>Title Processing</h1>
                </div>
                <div className="md:flex gap-8 item-center justify-between ">
                <Image src={Title} alt="cost" height={580} className="shadow rounded-lg" />
                <div >
                    <p className="my-5 text-2xl py-10 text-primary-gray-500 font-bold">
                    As Goldmark Realtors, we offer services in title processing to our clients. This process may take some time and may require our clients input as it include several procedures which we will guide you all through. We also help our clients in land transfers, obtaining valuation for stamp duty and land registration.
                    </p>
                   
                </div>

                </div>

            </section>
        </Layout>
    )
}