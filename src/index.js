  function changeTheme() {
        let body = document.querySelector("body");

        // body.classList.toggle("dark");

        if (body.classList.contains("dark")) {
          body.classList.remove("dark");
          button.innerHTML = `Dark Mode <i class="fa-solid fa-moon"></i>`;
        } else {
          body.classList.add("dark");
          button.innerHTML = `Light Mode <i class="fa-solid fa-sun"></i>`;
        }
      }
      let button = document.querySelector("button");
      button.addEventListener("click", changeTheme);


      function showMovieImages() {

        let apiKey = "k_8b90lu9a";
        let movieId = "tt0059592";
        let apiUrl = "https://imdb-api.com/en/API/Images/${apiKey}/${movieId}/short"
        
        axios.get(apiUrl).then(showMovieImages);
      }

function displayImage(response) {
let movieImages = response.data.title;
}


      document.querySelector(".imdb-space").innerHTML += movieImages;
      (displayImage);

