import { Request, Response, Router } from "express";

const router = Router()

router.all('*', async(req: Request, res: Response) => {
    try {
        
        res.status(404).json({
            message: "No route matches your request"
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: "An error occurred during catch-all error" });
    }
})

export default router