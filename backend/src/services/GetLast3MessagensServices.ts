import prismaClient from "../prisma";

class GetLast3MessagensServices {
    async execute() {
        const message = await prismaClient.message.findFirst({
            take: 3,
            orderBy: {
                create_at: "desc"
            },
            include: {
                user: true
            }
        })

        return message;
    }
}

export { GetLast3MessagensServices }