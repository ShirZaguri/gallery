import { imageType } from "../type/image.type";

export default (image: imageType): imageType => ({
  id: image.id,
  author: image.author,
  url: image.download_url,
});
