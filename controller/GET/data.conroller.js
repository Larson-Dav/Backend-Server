import data from "../../data/data.js"

export function getAllData(req, res) {
    try {
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({ error: error })
    }
}