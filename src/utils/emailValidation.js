const isEmailValid = email => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};

module.exports = { isEmailValid };
