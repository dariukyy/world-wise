import styles from "./CountriesItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countriesItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
