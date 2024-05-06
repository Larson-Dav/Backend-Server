import data from "../../data/data.js";

export function postUserData(req, res) {
    try {
        data.push(req.body)
        res.status(200).json({ message: "Data Added Successfully" })
    } catch (error) {
        res.status(500).json({ error: error })
    }
}