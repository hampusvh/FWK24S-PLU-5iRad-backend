import jwt from "jsonwebtoken";

export function auth(req, res, next) {
    const authHeader = req.headers.authorization || "";
    const [scheme, token] = authHeader.split(" ");

    if (scheme !== "Bearer" || !token) {
        return res.status(401).json({ message: "Invalid Authorization header" });
    }

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: payload.id, username: payload.username };
        return next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}
