"use client"

import { StatelessModal } from "../ui/Modal"
import { CrowList } from "./CrowList"
import { useState } from "react"
import { CrowViewer } from "./CrowViewer"

const CrowView = ({crows, done}:{crows:any, done: (val: string) => void }) => {
    const [ crowToShow, setCrowToShow ] = useState<any | null>(null)
    return (
        <div className="border rounded-lg p-10 w-9/12 mx-auto mt-20 h-full">
        <CrowList done={done} showCrow={setCrowToShow} crows={crows} />
        {
            crowToShow && (
                <StatelessModal open={Boolean(crowToShow)} setOpen={setCrowToShow}>
                    <CrowViewer crow={crowToShow} />
                </StatelessModal>
            )
        }
        </div>
    )
}

export default CrowView