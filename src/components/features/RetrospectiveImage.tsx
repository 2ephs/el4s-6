import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};
export const RetrospectiveImage = ({ src, alt }: Props) => {
  return <Image src={src} alt={alt} />;
};
