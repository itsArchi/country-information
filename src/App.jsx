import { useState } from "react";
import CountryList from "./components/CountryList";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-secondary text-gray-800">
      {user ? (
        <div className="text-center">
          <p className="text-xl font-bold mb-4 py-8">Welcome, {user.displayName}!</p>
          <CountryList />
        </div>
      ) : (
        <Login setUser={setUser} />
      )}
    </div>
  );
};

export default App;
