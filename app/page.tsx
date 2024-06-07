import { Text } from "@radix-ui/themes";
import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <Text>hello</Text>
      <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)} />
    </>
  );
}
