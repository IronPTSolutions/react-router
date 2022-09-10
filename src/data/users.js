import { v4 as uuid } from 'uuid';

const users = [
  {
    id: uuid(),
    name: 'Carlos',
    age: 32,
    email: 'carlos@example.org'
  },
  {
    id: uuid(),
    name: 'Maria',
    age: 28,
    email: 'maria@example.org'
  }
];

export default users;