import brand from "@/public/icon-brand-recognition.svg";
import detailed from "@/public/icon-detailed-records.svg";
import fully from "@/public/icon-fully-customizable.svg";
import Image from "next/image";

const Statistics = () => {
  const data = [
    {
      id: 5,
      logo: brand,
      title: "Brand Recognition",
      info: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 20,
      logo: detailed,
      title: "Detailed Records",
      info: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      id: 30,
      logo: fully,
      title: "Fully Customizable",
      info: "  Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];
  return (
    <div className="relative mx-auto mt-10 max-w-screen-xl md:flex ">
      {data.map((item, i) => (
        <div key={item.id} style={{ marginTop: `${i * 50}px` }}>
          <div className="relative  m-4 rounded-lg bg-white p-8">
            <div className="absolute -top-10 left-9 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary-2)] ">
              <Image className="" src={item.logo} alt="Logo" />
            </div>
            <h3 className="mt-14 text-xl font-bold text-black">{item.title}</h3>
            <p className="mt-5">{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Statistics;
