interface propsHeaderForm{
    title: String
}
export default function HeaderForm(props: propsHeaderForm){
    return(
        <div className="font-sans">
            <h1 className="text-6xl font-bold mb-4">{props.title}</h1>
            <p className="text-gray-500 mb-4">Enter your information</p>
        </div>
    )
}