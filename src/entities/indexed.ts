export default class Indexed<T> {

  [id: string]: T

  static indexify = <T extends { id: string }>(xs: Array<T>): Indexed<T> =>
    xs.reduce((z, x) => ({ ...z, [x.id]: x }), {})

}
