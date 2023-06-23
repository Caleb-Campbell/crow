"use client"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { TrashIcon } from "lucide-react"
import { Button } from "../ui/button"
  
export const CrowList = ({crows, showCrow, done}:{crows:any, showCrow: any, done: (val: string) => void}) => {

    if (crows.length) return (
        <div>
            <Table>
                <TableCaption>Your Crows</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Issue</TableHead>
                    <TableHead className="text-center">Created</TableHead>
                    <TableHead className="text-right mr-4">Delete</TableHead>
                    </TableRow>
                </TableHeader>
                {
                    crows.map((crow:any) => (
                        <TableBody key={crow.id}>
                            <TableRow className="cursor-pointer" onClick={()=>{showCrow(crow)}}>
                            <TableCell className="font-medium uppercase">{crow.id.split('').splice(0,8).join('')}</TableCell>
                            <TableCell>{crow.isOpen ? (<span className="text-green-600">OPEN</span>) : (<span className="text-destructive">CLOSED</span>)}</TableCell>
                            <TableCell className="uppercase">{crow.title}</TableCell>
                            <TableCell className="text-center">{`${crow.createdAt.getMonth()}-${crow.createdAt.getMonth()}-${crow.createdAt.getFullYear()}`}</TableCell>
                            <TableCell onClick={()=>{done(crow.id)}} className="text-right float-right">
                                <Button className="w-12 h-10 m-0 opacity-20 hover:opacity-90 transition-all" variant={'destructive'}>
                                <TrashIcon />
                                </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )
                    )

                }
            </Table>    
        </div>
    )

    return (
        <div className="flex items-center justify-center">
            <h1>No Crows To Show</h1>
        </div>
    )
}