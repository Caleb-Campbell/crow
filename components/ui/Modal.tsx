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
            <Button className="mx-auto m-3" onClick={()=>setShowModal(!showModal)} variant={'default'}>{title ? title : "Open Modal"}
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

export const StatelessModal = ({children, title, open, setOpen}:{
    children: React.ReactNode
    title?: string
    open: boolean
    setOpen: any
}) => {
        
            return (
                <>
                {
                    open && (
                        <div className="absolute w-screen h-screen top-0 left-0 flex justify-center items-center">
                            <div className="bg-background bg-opacity-50 w-screen h-screen absolute top-0 right-0" onClick={()=>setOpen(false)} />
                            {children}
                        </div>
                    )
                }
    
                </>
            )
    }