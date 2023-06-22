"use client";

import { useState } from "react";
import { Button } from "./button";

export const Modal = ({children, title}:{
    children: React.ReactNode
    title?: string
}) => {
    const [showModal, setShowModal] = useState(false);
    
        return (
            <>
            <Button onClick={()=>setShowModal(!showModal)} variant={'default'}>Create New Crow
            </Button>
            {
                showModal && (
                    <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
                        <div className="bg-slate-800 bg-opacity-20 w-screen h-screen absolute top-0 right-0" onClick={()=>setShowModal(false)} />
                        {children}
                    </div>
                )
            }

            </>
        )
}