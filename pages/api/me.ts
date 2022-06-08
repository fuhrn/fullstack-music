import { validateRoute } from "../../lib/auth";
import prisma from '../../lib/prisma'

// validateRoute valida que el usuario tenga un token valido y si es asi,
// devuelve user
export default validateRoute(async (req, res, user) => {
  // console.log('user_me: ', user)
  const playlistsCount = await prisma.playlist.count({
    where: {
      userId: user.id
    }
  })

  // console.log("playlists: ",playlistsCount)
  res.json({ ...user, playlistsCount });
})