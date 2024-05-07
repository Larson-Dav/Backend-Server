import { Router } from "express";
import { getAllData } from "../controller/GET/data.conroller.js";
import { postUserData } from "../controller/POST/postuserdata.controller.js";
import { getUserSpecificData } from "../controller/GET/userspecificdata.controller.js";

const userSpecificRoute = Router()

userSpecificRoute.get("/:name", getUserSpecificData)

export default userSpecificRoute