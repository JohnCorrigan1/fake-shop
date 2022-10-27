import Image from "next/image";
import Link from "next/link";

const CategoryCard = (props) => {
  return (
    <div className="items-center flex justify-between mr-auto ml-auto mt-10">
      <div className="rounded-lg bg-slate-100 shadow-lg">
        <div className="flex justify-center shadow-md p-5 rounded-xl">
          <Image src={props.img} height={250} width={250} alt={props.title}/>
        </div>
        <div className="h-24 flex justify-center items-center bg-slate-200">
          <Link href={props.link ?? ""}>
            <button className="p-2 font-bold shadow-sm shadow-black bg-cyan-500 hover:bg-cyan-600 rounded-xl pr-4 pl-4 active:scale-95">
              {props.btnText}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
