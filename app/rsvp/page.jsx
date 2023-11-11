import Image from "next/image";

const page = () => {
   

  return (
    <section className="mb-5 mt-10 flex justify-center items-center">
      <div className="items-center justify-center mx-auto max-w-4xl px-4 space-y-20 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="p-2 space-y-5 flex flex-col justify-center items-center">
          <h2 className="max-w-2xl text-center text-xl uppercase font-bold">
            Nous comptons sur vous pour partager notre bonheur et serons ravis
            de vous compter parmi nous.
          </h2>
          <Image src="/loveuoiseau.png" width={300} height={300}  alt="" />
          {/*  */}
        
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default page;
