import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../lib/data.js";

export default function VolumeDetail({ volume, nextVolume, previousVolume }) {
  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      <div>
        {previousVolume ? (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        ) : null}
      </div>
      <div>
        {nextVolume ? (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        ) : null}
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);
  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  return {
    props: {
      volume,
      nextVolume: nextVolume || null,
      previousVolume: previousVolume || null,
    },
  };
}
export async function getStaticPaths() {
  const paths = volumes.map((volume) => ({
    params: { slug: volume.slug },
  }));

  return { paths, fallback: false };
}
