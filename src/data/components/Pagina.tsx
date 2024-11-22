export interface PaginaProps{
    children: React.ReactNode;
    title?: string;
}
export default function Pagina( props  : PaginaProps ){
    return(
        <div className="w-screen h-screen bg-black">
            {props.children}
        </div>
    )
}