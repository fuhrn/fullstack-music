import GradientLayout from '../components/gradientLayout'

// interesante, typescript me permite renderizar aun cuando no paso todos los props
export default function Home() {
  return (
    <GradientLayout
      color="red"
      subtitle="profile"
      title="Néstor Fuhr"
      description="15 public playlists"
      image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
      roundImage
    ></GradientLayout>
  );
}
