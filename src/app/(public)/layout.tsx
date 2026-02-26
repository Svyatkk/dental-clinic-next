'use client'
import styles from './layout.module.css'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useState } from 'react';
import React from "react"

type Props = {
    children: React.ReactNode
}

export default function LayoutPublic({ children }: Props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return (


        <>


            <div className="subContainerBackground">

                <Sidebar isActive={isSidebarOpen} close={closeSidebar} />

                <Header toggleSidebar={toggleSidebar} />

                {children}

                <Footer />

            </div>

        </>
    )
}