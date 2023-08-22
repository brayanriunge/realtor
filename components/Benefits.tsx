type Props={
    icon: JSX.Element,
    title: string,
    description: string,
}

export default function Benefit({icon, description, title}:Props){
    return(
        <div className="rounded-md mt-6 px-5 text-center border-2 border-secondary-gray-200 py-16 shadow-xl">
            {/**icon */}
            <div className=" mb-4 flex justify-center">
                <div className="rounded-full border-2 border-secondary-gray-200 p-4">
                    {icon}
                </div>
            </div>
            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
        </div>
    )
}