export default class X {

  static default: X = {
    id: '',
    name: '',
    propA: '',
    propB: '',
    propC: '',
    createTime: new Date(0).toISOString(),
    updateTime: new Date(0).toISOString(),
  }

  id: string
  name: string
  propA: string
  propB: string
  propC: string
  createTime: string
  updateTime: string

}
