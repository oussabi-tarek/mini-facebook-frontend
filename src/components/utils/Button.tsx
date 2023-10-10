interface propsButton{
    text: String
    textButton : String
    link: String
}
export default function Button(props : propsButton){
    return(
        <div className="flex justify-between items-center w-3/3 cursor-pointer">
            <p>{props.text}</p>
                <a  href="/signup"
                    className="text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center">
                        {props.textButton}
                </a>
        </div>
    )
}