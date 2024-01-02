// yra cities array ,kuriama yra objektai su country: Lihthuania ir emoji: '' ir t.t.
// mums reikia is cities array padaryti atskira array , kuriama butu vien tik country ir emoji.
// be tos pacios country dubliavimo, jei 2 country yra lithuania, tai viena arraju tik returnina

// const countries = cities.reduce((arr, city) => {
//   if (!arr.map((el) => el.country).includes(city.country))
//     return [...arr, { country: city.country, emoji: city.emoji }];
//   else return arr;
// }, []);

// leaflet tilelayer url :
// url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"

// styles for a popup in lealfet map
// .leaflet-popup .leaflet-popup-content-wrapper {
//   background-color: var(--color-dark--1);
//   color: var(--color-light--2);
//   border-radius: 5px;
//   padding-right: 0.6rem;
// }

// .leaflet-popup .leaflet-popup-content {
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// }

// .leaflet-popup .leaflet-popup-content span:first-child {
//   font-size: 2.5rem;
//   line-height: 1;
// }

// .leaflet-popup .leaflet-popup-tip {
//   background-color: var(--color-dark--1);
// }

// .leaflet-popup-content-wrapper {
//   border-left: 5px solid var(--color-brand--2);
// }

////////////
//creating post requests to the API   adding city to the api
// const res = await fetch(`${BASE_URL}/cities`, {
//   method: "POST",
//   body: JSON.stringify(newCity),
//   headers: { "Content-Type": "application/json" },
// });

///////////////

/// deleting city from the API

// async function deleteCity(id) {
//   dispatch({ type: "loading" });

//   try {
//     await fetch(`${BASE_URL}/cities/${id}`, {
//       method: "DELETE",
//     });
//     dispatch({ type: "city/deleted", payload: id });
//   } catch {
//     dispatch({
//       type: "rejected",
//       payload: "There was an error deleting city...",
//     });
//   }
// }

/////////////////////

//protecting routes, if useris neautentikuotas(tai yra loginas neatitinka jo duomenu) mums reikia apsaugoti routes
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/FakeAuthContext";
// import { useEffect } from "react";

// function ProtectedRoutes({children}) {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(
//     function () {
//       if (!isAuthenticated) navigate("/");
//     },
//     [isAuthenticated, navigate]
//   );

//   return isAuthenticated ? children : null;
// }

// export default ProtectedRoutes;
