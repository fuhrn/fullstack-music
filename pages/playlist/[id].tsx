import GradientLayout from "../../components/gradientLayout";
import SongTable from "../../components/songsTable";
import { validateToken } from "../../lib/auth";
import prisma from "../../lib/prisma";

const getBGColor = (id) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  // console.log(playlist.songs)
  const color = getBGColor(playlist.id);
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subtitle="playlist"
      description={`${playlist.songs.length} songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <SongTable songs={playlist.songs}/>
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user
  try {
     user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        path: "/signin",
      },
    };
  }
 
  const [playlist] = await prisma.playlist.findMany({
    where: {
      // para convertir id de string a number
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: {
      // para que funcione (no que es lo q anda mal), tuve que hacer stringify + JSON.parse
      // pero al hacer JSON.parse() el campo fecha queda como string y no como objeto Date.
      // correjido en formatters
      playlist: JSON.parse(JSON.stringify(playlist)),
    },
  };
};

export default Playlist;
