import { getConnection } from "../database/database";
import {
    SELECT_VEHICLES,
    SELECT_VEHICLE,
    INSERT_VEHICLE,
    UPDATE_VEHICLE,
    DELETE_VEHICLE
} from "../queries";

export const validateFields = (body) => {
  const errors = [];
  const requiredMessage = 'field is required.';

  if (!body?.name) {
    errors.push(`Name ${requiredMessage}`)
  }

  if (!body?.vehicle_type) {
    errors.push(`Vehicle type ${requiredMessage}`)
  }

  if (!body?.heroes_id) {
    errors.push(`Heroe ${requiredMessage}`)
  }

  return errors;
}

export const findAllVehicles = async (req, res) => {
  try {
    const db = await getConnection();
    const data = await db.query(SELECT_VEHICLES);

    res.json({ data });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const createVehicle = async (req, res) => {
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
    const { name, vehicle_type, heroes_id } = body
    const result = await db.query(INSERT_VEHICLE, { name, vehicle_type, heroes_id });
    const [data] = await db.query(SELECT_VEHICLE, result.insertId);
    res.json({
      data,
      message: 'Vehicle created succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const updateVehicle = async (req, res) => {
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
    const vehicle = await db.query(SELECT_VEHICLE, id);
    if (vehicle.length <= 0) {
      return res.status(404)
        .json({ error: 'Vehicle not found.' });
    }
    const { name, vehicle_type, heroes_id } = body;
    
    await db.query(UPDATE_VEHICLE, [{ name, vehicle_type, heroes_id }, id]);
    const [data] = await db.query(SELECT_VEHICLE, id);;
    res.json({
      data,
      message: 'Vehicle updated succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};

export const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const db = await getConnection();
    const vehicle = await db.query(SELECT_VEHICLE, id);
    
    if (vehicle.length <= 0) {
      return res.status(404)
        .json({ error: 'Vehicle not found.' });
    }

    await db.query(DELETE_VEHICLE, id);
    res.json({
      message: 'Vehicle removed succesfully.'
    });
  } catch (error) {
    res.status(500)
      .json({ error: error.message });
  }
};
