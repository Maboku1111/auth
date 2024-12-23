import { prisma } from "server/database/dbConfig.js";

export const createUser = async (req, res) => {
    try {
        const users = await prisma.user.create();
        return res.json(users)
    } catch (error) {
        console.error(error);
    }
}

export const getUser = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        return res.json(users)
    } catch (error) {
        console.error(error)
    }
}
