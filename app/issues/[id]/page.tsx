import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import DeleteIssueButton from "./edit/DeleteIssueButton";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  }); // Note: this throws an error if the user pass a string as issue.id

  if (!issue) notFound();

  return (
    // Breakpoint naming convention inconsistency:
    //  - Laptop: Radix uses 'md', Tailwind uses 'lg'
    //  - Tablet: Radix uses 'sm', Tailwind uses 'md'
    <Grid columns={{ initial: "1", sm: "5" }} gap={"5"}>
      <Box className="md:col-span-4"> 
        <IssueDetails issue={issue} />
      </Box>
      <Box>
        <Flex direction={"column"} gap={'4'}>
          <EditIssueButton issueId={issue.id} />
          <DeleteIssueButton issueId={issue.id} />
        </Flex>
      </Box>
    </Grid>
  );
};

export default IssueDetailPage;
