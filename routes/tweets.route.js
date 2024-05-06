import { Router } from "express";
import { getAllData } from "../controller/GET/data.conroller.js";
import { postUserData } from "../controller/POST/postuserdata.controller.js";

const tweetsRoute = Router()

tweetsRoute.get('/', getAllData)


export default tweetsRoute