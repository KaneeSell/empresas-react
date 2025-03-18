interface UtilsProps{
    className?: string
}
export function Hr(props: UtilsProps){
    return (
        <p className={`border w-100 ${props.className}`}/>
    )
}