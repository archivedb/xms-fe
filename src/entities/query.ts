export default class Query {

  static default: Query = {
    page: 1,
    perpage: 10,
    sortby: 'createTime',
    order: 'desc',
    q: '',
  }

  page: number
  perpage: number
  sortby: string
  order: 'asc' | 'desc'
  q: string

  static fromQS = (o: Object): Query => ({
    page: Number(o['page'] || Query.default.page),
    perpage: Number(o['perpage'] || Query.default.perpage),
    sortby: String(o['sortby'] || Query.default.sortby),
    order: ['asc', 'desc'].includes(o['order']) ? o['order'] : Query.default.order,
    q: String(o['q'] || Query.default.q),
  })

}
