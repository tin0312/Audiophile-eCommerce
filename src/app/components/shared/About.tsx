import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="about-container my-52 flex">
        <div className = "flex w-4/5 mx-auto justify-between">
        {/* Info Container */}
        <div className="flex gap-6 w-1/2 flex-col justify-center">
          <h3 className="w-2/3 tracking-[0.2em] text-2xl font-bold uppercase">
            Bringing you the <span className="text-primary-500">best</span>audio gear
          </h3>
          <p className="opacity-50 w-5/6 leading-6">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        {/* Image Container */}
        <div className = "w-1/2">
          <Image alt="A person with headphones one"
           src="/assets/images/components/About/desktop/image-best-gear.jpg"
           width={500}
           height={500}
           className="w-full"
           />

        </div>

        </div>
      </div>
    </>
  );
}
