'use client'

import { createContext } from "react"

const ContextoCarrinho = createContext<any>(null)
const ContextoLogin = createContext<any>(null)

export function ProvedorCarrinho(props: any){
    return (
        <div>
            <ContextoCarrinho.Provider 
                value={{ 
                    number: 10,
                    name: 'Rodrigo'
                }}>
                {props.children}
            </ContextoCarrinho.Provider>
        </div>
    )
}

export default ContextoCarrinho