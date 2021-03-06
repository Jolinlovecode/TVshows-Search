const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  // console.dir(form.elements);
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm, isFunny:'colt' } };
  const res = await axios.get('https://api.tvmaze.com/search/shows', config);
  // for example: search chicken; Request URL: https://api.tvmaze.com/search/shows?q=chicken&isFunny=colt
  // const config = { params: { q: searchTerm } };
  // for example: https://api.tvmaze.com/search/shows?q=chicken
  // console.log(res.data);
  // console.log(res.data[0].show.image.medium);
  makeImages(res.data);
  form.elements.query.value = "";
});

const makeImages = (shows) => {
  for (let result of shows) {
    // console.log(result);
    if (result.show.image) {
      const img = document.createElement("IMG");
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
