const users = [];

const User = {
  findOne: jest.fn((query) => {
    return users.find((user) => user.email === query.email);
  }),
  create: jest.fn((user) => {
    users.push(user);
    return user;
  }),
};

module.exports = User;
