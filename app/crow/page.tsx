import { Button } from "@/components/ui/button";
import prisma from "../utils/prisma";
import { useEffect, useState } from "react";
import { NewCrowModal } from "@/components/crows/newCrowModal";
import { SignOutButton, SignUpButton, auth } from "@clerk/nextjs";
import { SignIn, SignUp } from "@clerk/clerk-react";
import SignInCard from "@/components/SignInCard";
import { Divide } from "lucide-react";
import { CrowList } from "@/components/crows/CrowList";
import SignUpCard from "@/components/SignUpCard";
  
export default async function IndexPage() {

    const userEmail = 'calebcampbellcrm@gmail.com'

    const { userId, getToken } = auth()
    console.log(userId, getToken)

    const fetchCrows = async ({ userEmail }: {userEmail: string}) => {
        "use server"
        return await prisma.crow.findMany({

        })
    }

    const createCrow = async (title: string) => {
        "use server"
       prisma.crow.create({
            data: {
                title,
                User: {
                    connect: {
                        email: userEmail
                    }
                }
            }
       })
    }

        const user = fetchCrows({ userEmail }) || undefined

        return (
            <section className="h-full w-full">
        {
            user ? (
                <div>
                    <SignOutButton>
                        <Button variant={'outline'} className="absolute right-3 top-20">Sign Out</Button>
                    </SignOutButton>
                    <div className=" mx-auto mt-4 flex w-3/12 justify-center">
                    <NewCrowModal post={createCrow} />
                    </div>
                    {
                        user ? (
                            <CrowList user={user}/>
                            ):(
                                <div>
                                <h1>No Crows To Show</h1>
                            </div>
                        )
                        
                    }
                </div>):(
                    <div>
                    <SignInCard />
                    </div>
                )
            }
    </section>
  )
}