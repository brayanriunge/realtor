import Image, { StaticImageData } from "next/image";


type Props={
    name: string;
    description: string;
    picture:StaticImageData;
}

export default function Land({name, description, picture}:Props){
    const overlayStyles = `p-5 absolute flex z-30 h-[400px] w-[450px]
    flex-col items-center justify-center whitespace-normal bg-secondary-gray-300 
    text-center text-white opacity-0 transition duration-500 hover:opacity-90`
    return(
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className={overlayStyles}>
                <h1 className="text-2xl">{name}</h1>
                <p className="mt-5">{description}</p>
               
            </div>
            <Image src={picture} alt={`${picture}`} width={450} height={380}/>

        </li>

    )
}