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
                    <p className="my-5 text-2xl text-justify py-10 text-primary-gray-500 font-bold">
                    Title processing is a critical facet, involving the legal transfer 
                    of property ownership. This process entails the verification and authentication of 
                    land titles and ownership documents, along with thorough searches to ensure no encumbrances 
                    or disputes are associated with the property. I am responsible for preparing and submitting 
                    the necessary documentation for seamless title transfer, such as deeds and transfer forms, 
                    and facilitating the registration of the new owner's details with the relevant land registry.
                    </p>
                   
                </div>

                </div>

            </section>
        </Layout>
    )
}