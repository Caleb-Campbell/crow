"use client"

import { StatelessModal } from "../ui/Modal"
import { CrowList } from "./CrowList"
import { useState } from "react"

const CrowView = ({crows}:{crows:any}) => {
    const [ crowToShow, setCrowToShow ] = useState<any | null>(null)
    return (
        <>
        <CrowList showCrow={setCrowToShow} crows={crows} />
        {
            crowToShow && (
                <StatelessModal open={Boolean(crowToShow)} setOpen={setCrowToShow}>
                    <div className="flex flex-col items-center justify-center">
                        <h1>{
                            crowToShow.title ? crowToShow.title : "No Crow To Show"
                            }</h1>
                    </div>
                </StatelessModal>
            )
        }
        </>
    )
}

export default CrowView