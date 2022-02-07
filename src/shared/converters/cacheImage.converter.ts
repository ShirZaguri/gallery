import { imageType } from "../type/image.type";

export default (image: imageType): imageType => ({
  ...image,
  seen: false,
});
