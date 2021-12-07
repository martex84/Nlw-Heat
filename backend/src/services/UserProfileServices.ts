import prismaClient from "../prisma";

class UserProfileServices {
    async execute(user_id: string) {
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            }
        })

        return user;
    }
}

export { UserProfileServices }