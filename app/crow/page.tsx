import SignInCard from "@/components/SignInCard"
import { CrowList } from "@/components/crows/CrowList"
import { auth } from "@clerk/nextjs"
import prisma from "../utils/prisma"
import { NewCrowModal } from "@/components/crows/newCrowModal"
import CrowView from "@/components/crows/CrowView"

  
export default async function IndexPage() {

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
      await prisma.crow.create({
      data: {
        title: title,
        userId: userId
      }
    })
    crows = await refetch()
    return crows
  }


    return (
      <section>
        <NewCrowModal post={createCrow} />
        {
          crows ? (
            // create a grid for
            <CrowView crows={crows} />
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