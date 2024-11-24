export interface PaginaProps{
    children: React.ReactNode;
    title?: string;
    className?: any
}
export default function Pagina( props  : PaginaProps ){
    return(
        <div className="">
            {props.children}
        </div>
    )
}