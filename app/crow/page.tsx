import { Button } from "@/components/ui/button";
import prisma from "../utils/prisma";
import { useState } from "react";
import { NewCrowModal } from "@/components/crows/newCrowModal";
  
export default async function IndexPage() {

    const user = await prisma.user.findUnique({
        where: {
          email: "calebcampbellcrm@gmail.com",
        },
        include: {
            Crow: true,
        },
        });
        const createNewCrow = async (title: string) => {
            "use server"
            await prisma.crow.create({
                data: {
                    title: title,
                    User: {
                        connect: {
                            email: "calebcampbellcrm@gmail.com",
                        },
                    },
                },
            });

        }

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        {
            user && user ? (
                <div>
                    <NewCrowModal post={createNewCrow} />
                    {
                        user.Crow ? (
                            <div>
                            {
                                user.Crow.map((crow) => {
                                    return (
                                        <div key={crow.id}>
                                            <h1>{crow.title}</h1>
                                        </div>
                                    )
                                })
                                }
                            </div>
                        ):(
                            <div>
                                <h1>No Crows To Show</h1>
                            </div>
                        )

                    }
                </div>):(
                    <div>
                        <h1>Not logged in</h1>
                    </div>
                )
       }
    </section>
  )
}