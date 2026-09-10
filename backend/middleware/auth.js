import jwt from "jsonwebtoken"

const authUser = (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res
                .status(401)
                .json({ message: "Unauthorized : No Token provided" })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = token_decode.id
        next()
    } catch (error) {
        console.error("JWT ERROR :", error.message)
        return res.status(403).json({ message: "Invalid Token" })
    }
}