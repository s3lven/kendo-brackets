import { Request, Response } from 'express';
import { generateTokens, getUserRefreshToken, setTokenCookies, updateUserRefreshToken, verifyRefreshToken } from '../../../utils/tokens';


export const refreshToken = async (req: Request, res: Response) => {
    const refreshToken = req.cookies['refreshToken'];

    if (!refreshToken) {
        return res.status(401).json({ error: 'No refresh token provided' });
    }

    try {
        const user = verifyRefreshToken(refreshToken);
        if (user) {
            const storedRefreshToken = await getUserRefreshToken(user.userId);

            if (storedRefreshToken && 
                storedRefreshToken.refreshToken === refreshToken && 
                new Date(storedRefreshToken.refreshTokenExpiresAt!) > new Date()) {
                
                const newTokens = generateTokens({ userId: user.userId, email: user.email });
                await updateUserRefreshToken(user.userId, newTokens.refreshToken);

                setTokenCookies(res, newTokens);
                console.log(newTokens.refreshToken)

                return res.json({ message: 'Token refreshed successfully' });
            }
        }
        
        throw new Error('Invalid refresh token');
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired refresh token' });
    }
};