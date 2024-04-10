import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import Link from "next/link";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  const router = useRouter();

  const handleRandomVolume = () => {
    const randomVolume = getRandomElement(volumes);

    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <div>
      <h1>All Volumes</h1>
      <button onClick={handleRandomVolume}>Random Volume</button>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
