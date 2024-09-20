import BracketPageContainer from "@/app/features/bracket/bracket-page-container";

type EditBracketPageProps = {
  params: {
    tournament: string;
    bracketCode: string;
  };
};

const EditBracketPage = ({ params }: EditBracketPageProps) => {
  console.log("EditBracketPage rendered");
  return (
    <BracketPageContainer
      tournament={params.tournament}
      bracketCode={params.bracketCode}
    />
  );
};

export default EditBracketPage;
