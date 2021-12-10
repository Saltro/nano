const filterNumber = (value: string) => {
  return value.replace(/[^\d]/g, '');
};

export default { filterNumber };
