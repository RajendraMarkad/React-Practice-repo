import "./styles.css";
import { useState } from "react";

const countries = [
  { name: "INDIA", value: "IN", cities: ["Pune", "Mumbai"] },
  { name: "Rassia", value: "Rss", cities: ["OXFORD", "mexiko"] },
  { name: "ABCD", value: "Abd", cities: ["ACD", "BCD"] }
];
export default function App() {
  let [countryValue, setCountryValue] = useState("");
  return (
    <div className="App">
      <select
        onChange={(e) => {
          setCountryValue(e.currentTarget.value);
        }}
      >
        {countries.map((item, index) => {
          return <option value={index}>{item.name}</option>;
        })}
      </select>
      <select>
        {countryValue !== "" &&
          countries[countryValue].cities.map((item, index) => {
            return <option>{item}</option>;
          })}
      </select>
    </div>
  );
}
