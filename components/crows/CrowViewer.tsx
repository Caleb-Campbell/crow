import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "../ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card"
import { Input } from "../ui/input"

export const CrowViewer =(crow: any) => {
    return (
        <Tabs defaultValue="account" className="w-[800px] z-30">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="preflight">Preflight</TabsTrigger>
        <TabsTrigger value="steps">Steps</TabsTrigger>
        <TabsTrigger value="pr">Pull Request</TabsTrigger>
      </TabsList>
      <TabsContent value="preflight">
        <Card>
          <CardContent className="p-5 py-10">
            <label className="p-3 mb-4">Who is requesting this feature?</label>
            <Input className="w-full mt-3 text-foreground" />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="steps">
        <Card>
          
        </Card>
      </TabsContent>
      <TabsContent value="pr">
        <Card>
          
        </Card>
      </TabsContent>
    </Tabs>
    )
}