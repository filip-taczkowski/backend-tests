module.exports = (fullName) => {
  if (typeof fullName !== 'string' || !fullName) return 'Error';
  if (fullName.split(' ').length !== 2) return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return false;
  return firstName.substr(0, 1).toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName.substr(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
};
