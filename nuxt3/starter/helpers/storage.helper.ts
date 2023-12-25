/** Локал сторэжтэй ажиллах */

/**
 * Локал сторэжээс өгсөн талбараар дата авах
 * @param key сторэж-д хадгалсан давхардахгүй утга
 * @returns жсон дата эсвэл тоо, тэмдэгтүүд байна
 */

const get = (key: string) => {
  if (process.client) {
    const item: any = localStorage.getItem(key);
    try {
      return JSON.parse(item);
    } catch (error) {
      return item;
    }
  }
};

/**
 * Локал сторэж-д key талбарт item-г хадгална
 * @param key давхардахгүй утга
 * @param item хадгалах дата ямарч төрөлтэй байж болно
 */
const set = (key: string, item: any) => {
  if (process.client) {
    if (item instanceof Object) {
      localStorage.setItem(key, JSON.stringify(item));
    } else {
      localStorage.setItem(key, item);
    }
  }
};

/**
 * Локал сторэж хоослох
 */
const clear = () => {
  if (process.client) localStorage.clear();
};

export default {
  get,
  set,
  clear,
};
