import { getConnection } from "../database/database";
import { SELECT_CITIES, SELECT_COUNTRIES, SELECT_POWERS } from "../queries";

export const findAllCities = async (req, res) => {
  try {
    const db = await getConnection();
    const data = await db.query(SELECT_CITIES);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findAllCountries = async (req, res) => {
  try {
    const db = await getConnection();
    const data = await db.query(SELECT_COUNTRIES);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findAllPowers = async (req, res) => {
  try {
    const db = await getConnection();
    const data = await db.query(SELECT_POWERS);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};
