export default function Layout(props : any){
    return (
        <div className="bg-body text-body vw-100">
            {props.children}
        </div>
    )
}