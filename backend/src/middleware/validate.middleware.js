import { ZodError } from "zod";
import { error } from "../shared/utils/response.js";

export function validate(schema, source = "body") {
  return async (req, res, next) => {
    try {
      const validatedData = await schema.parseAsync(req[source]);

      if (source === "body") {
        req.validated = validatedData;
      } else if (source === "params") {
        req.validatedParams = validatedData;
      } else if (source === "query") {
        req.validatedQuery = validatedData;
      }

      next();
    } catch (err) {
      if (err instanceof ZodError) {
        const errors = {};

        err.issues.forEach((issue) => {
          const field = issue.path.join(".") || source;
          errors[field] = issue.message;
        });

        return error(
          res,
          "Validation failed.",
          400,
          errors
        );
      }

      next(err);
    }
  };
}