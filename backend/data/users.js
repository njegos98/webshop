import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Test Testic',
    email: 'test@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'User Useric',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
