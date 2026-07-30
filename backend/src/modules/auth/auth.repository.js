import prisma from "../../config/prisma.js"

export async function findByUsername(username) {
  return prisma.user.findUnique({
    where: {
      username,
    },
  })
}

export async function findById(id) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
    }
  })
}

export async function getCurrentUser(id) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  })  
}

