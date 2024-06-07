import { Text } from "@radix-ui/themes";
import Pagination from "./components/Pagination";

export default function Home() {
  return (
    <>
    <Text>hello</Text>
    <Pagination itemCount={100} pageSize={10} currentPage={1}/>
    </>
  )
}
