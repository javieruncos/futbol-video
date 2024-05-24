const url =
  "https://www.scorebat.com/video-api/v3/feed/?token=[MTU4MTcyXzE3MTU2MTU4MTRfM2VlYjE2MGU0NzFmNTExMmViMGE0MDQwNzdkNGM1NzQ3MDE3MWMzNw]";

export const getVideos = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.response;
  } catch (error) {
    console.log(error);
  }
};

export const getLigas = async () => {
  try {
    const respuesta = await fetch(
      `https://www.scorebat.com/video-api/v3/competition/england-premier-league/?token=[MTU4MTcyXzE3MTU2MTU4MTRfM2VlYjE2MGU0NzFmNTExMmViMGE0MDQwNzdkNGM1NzQ3MDE3MWMzNw]`
    );
    const dato = await respuesta.json();
    console.log(dato);
    return dato;
  } catch (error) {
    console.log(error);
  }
};
