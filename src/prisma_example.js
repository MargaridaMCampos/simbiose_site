const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    await prisma.contacts.create({
        data: {
            name: "Gusti",
            user_type: 2,
            email: "gustavo.t.morais@gmail.com",
            date: new Date()
        }
    });

    const contacts = await prisma.contacts.findMany();
    console.log(contacts);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })