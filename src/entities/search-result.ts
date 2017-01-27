export default class SearchResult<T> {

  static default: SearchResult<never> = {
    list: [],
    total: 0,
  }

  list: Array<T>
  total: number

}
