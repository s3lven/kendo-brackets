import { Change, useChangeTrackerStore } from "../stores/change-tracker-store";
import { useBracketStore } from "../stores/bracket-store";
import { useShallow } from "zustand/react/shallow";

export const useBatchUpdates = () => {
    const { getPendingChanges, clearChanges } = useChangeTrackerStore();
    const { bracketCode } = useBracketStore(
        useShallow((state) => ({ bracketCode: state.bracketCode }))
    );

    const sendBatchUpdates = async (updates: Change[]) => {
        try {
            console.log("SENDING UPDATES TO API: ", updates);
            const response = await fetch(
                `http://localhost:5000/api/v1/brackets/${bracketCode}/update-bracket`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(updates)

                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to send batch updates. ${response.statusText}`
                );
            }

            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    const forceSendUpdates = async () => {
        const pendingChanges = getPendingChanges();

        if (pendingChanges.length === 0) return;

        try {
            await sendBatchUpdates(pendingChanges);
            clearChanges();
        } catch (error) {
            console.error("Failed to force send batch updates:", error);
        }
    };

    return { forceSendUpdates };
};
