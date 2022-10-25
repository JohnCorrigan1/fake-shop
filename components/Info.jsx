const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl text-slate-600 font-bold">Need some help?</h1>
      <div className="mt-10">
        <div className="flex gap-5 items-center">
          <h2 className="text-xl font-bold">Support Line:</h2>
          <p>111-222-3333</p>
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="text-xl font-bold">Support Email:</h2>
          <p>fakesore.support@email.com</p>
        </div>
        <div className="flex gap-5 items-center">
          <h2 className="text-xl font-bold">HQ Address:</h2>
          <p>123 Main St. New York City, Ny</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
