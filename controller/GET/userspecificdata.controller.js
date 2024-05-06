import data from "../../data/data.js"

export function getUserSpecificData(req, res) {
    const username = req.params.name
    try {
        const specific = data.filter((item) => item.userdata.userName == username)
        if (specific.length == 0) throw new Error("User Not Found!")
        res.status(200).json({ User: username, Contents: specific })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}