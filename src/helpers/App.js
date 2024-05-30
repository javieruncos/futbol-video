
export const getVideos = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_APP_URL);
    const data = await res.json();
    console.log(data.response);
    return data.response;
  } catch (error) {
    console.log(error);
  }
};
