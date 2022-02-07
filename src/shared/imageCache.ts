import { ImageService } from "@/services/image.service";
import cacheImageConverter from "./converters/cacheImage.converter";
import imageConverter from "./converters/image.converter";
import { imageType } from "./type/image.type";

class imageCache {
  private static images: imageType[] = [];

  static cache = (): imageType[] => {
    const size = imageCache.images.length;
    const findRandonUnseenImages = () => {
      const unseenImages = [];
      for (let i = 0; i < 5; i++) {
        let opt = Math.floor(Math.random() * size);
        while (imageCache.images[opt].seen) {
          opt = Math.floor(Math.random() * size);
        }
        unseenImages.push(imageCache.images[opt]);
        imageCache.images[opt].seen = true;
      }
      return unseenImages.map(imageConverter);
    };
    return findRandonUnseenImages();
  };

  static async fetchImages() {
    imageCache.images = (await ImageService.fetch()).data.map(
      cacheImageConverter
    );
  }
}

export default imageCache;
