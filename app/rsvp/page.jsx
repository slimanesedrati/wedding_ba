"use client";
import { useState } from "react";
import Image from "next/image";

const page = () => {
  const [formData, setFormData] = useState({
    civilities: [],
    firstName: "",
    lastName: "",
    phone: "",
    events: [],
    numberOfPeople: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      // Handle checkboxes separately
      const updatedValues = checked
        ? [...formData[name], value]
        : formData[name].filter((item) => item !== value);
      setFormData({ ...formData, [name]: updatedValues });
    } else {
      // Handle other input types
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="mb-5 mt-10 flex justify-center items-center">
      <div className="items-center justify-center mx-auto max-w-4xl px-4 space-y-20 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="p-2 space-y-5 flex flex-col justify-center items-center">
          <h2 className="max-w-2xl text-center text-xl uppercase font-bold">
            Nous comptons sur vous pour partager notre bonheur et serons ravis
            de vous compter parmi nous.
          </h2>
          <Image src="/loveuoiseau.png" width={300} height={300} alt="" />
          {/*  */}
          <div className="mt-10 flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-center">
            <form
              onSubmit={handleSubmit}
              className="mx-lg flex flex-col justify-center space-y-8 "
            >
              <div className="">
                <label className="block text-sm font-semibold ">
                  Civilités *
                </label>
                <div className="mt-2 flex items-center space-x-4">
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="civilities"
                      value="Madame"
                      checked={formData.civilities.includes("Madame")}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="bg-white border-2 border-gray-300 w-5 h-5 flex items-center justify-center rounded-md">
                      <svg
                        width={10}
                        height={10}
                        className={`fill-current ${
                          formData.civilities.includes("Madame")
                            ? "text-stone-800"
                            : "text-transparent"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-xs text-stone-700 font-medium">
                      Madame
                    </span>
                  </label>

                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="civilities"
                      value="Monsieur"
                      checked={formData.civilities.includes("Monsieur")}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="bg-white border-2 border-gray-300 w-5 h-5 flex items-center justify-center rounded-md">
                      <svg
                        width={10}
                        height={10}
                        className={`fill-current ${
                          formData.civilities.includes("Monsieur")
                            ? "text-stone-800"
                            : "text-transparent"
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                      </svg>
                    </div>
                    <span className="ml-2 text-xs text-stone-700 font-medium">
                      Monsieur
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5 justify-between">
                <div className="w-full">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold "
                  >
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold 00"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="">
                <label htmlFor="phone" className="block text-sm font-semibold ">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full md:max-w-[50%] border rounded-md"
                  required
                />
              </div>

              <div className="py-4">
                <label className="block text-sm font-semibold mb-2">
                  Événements auxquels vous serez présents *
                </label>
                <div className="flex flex-col space-y-3">
                  {[
                    "A la mairie",
                    "A la soirée",
                    "Shabbat vendredi soir",
                    "Shabbat samedi midi",
                    "Je ne serai pas présent(e)",
                  ].map((event) => (
                    <label
                      key={event}
                      className="inline-flex items-center cursor-pointer"
                    >
                      <input
                        required
                        type="checkbox"
                        name="events"
                        value={event}
                        checked={formData.events.includes(event)}
                        onChange={handleChange}
                        className="hidden"
                      />
                      <div className="bg-white border-2 border-gray-300 w-5 h-5 flex items-center justify-center rounded-md">
                        <svg
                          width={10}
                          height={10}
                          className={`fill-current ${
                            formData.events.includes(event)
                              ? "text-stone-800"
                              : "text-transparent"
                          }`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                        </svg>
                      </div>
                      <span className="ml-2 text-xs text-stone-700 font-medium">
                        {event}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="numberOfPeople"
                  className="block text-sm font-semibold"
                >
                  Nombre de personnes
                </label>
                <input
                  type="number"
                  id="numberOfPeople"
                  name="numberOfPeople"
                  value={formData.numberOfPeople}
                  onChange={handleChange}
                  className="mt-1 p-2 max-w-[50%] border rounded-md "
                  required
                />
              </div>

              <div className="">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold"
                >
                  Message aux mariés
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 p-4 w-full h-24 resize-none border rounded-md"
                />
              </div>

              <button
                type="submit"
                className=" self-center md:self-stretch bg-neutral-800 w-64 text-white font-bold py-2  rounded-md"
              >
                Envoyer
              </button>
            </form>
            <div className="flex flex-col space-y-5">
              <div className="flex flex-col rounded-md text-sm font-medium space-y-2  text-emerald-950 bg-sky-200 max-w-xs p-5">
                <h2 className="text-xl uppercase font-bold tracking-widest">mariage civil</h2>
                <p className>26 Octobre 2023 à 16h</p>
                <p>Mairie du 16ème arrondissement </p>
              </div>
              <div className="flex flex-col rounded-md text-sm font-medium space-y-2  text-emerald-950 bg-sky-200 max-w-xs p-5">
                <h2 className="text-xl uppercase font-bold tracking-widest">LA soirée</h2>
                <p className>26 Octobre 2023 à 16h</p>
                <p>Mairie du 16ème arrondissement </p>
              </div>
              <div className="flex flex-col rounded-md text-sm font-medium space-y-2  text-emerald-950 bg-sky-200 max-w-xs p-5">
                <h2 className="text-xl uppercase font-bold tracking-widest">shabbat</h2>
                <p className>26 Octobre 2023 à 16h</p>
                <p>Mairie du 16ème arrondissement </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default page;
