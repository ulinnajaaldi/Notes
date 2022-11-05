const showFormattedDate = (date, language) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(language, options);
};

export { showFormattedDate };
