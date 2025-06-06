import Mock from "../mock";

// const JWT_SECRET = 'jwt_secret_key';
// const JWT_VALIDITY = '7 days';

const userList = [
  {
    id: 1,
    role: "ADMIN",
    name: "Safin",
    username: "safin2001",
    email: "safin@gmail.com",
    avatar: "/assets/images/user.jpg",
    company:"Plymouth"
  },
  {
    id: 2,
    role: "USER",
    name: "Ram",
    username: "Ram2001",
    email: "ram@gmail.com",
    avatar: "/assets/images/user2.JPEG",
    company:"Plymouth"
  },
  {
    id: 3,
    role: "ADMIN",
    name: "Neelakrishnan",
    username: "nk01",
    email: "neel@gmail.com",
    avatar: "/assets/images/user3.jpg",
    company:"Nicky"
  },
  {
    id: 4,
    role: "USER",
    name: "Shyam",
    username: "shyam01",
    email: "shyam@gmail.com",
    avatar: "/assets/images/user4.jpg",
    company:"S & J"
  }
];





Mock.onPost("/api/auth/login").reply(async (config) => {
  try {
    const { email } = JSON.parse(config.data);
    const user = userList.find((u) => u.email === email);

    if (!user) return [400, { message: "Invalid email or password" }];

    const payload = { user: user};
    return [200, payload];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onPost("/api/auth/register").reply((config) => {
  try {
    const { email, username } = JSON.parse(config.data);
    const user = userList.find((u) => u.email === email);

    if (user) return [400, { message: "User already exists!" }];

    const newUser = {
      id: 2,
      role: "GUEST",
      name: "Unknown",
      age: 25,
      email: email,
      username: username,
      avatar: "/assets/images/face-6.jpg"
    };

    userList.push(newUser);

    const payload = { user: { ...newUser } };
    return [200, payload];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});

Mock.onGet("/api/auth/profile").reply((config) => {
  try {
    const { Authorization } = config.headers;
    if (!Authorization) {
      return [401, { message: "Invalid Authorization token" }];
    }

    const payload = { user: userList[0] };
    return [200, payload];
  } catch (err) {
    console.error(err);
    return [500, { message: "Internal server error" }];
  }
});
