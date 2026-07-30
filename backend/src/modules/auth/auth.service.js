import  bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"

import {findByUsername, getCurrentUser} from "./auth.repository.js"
import AppError from './../../shared/utils/AppError.js';

export async function login(username, password) {
  const user = await findByUsername(username)

  if (!user) {
    throw new AppError("Invalid username or password", 401)
  }

  const validPassword = await bcrypt.compare(password, user.password)

  if (!validPassword) {
    throw new AppError("Invalid username or password", 401)
  }

  const token = jwt.sign(
    {
      id: user.id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  )

  return {
    token,
    user: {
      id: user.id,
      username: user.username,
      role: user.role,
    }
  }
}

export async function me(userId) {
  return await getCurrentUser(userId)
}