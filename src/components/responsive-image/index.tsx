import React from "react";
import Image from "next/image"; // Ensure this matches your setup

const ASPECT_RATIOS = {
  widescreen: 16 / 9,
  standard: 4 / 3,
  square: 1,
  classicPhotography: 3 / 2,
  ultraWidescreen: 21 / 9,
  portrait: 9 / 16,
  nearSquare: 5 / 4,
  classicPrint: 2 / 3,
  widescreen1610: 16 / 10,
  cinematic: 2.35 / 1,
} as const;

type AspectRatioName = keyof typeof ASPECT_RATIOS;

interface ResponsiveImageProps {
  src: string;
  alt: string;
  aspectRatioName?: AspectRatioName;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  aspectRatioName = "widescreen",
}) => {
  const aspectRatio = ASPECT_RATIOS[aspectRatioName];

  if (!aspectRatio) {
    console.error(`Invalid aspect ratio name: ${aspectRatioName}`);
    return null;
  }

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "0",
        paddingBottom: `${(1 / aspectRatio) * 100}%`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ResponsiveImage;
