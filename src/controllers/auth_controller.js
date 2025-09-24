import jwt from "jsonwebtoken";

const users = [
    { id: 1, username: "test", password: "test" },
    { id: 2, username: "test2", password: "test2" }
];

export function register(req, res) {

    try {
        const { username, password } = req.body || {};
        if (!username || !password) {
            return res.status(400).json({ message: "Username & password required" });
        }

        const exists = users.find(user => user.username === username);
        if (exists) {
            return res.status(409).json({ message: "Username already exists!" });
        }

        const newUser = { id: users.length + 1, username, password };
        users.push(newUser);

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
            return res.status(400).json({ message: "Username & password required" });
        }

        const find = users.find(user => user.username === username && user.password === password);
        if (!find) {
            return res.status(401).json({ message: "Invalid credentials!" });
        }

        const token = jwt.sign(
            { id: find.id, username: find.username },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        return res.status(200).json({
            message: "Login successful!",
            jwt: token,
        });

    } catch (error) {
        return res.status(500).json({ message: "Server error" });
    }
}