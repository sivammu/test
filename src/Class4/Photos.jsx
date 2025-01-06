import axios from "axios";
import { useEffect, useState } from "react";
import Photo from "./Photo";

const Photos = () => {
  const [Photos, setphotos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((res) => {
        console.log(res.data)
        setphotos(res.data);
      })
      .catch((ex) => console.log(ex));
  }, []);
  return (
    <div>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            {Photos.map(photo => <Photo data = {photo} />)}

        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
export default Photos;
