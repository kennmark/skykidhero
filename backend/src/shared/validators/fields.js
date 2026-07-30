import { z } from "zod";

export const requiredString = (field, min = 1) =>
  z.preprocess(
    (value) => value ?? "",
    z.string().trim().min(1, `${field} is required.`)
  );

export const optionalString = () =>
  z.preprocess(
    (value) => value === "" ? undefined : value,
    z.string().trim().optional()
  )

export const optionalBoolean = () =>
  z.boolean().optional()

export const optionalUrl = (field = "URL") =>
  z.preprocess(
    (value) => value === "" ? undefined : value,
    z.string().url(`${field} must be a valid URL.`).optional()
  )