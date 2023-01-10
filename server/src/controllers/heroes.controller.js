import { getConnection } from "../database/database";
import { getBodyFields, validateFields } from "../utils";
import {
  SELECT_HEROES,
  SELECT_VEHICLES_BY_HEROE,
  SELECT_POWERS_BY_HEROE,
  SELECT_HERO,
  INSERT_HERO,
  UPDATE_HERO,
  DELETE_HERO,
  INSERT_POWER_BY_HERO,
  DELETE_POWER_BY_HERO,
} from "../queries";

export const findAllHeroes = async (req, res) => {
  try {
    const db = await getConnection();
    let condition = ''
    const { name, cities_id } = req.query;
    if (name) {
      condition += ` AND heroes.name LIKE ${db.escape(`%${name}%`)}`
    }
    if (cities_id) {
      condition += ` AND heroes.cities_id = ${db.escape(cities_id)}`
    }
    const data = await db.query(`${SELECT_HEROES}${condition}`);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findHeroe = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const hero = await db.query(SELECT_HERO, id);
    if (hero.length <= 0) {
      return res.status(404)
        .json({ error: 'Hero not found.' });
    }
    const [data] = hero;
    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findAllVehiclesByHeroe = async (req, res) => {
  try {
    const { id: heroe_id } = req.params;
    const db = await getConnection();
    const data = await db.query(SELECT_VEHICLES_BY_HEROE, heroe_id);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const findAllPowersByHeroe = async (req, res) => {
  try {
    const { id: heroe_id } = req.params;
    const db = await getConnection();
    const data = await db.query(SELECT_POWERS_BY_HEROE, heroe_id);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const createHeroe = async (req, res) => {
  try {
    const body = req.body;
    const validationErrors = validateFields(body);
    
    if (validationErrors.length > 0) {
      return res.status(400)
      .json({
        validationErrors: validationErrors,
        message: 'Some info is missing, please take a look.'
      });
    }

    const db = await getConnection();
    const result = await db.query(INSERT_HERO, getBodyFields(body));
    if (result.insertId && body.powers_ids) {
      body.powers_ids.forEach(async (powers_id) => {
        await db.query(INSERT_POWER_BY_HERO, { heroes_id: result.insertId, powers_id });
      })
    }
    const [data] = await db.query(SELECT_HERO, result.insertId);
    res.json({
      data,
      message: 'Hero created succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const updateHeroe = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const validationErrors = validateFields(body)
    if (validationErrors.length > 0) {
      res.status(400)
        .json({
          validationErrors: validationErrors,
          error: 'Some info is missing, please take a look.'
        });
    }

    const db = await getConnection();
    const hero = await db.query(SELECT_HERO, id);
    if (hero.length <= 0) {
      return res.status(404)
        .json({ error: 'Hero not found.' });
    }

    await db.query(UPDATE_HERO, [getBodyFields(body), id]);
    if (body.powers_ids) {
      await db.query(DELETE_POWER_BY_HERO, id);
      body.powers_ids.forEach(async (powers_id) => {
        await db.query(INSERT_POWER_BY_HERO, { heroes_id: id, powers_id });
      })
    }
    const [data] = await db.query(SELECT_HERO, id);
    res.json({
      data,
      message: 'Hero updated succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const deleteHeroe = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const hero = await db.query(SELECT_HERO, id);
    
    if (hero.length <= 0) {
      return res.status(404)
        .json({ error: 'Hero not found.' });
    }

    await db.query(DELETE_HERO, id);
    res.json({
      message: 'Hero removed succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};
