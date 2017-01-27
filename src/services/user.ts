import User from '../entities/user'

export const get = async (): Promise<User> => ({
  ...User.default,
  id: '0',
  name: 'U',
})

export default {
  get,
}
