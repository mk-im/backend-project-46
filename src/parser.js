const parse = {
  json: JSON.parse,
};

export default (data, extension) => parse[extension](data);