"use client";
import { dummyTournamentData } from "@/types/bracket_t";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type NewBracketPageProps = {
  params: {
    tournament: string;
  };
};

const NewBracketPage = ({ params }: NewBracketPageProps) => {
  const [bracketName, setBracketName] = useState("");
  const router = useRouter();
  // const createBracket = useBracketStore((state) => state.createBracket);

  console.log(params)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const newBracketCode = await createBracket(tournamentName);
      // Currently simulating a back-end API call to create a new bracket and return the bracket code
      const searchTerm = params.tournament.replace("%20", " ");
      const newBracketCode = dummyTournamentData.find(
        (tournament) => tournament.tournamentName === searchTerm
      )?.brackets[0].bracketCode;

      router.push(`/${params.tournament}/${newBracketCode}`);
    } catch (error) {
      console.error("Failed to create bracket:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="tournamentName"
          className="block text-sm font-medium text-gray-700"
        >
          Bracket Name
        </label>
        <input
          type="text"
          id="tournamentName"
          value={bracketName}
          onChange={(e) => setBracketName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Create Bracket
      </button>
    </form>
  );
};

export default NewBracketPage;
