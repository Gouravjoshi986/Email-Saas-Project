import { Button } from "normalhuman/n/components/ui/button";
import { ClerkProvider } from "@clerk/nextjs";
export default async function Home() {
  return (
    <ClerkProvider>
    <h1 className="text-red-600">Hello world</h1>
    <Button>Hello World</Button>
    </ClerkProvider>
  )
}
