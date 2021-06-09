const getConfig = (key) => {
  return process.env[key];
}

export default getConfig;