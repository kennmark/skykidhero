import {login, me } from "./auth.service.js"
import {success} from "../../shared/utils/response.js"

export async function loginController(req, res, next) {
  try {
    const {username, password} = req.validated 
    
    const result = await login(username, password)

    return success(
      res,
      result,
      "Login successful."
    )
  } catch(err) {
    next(err)
  }
}

export async function meController(req, res, next) {
  try {
    const user = await me(req.user.id)

    return success(
      res,
      user,
      "Current user retrieved successfully."
    )
  } catch (err) {
    next(err)
  }
}