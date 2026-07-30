import "dotenv/config";
import bcrypt from "bcrypt";

import prisma from "../src/config/prisma.js";

function getRequiredEnv(name) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}`
    );
  }

  return value;
}

async function seedAdmin() {
  const username =
    getRequiredEnv("ADMIN_USERNAME");

  const email =
    getRequiredEnv("ADMIN_EMAIL")
      .toLowerCase();

  const password =
    getRequiredEnv("ADMIN_PASSWORD");

  const saltRounds = Number.parseInt(
    process.env.BCRYPT_ROUNDS || "12",
    10
  );

  if (username.length < 3) {
    throw new Error(
      "ADMIN_USERNAME must contain at least 3 characters."
    );
  }

  if (!email.includes("@")) {
    throw new Error(
      "ADMIN_EMAIL must be a valid email address."
    );
  }

  if (password.length < 12) {
    throw new Error(
      "ADMIN_PASSWORD must contain at least 12 characters."
    );
  }

  if (
    !Number.isInteger(saltRounds) ||
    saltRounds < 10 ||
    saltRounds > 15
  ) {
    throw new Error(
      "BCRYPT_ROUNDS must be an integer between 10 and 15."
    );
  }

  const existingByEmail =
    await prisma.user.findUnique({
      where: {
        email,
      },
    });

  const existingByUsername =
    await prisma.user.findUnique({
      where: {
        username,
      },
    });

  if (
    existingByEmail &&
    existingByUsername &&
    existingByEmail.id !==
      existingByUsername.id
  ) {
    throw new Error(
      "The provided username and email belong to different users."
    );
  }

  const existingUser =
    existingByEmail ||
    existingByUsername;

  const hashedPassword =
    await bcrypt.hash(
      password,
      saltRounds
    );

  let admin;

  if (existingUser) {
    admin = await prisma.user.update({
      where: {
        id: existingUser.id,
      },

      data: {
        username,
        email,
        password: hashedPassword,
        role: "ADMIN",
        active: true,
      },

      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        active: true,
      },
    });

    console.log(
      "Production admin updated successfully."
    );
  } else {
    admin = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        role: "ADMIN",
        active: true,
      },

      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        active: true,
      },
    });

    console.log(
      "Production admin created successfully."
    );
  }

  console.log(admin);
}

seedAdmin()
  .catch((error) => {
    console.error(
      "Unable to seed production admin:",
      error.message
    );

    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });