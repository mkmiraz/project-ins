import axios from "axios";

export const deveImageUpload = async ({ file, preset, api_key }) => {
  const form_data = new FormData();

  form_data.append("file", file);
  form_data.append("upload_preset", preset);

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/${api_key}/image/upload`,
    form_data
  );

  return res.data;
};
