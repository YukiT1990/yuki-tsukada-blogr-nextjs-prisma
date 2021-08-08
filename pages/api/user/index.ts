import prisma from "../../../lib/prisma";

// PUT /api/user
export default async function handle(req, res) {
  const { email, userId } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(userId) },
    data: { email: email },
  });
  res.json(user);
}
