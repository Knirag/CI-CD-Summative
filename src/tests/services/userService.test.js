const { register, findUserByEmail } = require("../../services/userService");
const User = require("../../models/User");

jest.mock("../../models/User");

const validUser = { email: "test@example.com", password: "password" };

describe("User Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should register a new user", async () => {
    User.create.mockResolvedValue(validUser);
    const user = await register(validUser);
    expect(user).toEqual(validUser);
    expect(User.create).toHaveBeenCalledWith(
      expect.objectContaining(validUser)
    );
  });

  it("should find a user by email", async () => {
    User.findOne.mockResolvedValue(validUser);
    const user = await findUserByEmail(validUser.email);
    expect(user).toEqual(validUser);
    expect(User.findOne).toHaveBeenCalledWith({ email: validUser.email });
  });
});
