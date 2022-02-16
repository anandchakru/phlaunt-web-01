import { Album } from "./GallerySlice"
import * as pg01 from "./GalleryAPIpage01.json"
import * as pg02 from "./GalleryAPIpage02.json"

export function fetchGallery(offset = 0, limit = 10) {
  return new Promise<{ offset: number, limit: number, more: boolean, data: { [key: string]: Album } }>((resolve) =>
    setTimeout(() => resolve({
      offset, limit, more: offset === 0 ? true : false, data: offset === 0 ? pg01 : pg02
    }), 500)
  )
}