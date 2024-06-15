"use client"
import { createContext, useState } from "react"

const SidebarContext = createContext()

const SidebarProviders = ({children}) => {
    const [nav, setNav] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
  return (
    <SidebarContext.Provider value={{nav,setNav, scrollPosition, setScrollPosition,windowWidth, setWindowWidth}}>
        {children}
    </SidebarContext.Provider>
  )
}

export  {SidebarContext, SidebarProviders}