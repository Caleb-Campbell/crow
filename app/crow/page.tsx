import SignInCard from "@/components/SignInCard"
import { CrowList } from "@/components/crows/CrowList"
import { SignOutButton, auth } from "@clerk/nextjs"
import prisma from "../utils/prisma"
import { NewCrowModal } from "@/components/crows/newCrowModal"
import CrowView from "@/components/crows/CrowView"
import { Button } from "@/components/ui/button"

  
export default async function IndexPage() {

  const presets = {
    preflights: [
      {
        question: "Who requested this feature?",
        answer: ""
      },
      {
        question: "Does a similar feature exist in the codebase?",
        answer: ""
      },
      {
        question: "What parts of the code will this feature affect?",
        answer: ""
      },
      {
        question: "What will indicate that this feature is complete?",
        answer: ""
      },
    ],
    pullRequests: [
      {
        title: "Resolved any merge conflicts",
      },
      {
        title: "Ran linter",
      },
      {
        title: "Added Reviewers",
      },
      {
        title: "Checked all tabbing, spacing, and formatting",
      },
      {
        title: "Final QA",
      },

    ]
    
  }

  const { userId } = auth()

  if (userId) {

    const refetch = async () => {
      "use server"
      return await prisma.crow.findMany({
        where: {
          userId: userId
        }
      })
  }

    let crows = await refetch()

    const createCrow = async (title: string) => {
      "use server"
      const crow = await prisma.crow.create({
      data: {
        title: title,
        userId: userId,
      }
    })

    await prisma.crow.update({
      where: {
        id: crow.id
      },
      data: {
        Preflight: {
          createMany: {
            data: presets.preflights
          }
        },
        PRStep: {
          createMany: {
            data: presets.pullRequests
          }
        },
      }
    })
    
  }

  const done = async (id: string) => {
    "use server"
    return await prisma.crow.update({
      where: {
        id: id
      },
      data: {
        isOpen: false
      }
    })
  }


    return (
      <section>
        <SignOutButton>
          <Button className="fixed right-3 mt-3" variant="outline">Sign Out</Button>
        </SignOutButton>
        <NewCrowModal post={createCrow} />
        {
          crows ? (
            <CrowView done={done} crows={crows} />
          ):(
            <h1>No Crows To Show</h1>
          )
        }
      </section>
    )
  }

  return (
    <section>
      <p>Please sign in</p>
      <SignInCard />
    </section>
  )


}