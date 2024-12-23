import { prisma } from "server/database/dbConfig";

export const createUser = async () => {
    try {
        const users = await prisma.user.create({
            data: {

            }
        });
        return users
    } catch (error) {
        console.error(error);
    }
}

export const getUser = async () => {
    try {
        const users = await prisma.user.findMany();
        return users
    } catch (error) {
        console.error(error)
    }
}
