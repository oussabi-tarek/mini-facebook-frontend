interface propsButton {
    textButton : String
}
export default function ButtonSubmitForm(props: propsButton){
    return(
        <button 
            type="submit"
            className="text-white bg-[#333437] hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                {props.textButton}
        </button>
    )
}