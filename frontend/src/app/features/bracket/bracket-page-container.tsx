"use client";

import { useBracketStore } from "@/app/features/bracket/stores/bracket-store";
import { useSlotStore } from "@/app/features/bracket/stores/slots-store";
import React, { useEffect } from "react";

import BracketPanel from "@/app/features/bracket/bracket-panel";
import BracketView from "@/app/features/bracket/bracket-view";

type BracketContainerProps = {
    tournament: string;
    bracketCode: string;
};

const BracketPageContainer = ({
    tournament,
    bracketCode,
}: BracketContainerProps) => {
    const fetchBracket = useBracketStore((state) => state.fetchBracket);
    const slots = useBracketStore((state) => state.slots);
    const setSlots = useSlotStore((state) => state.setSlots);

    useEffect(() => {
        fetchBracket({ tournament, bracketCode });
        setSlots(slots);
        // console.log(bracket.slots)
    }, [slots, fetchBracket, setSlots, tournament, bracketCode]);

    return (
        <div className="w-full h-full flex gap-5 bg-shade2">
            <BracketPanel />
            <BracketView />
        </div>
    );
};

export default BracketPageContainer;
