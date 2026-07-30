import { z } from "zod"
import { requiredString } from "../../shared/validators/fields.js"

export const loginSchema = z.object({
  username: requiredString("Username"),
  password: requiredString("Password"),
})