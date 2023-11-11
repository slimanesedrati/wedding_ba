import Footer from "../components/Footer";

const page = () => {
  return (
    <section className="">
      <div className="mb-10 bg-sky-100">
        <div className="items-center justify-center mx-auto max-w-4xl px-4 space-y-20 sm:px-6 xl:max-w-5xl xl:px-0">
          <div className="py-10 flex flex-col justify-center items-center space-y-10">
            <h3 className="text-2xl font-semibold">HÔTELS</h3>
            <div className="space-y-2 text-center max-w-md">
              <h5 className=" font-semibold text-lg">Hotel David Intercontinental TLV</h5>
              <p className=" text-gray-500">Contact : Océane +972 53-7088107</p>
            </div>
            <div className="space-y-2 text-center max-w-lg">
              <h5 className="font-semibold text-lg">Hôtel Dan Panorama</h5>
              <p className=" text-gray-500">A réserver directement sur <a className=" underline" href="https://www.booking.com/hotel/il/dan-panorama-tel-aviv.fr.html">Hôtel Dan Panorama</a></p>
            </div>
            <div className="space-y-2 text-center max-w-lg">
              <h5 className="font-semibold text-lg">Hôtel Brown Brut  </h5>
              <p className=" text-gray-500">A réserver directement sur <a className="underline" href="https://brownhotels.com/brutrooms">Brown Brut </a></p>
            </div>
            <div className="space-y-2 text-center max-w-lg">
              <h5 className="font-semibold text-lg">Abratel Suites Hôtel </h5>
              <p className=" text-gray-500">A réserver directement sur <a className="underline" href="https://www.booking.com/hotel/il/abratel-suites.fr.html">abratel suites</a></p>
            </div>
            <div className="space-y-2 text-center max-w-lg">
              <h5 className="font-semibold text-2xl">TRANSPORT</h5>
              <p className=" text-gray-500">Les prix des billets d avions sont actuellement attractifs, reservez sans tarder !</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
