import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    await prisma.news.create({
        data: {
            title: "Welcome to SkyKidHero CMS",
            body: "This is the first news item stored inside PostgreSQL.",
            published: true
        }
    });

}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    });