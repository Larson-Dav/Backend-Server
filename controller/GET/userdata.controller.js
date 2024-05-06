import data from "../../data/data.js"

export function getUserData(req, res) {
    const name = req.params.name
    try {
        const user = data.find(item => item.userdata.userName == name)
        if (!user) throw new Error(`No User with the name : ${name}`)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}