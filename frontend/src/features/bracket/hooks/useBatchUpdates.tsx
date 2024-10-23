import { useEffect } from 'react'
import { Change, useChangeTrackerStore } from '../stores/change-tracker-store'

// const API_URL = 'http://your-backend-url/api'

const sendBatchUpdates = async (updates: Change[]) => {
  try {
    console.log("SENDING UPDATES TO API: ", updates)
  } catch (error) {
    console.error('Error sending batch updates:', error)
    throw error
  }
}

export const useBatchUpdates = (interval = 5000) => {
  const { getPendingChanges, clearChanges } = useChangeTrackerStore()

  useEffect(() => {
    const sendUpdates = async () => {
      const pendingChanges = getPendingChanges()
      if (pendingChanges.length === 0) return

      try {
        await sendBatchUpdates(pendingChanges)
        clearChanges()
      } catch (error) {
        console.error('Failed to send batch updates:', error)
      }
    }

    const intervalId = setInterval(sendUpdates, interval)

    return () => clearInterval(intervalId)
  }, [getPendingChanges, clearChanges, interval])

  const forceSendUpdates = async () => {
    const pendingChanges = getPendingChanges()
    if (pendingChanges.length === 0) return

    try {
      await sendBatchUpdates(pendingChanges)
      clearChanges()
    } catch (error) {
      console.error('Failed to force send batch updates:', error)
    }
  }

  return { forceSendUpdates }
}