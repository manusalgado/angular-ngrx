export const getBodyFields = ({ name, heroe_type, condition, image_url, cities_id }) => {
  return { name, heroe_type, condition, image_url, cities_id };
}
  
export const validateFields = (body) => {
  const errors = [];
  const requiredMessage = 'field is required.';

  if (!body?.name) {
    errors.push(`Name ${requiredMessage}`)
  }

  if (!body?.heroe_type) {
    errors.push(`Heroe type ${requiredMessage}`)
  }

  if (!body?.condition) {
    errors.push(`Heroe condition ${requiredMessage}`)
  }

  if (!body?.image_url) {
    errors.push(`Heroe image ${requiredMessage}`)
  }

  if (!body?.cities_id) {
    errors.push(`Heroe city ${requiredMessage}`)
  }

  return errors;
}
