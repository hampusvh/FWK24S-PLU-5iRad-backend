export function register(req, res) {

    try {
        const { username, password } = req.body || {};

        if (!username || !password) {
            return res.status(400).json({ message: "Username & password required" });
        }

        return res.status(201).json({
            message: "Registration successful!",
        });
    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}

export function login(req, res) {

    try {
        const { username, password } = req.body || {};

        if (!username || !password) {
            return res.status(400).json({
                message: "Username & password required",
            });
        }

        const isAuthorized = username === "test" && password === "test";

        if (!isAuthorized) {
            return res.status(401).json({
                message: "Invalid credentials",
            });
        }

        return res.status(200).json({
            message: "Login successful!",
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}