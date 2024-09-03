const imageToken = "fd868decd9f90f9dbfa35322ae2d7341";

export const imgUrlCreate = async (file: any) => {
  if (!file) {
    console.error("No file selected");
    return;
  }
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageToken}`;

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch(imageHostingUrl, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to upload image");
    }

    const imageResponse = await res.json();
    const imgURL = imageResponse.data.display_url;
    return imgURL;
  } catch (error) {
    console.error("Error uploading image:", error);
  }
};
