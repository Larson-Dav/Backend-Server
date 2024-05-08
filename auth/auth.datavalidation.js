import currentUser from "../data/currentuser.js";
import { errorMessages } from "./auth.error.js";
import { tweetTextValidation } from "./auth.lengthvalidation.js";

export function validateData(req, res, next) {
    const data = req.body
    if (!(data.userdata.userName == currentUser.userName)) res.status(401).json({ message: errorMessages("user") })
    if (!tweetTextValidation(data.userdata.innetText)) res.status(400).json({ message: errorMessages("length") })
    next()
}

