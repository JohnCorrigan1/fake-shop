import TextAnimation from "./TextAnimation";
import Image from "next/image";

const About = () => {
  return (
    <div className="about flex mt-10 justify-between">
      <div className="flex flex-col text-6xl font-bold p-10">
        <div className="flex gap-5 ">
          <TextAnimation text="This" />
          <TextAnimation text="Store" />
          <TextAnimation text="is" />
        </div>
        <div className="flex gap-5">
          <TextAnimation text="Completely" />
          <TextAnimation text="Fake" />
        </div>
      </div>
      <div className="mr-10 shadow-lg shadow-slate-800 p-3 rounded-xl bg-slate-600 justify-center">
        <Image className="" src="/fashionIcon.png" width={500} height={500} />
      </div>
    </div>
  );
};

export default About;
