import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dlu4r4new",
  api_key: "583837692367813",
  api_secret: "lQc_FIMOwe_DytD0Jep39zSw-10",
});

export const uploadImage = async (filepath) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "test",
  });
};
export const deleteImage = async (id) => {
  return await cloudinary.uploader.destroy(id);
};
