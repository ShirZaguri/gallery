import imageCache from "@/shared/imageCache";
import { axios } from "@shared/axiosInstance";

export class ImageService {
  static async fetch() {
    return await axios.get(process.env.PICSUM_API);
  }

  static get() {
    return imageCache.cache();
  }
}
