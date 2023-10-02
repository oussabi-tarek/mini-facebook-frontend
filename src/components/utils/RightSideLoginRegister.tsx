interface propsRightSide{
    paragraph: String
}
export default function RighSideLoginRegister(props: propsRightSide){
    return(
        <div className="flex justify-center items-center h-screen bg-[#333437] text-[white]">
            <div>
                <h1 className="text-5xl font-bold">WELCOME</h1>
                <h2 className="text-6xl">Mini Facebook</h2>
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}