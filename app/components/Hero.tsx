import heroImage from "@/public/illustration-working.svg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative mx-auto mb-36 flex  max-w-screen-xl flex-col items-center p-5 md:flex-row">
      <Image
        className="-right-40 top-10 -z-10 ml-6 mt-10 md:absolute md:order-2"
        src={heroImage}
        alt="hero image"
      />
      <div className="-z-10 flex h-[50vh] flex-col items-center justify-center gap-4 text-center md:mt-0 md:w-[33%] md:items-start md:text-left">
        <h1 className="block text-[3.4rem]  font-bold leading-[1] text-[var(--neutral-400)]">
          More than just shorter links
        </h1>
        <p>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Link href="#" className="btn w-fit rounded-full p-3">
          Get Started
        </Link>
      </div>
    </section>
  );
};
export default Hero;
