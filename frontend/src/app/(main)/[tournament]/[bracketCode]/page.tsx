import BracketPageContainer from "@/features/bracket/bracket-page-container";
import BracketPanel from "@/features/bracket/bracket-panel";
import BracketView from "@/features/bracket/bracket-view";
import { axiosAPI } from "@/lib/axios";
import { BracketWithTournament } from "@/types/bracket_t";
import { auth } from "@clerk/nextjs/server";
import { AxiosError } from "axios";

type EditBracketPageProps = {
  params: {
    tournament: string;
    bracketCode: string;
  };
};

const getBracketInfo = async (bracketCode: string, token: string | null) => {
  try {
    if (!token) {
      throw new Error("Invalid Token");
    }

    const response = await axiosAPI.get(`/brackets/info/${bracketCode}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data)
    } else {
      console.log(error)
    }
    return {}
  }
};

const EditBracketPage = async ({ params }: EditBracketPageProps) => {
  // Fetch the data on the server, pass it in as props to be used in store
  const { getToken } = auth();
  const token = await getToken();
  const bracket: BracketWithTournament = await getBracketInfo(params.bracketCode, token);

  console.log("EditBracketPage rendered");
  return (
    <BracketPageContainer
      bracket={bracket}
    >
     <BracketPanel />
     <BracketView />
    </BracketPageContainer>
  );
};

export default EditBracketPage;
