import { Router } from "express";



import { getAllData } from "../controller/GET/data.conroller.js";
import { postUserData } from "../controller/POST/postuserdata.controller.js";
import { validateData } from "../auth/auth.datavalidation.js";

const tweetsRoute = Router()

tweetsRoute.get('/', getAllData)
tweetsRoute.post('/', validateData, postUserData)


export default tweetsRoute