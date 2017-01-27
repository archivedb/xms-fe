import X from '../entities/x'

export const getById = async (id: string): Promise<X> => ({
  ...X.default,
  id,
  name: 'nox',
  propA: 'a',
  propB: 'b',
  propC: 'c',
  createTime: new Date().toISOString(),
  updateTime: new Date().toISOString(),
})

export default {
  getById,
}
