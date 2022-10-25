import FaqItem from "./ FaqItem";

const Faq = () => {
  return (
      <div className="faq rounded-xl flex gap-5 flex-col shadow-slate-600 shadow-lg mr-auto ml-auto mt-10 bg-sky-600 w-2/3 max-w-3xl p-5 text-zinc-200">
        <FaqItem
          question={"Are all these images really made by AI?"}
          answer={
            "Yes all of the images on this were generated using Dall.E from OpenAI."
          }
        />
        <FaqItem
          question={"What is the return policy?"}
          answer={"No returns no exceptions you get what you get."}
        />
        <FaqItem
          question={"This is not a real question?"}
          answer={"Fine this is not a real answer then."}
        />
      </div>
  );
};

export default Faq;
