import { createContext, useState } from "react";


export const Searchcontext=createContext()

export default function SearchcontextProvider({children}){
    const [sdata,setSdata]=useState("")
     
    return <Searchcontext.Provider value={{sdata:sdata,setSdata:setSdata}}>
    {children}
    </Searchcontext.Provider>
}