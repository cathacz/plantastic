import client from "./client";
// passing an endpoint
const endpoint = "/list";
export const getList = () => client.get(endpoint);

export const addList = (list, onUploadProgress) => {
  const data = new FormData();
  data.append("title", list.title);
  data.append("subtitle", list.subtitle);
  data.append("categoryId", list.category.value);
  data.append("description", list.description);

  listing.images.forEach((image, index) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    })
  );

  if (list.location) data.append("location", JSON.stringify(list.location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

// objects with all the methods needed
export default {
  getList,
  addList,
};
