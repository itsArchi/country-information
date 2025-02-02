# Country Info Application

This is a single-page application (SPA) built using React, TailwindCSS, GraphQL, and Apollo Client. The app provides detailed information about countries around the world, including their capitals, currencies, languages, and continents. Users can filter countries by continent, search for specific countries, and interact with an AI Assistant to ask questions related to the countries.

## Project Overview

The application allows users to view a list of countries along with basic information such as:
- Country Name
- Emoji Flag
- Capital
- Currency

Users can click on a country to reveal more details, such as:
- Continent
- Languages spoken

The application also integrates an AI Assistant powered by NVIDIA NIM API, allowing users to ask questions about countries, get travel recommendations, translate country information, and interact with a chat interface.

## Setup Instructions

To run the project locally, follow the steps below:

1. **Clone the repository:**
    ```git clone https://github.com/your-username/country-info-app.git```

2. **Install dependencies:**
    Navigate to the project folder and run:

    ```npm i```

3. **Start the application:**
    Run the development server:
    ```npm start```
    and 
    ```npm run dev```

## Available Features

- **Country List:** Displays a list of countries with essential information such as capital, currency, and languages spoken.
- **Continent Filtering:** Users can filter countries by continent (e.g., Asia, Europe, Oceania).
- **Search Functionality:** Users can search for countries by name, filtering the country list dynamically.
- **Country Details:** Clicking on a country card reveals additional details like continent and languages spoken.
- **AI Assistant:** An AI-powered assistant that can answer questions about countries, provide travel recommendations, and translate information.
- **Responsive Design:** The app is fully responsive and works on mobile, tablet, and desktop devices.

## Technical Decisions and Architecture

### Frontend

- **React:** The app is built using React, leveraging React hooks (useState, useQuery, etc.) for managing state and interacting with the GraphQL API.
- **TailwindCSS:** TailwindCSS is used for styling, enabling a utility-first approach to creating responsive and customizable UI components.
- **Apollo Client:** Used for interacting with the GraphQL API, fetching country data, and managing the client-side cache.
- **Framer Motion:** For smooth animations and transitions in UI elements like country cards and dropdowns.
- **NVIDIA NIM API:** Integrated to provide AI-powered features like chat, travel recommendations, and translations.

### Data Fetching

- **GraphQL:** Data is fetched from a GraphQL endpoint using Apollo Client. The GET_COUNTRIES query retrieves the list of countries with their details.
- **Caching:** Apollo Client handles caching, optimizing data fetching and reducing unnecessary network requests.

### Authentication

- **OAuth 2.0 (Future Integration):** The app will support authentication via Google or GitHub OAuth, allowing users to log in and personalize their experience (future feature).

## Future Improvements

- **Search Bar:** Implement a search bar that allows users to filter countries by name.
