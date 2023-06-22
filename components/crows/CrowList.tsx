"use client"

import { Prisma } from "@prisma/client"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card"
import { CalendarDays } from "lucide-react"
import { Button } from "../ui/button"

export const CrowList = ({crows, showCrow}:{crows:any, showCrow: any}) => {

    return (
        <div>{
            crows ? (
                // create a grid for each element
                <div className="flex justify-around items-around" >
            {
                crows.map((crow: any) => {
                    return (
                        <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button onClick={()=>{showCrow(crow)}} variant="link">{crow.title}</Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="flex justify-between space-x-4">
                            click to view this issue
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    )
                })
            }
                </div>
            ):(
                <h1>No Crows To Show</h1>
            )}
        </div>
    )
}