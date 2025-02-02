import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { motion } from "framer-motion";
import Chat from "./Chat";

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      emoji
      capital
      currency
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`;

const CountryList = () => {
  const [showChat, setShowChat] = useState(false);
  const handleToggleChat = () => {
    setShowChat((prev) => !prev);
  };

  const { loading, error, data } = useQuery(GET_COUNTRIES);
  const [selectedContinent, setSelectedContinent] = useState("ALL");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500">Error: {error.message}</p>;

  const uniqueContinents = [
    "ALL",
    ...new Set(data.countries.map((c) => c.continent.name)),
  ];

  const filteredCountries =
    selectedContinent === "ALL"
      ? data.countries
      : data.countries.filter((c) => c.continent.name === selectedContinent);

  const filteredBySearch = filteredCountries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-primary flex flex-col items-center py-10 px-4">
      <div className="mb-8 flex flex-col sm:flex-row flex-wrap justify-between items-center gap-4 bg-whiteblue p-3 rounded-lg shadow-md w-full max-w-6xl">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 w-full sm:w-auto">
          {uniqueContinents.map((continent) => (
            <button
              key={continent}
              onClick={() => setSelectedContinent(continent)}
              className={`px-4 py-2 text-sm sm:text-lg font-semibold rounded-lg transition ${
                selectedContinent === continent
                  ? "bg-whiteblue2 text-gray-900 shadow-md"
                  : "bg-white text-gray-900 hover:bg-whiteblue2"
              }`}
            >
              {continent}
            </button>
          ))}
        </div>

        <div className="w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search country"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full sm:w-[250px] lg:w-[300px] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none placeholder:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filteredBySearch.map((country, index) => (
          <motion.div
            key={country.code}
            className="bg-whiteblue shadow-lg rounded-lg p-6 transition transform hover:scale-105 cursor-pointer flex flex-col items-center"
            style={{
              height: "240px",
              width: "250px",
            }}
            onClick={() =>
              setSelectedCountry(
                selectedCountry === country.code ? null : country.code
              )
            }
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <h3 className="text-xl font-bold flex items-center justify-center text-primary">
              {country.emoji} {country.name}
            </h3>
            <p className="text-gray-700 mt-2">
              <strong>Capital:</strong> {country.capital}
            </p>
            <p className="text-gray-700">
              <strong>Currency:</strong> {country.currency}
            </p>

            {selectedCountry === country.code && (
              <motion.div
                className="mt-4 border-t pt-4 text-gray-600 w-full text-center"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>
                  <strong>Continent:</strong> {country.continent.name}
                </p>
                <p>
                  <strong>Languages:</strong>{" "}
                  {country.languages.map((lang) => lang.name).join(", ")}
                </p>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div
        className="fixed bottom-6 right-6 bg-blue-400 py-3 px-6 rounded-full cursor-pointer shadow-lg z-50 hover:bg-whiteblue2"
        onClick={handleToggleChat}
      >
        Chat AI
      </div>

      {showChat && (
        <div className="fixed bottom-48 right-4 w-80 h-80 sm:w-96 sm:h-96 p-6 ">
          <Chat />
        </div>
      )}
    </div>
  );
};

export default CountryList;
