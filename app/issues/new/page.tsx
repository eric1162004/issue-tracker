import dynamic from "next/dynamic";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";

/*
The react-simplemde-editor is a client component. Below we use Next.js's dynamic import 
to ensure that the component is not included on the server side (SSR: Server Side Rendering) 
but only on the client side.
*/
const IssueForm = dynamic(() => import("@/app/issues/_components/issueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssuePage = () => {
  return <IssueForm />;
};

export default NewIssuePage;
