import bcrypt from "bcrypt"
import prisma from "../src/config/prisma.js"

async function main() {
  const existing = await prisma.user.findUnique({
    where: {
      username: 'admin'
    },
  })
  
  if (existing) {
    console.log("✅ Admin user already exists.")
    return
  }

  const hashedPassword = await bcrypt.hash("admin123", 10)

  await prisma.user.create({
    data: {
      username: "admin",
      email: "admin@skykidhero.onrender.com",
      password: hashedPassword,
      role: "ADMIN"
    }
  })

  console.log("✅ Admin user created.")
}

main()
.catch((err)=> {
  console.error(err)
  process.exit(1)
})
.finally(async ()=> {
  await prisma.$disconnect()
})