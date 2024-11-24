'use client'
import { createContext, useState } from "react"
import { FaCartShopping } from "react-icons/fa6";

interface ContextoCarrinhoProps{
    number: number;
    name?: string;
    increment?:   any
    decrementar?: any
}

const ContextoCarrinho = createContext<ContextoCarrinhoProps>( {} as any)

export function ProvedorCarrinho(props: any){
    const [number, setNumber] = useState(10)

    const handleIncrement = (e: any) => {
        e.preventDefault()

        setNumber( number + 1)
    }
    const handleDescrement = (e: any) => {
        e.preventDefault()
        setNumber( number - 1)
    }

    return (
        <div>
            <ContextoCarrinho.Provider 
                value={{ 
                    number: number,                
                    increment:   handleIncrement,
                    decrementar: handleDescrement
                }}>
                {props.children}
            </ContextoCarrinho.Provider>
        </div>
    )
}

export default ContextoCarrinho