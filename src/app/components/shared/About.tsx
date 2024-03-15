import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="about-container my-32">
        <div className="mx-auto flex w-4/5  flex-col-reverse items-center gap-5 md:items-stretch md:gap-10 lg:flex-row  lg:justify-between">
          {/* Info Container */}
          <div className="mx-auto flex flex-col items-center justify-center gap-6 md:px-4  lg:w-1/2 lg:items-start  lg:px-0">
            <h3 className="text-center text-2xl font-bold uppercase tracking-[0.1em] md:text-3xl  lg:w-2/3 lg:text-start lg:text-4xl">
              Bringing you the <span className="text-primary-500">best</span>
              audio gear
            </h3>
            <p className="text-center leading-6 opacity-50 lg:w-5/6 lg:text-start">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          {/* Image Container */}
          <div className=" lg:w-1/2">
            <Image
              alt="A person with headphones one"
              src="/assets/images/components/About/desktop/image-best-gear.jpg"
              width={500}
              height={500}
              className="w-full rounded-xl object-cover md:h-80  lg:h-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
