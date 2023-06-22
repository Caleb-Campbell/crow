"use client"

import { Prisma } from "@prisma/client"

export const CrowList = ({user}:{user:any}) => {

    


    return (
        <div>{
            user.Crow ? (
                <div>
            {
                user.Crow.map((crow: any) => {
                    return (
                        <div key={crow.id}>
                            <h1>{crow.title}</h1>
                        </div>
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