import currentUser from "../../data/currentuser.js"

export function getUserData(req, res) {
    try {
        res.status(200).json(currentUser)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}