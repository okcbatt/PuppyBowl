window.onload = () => {
  let puppyName = localStorage.getItem("puppyName");
  let puppyBreed = localStorage.getItem("puppyBreed");
  let puppyStatus = localStorage.getItem("puppyStatus");
  let puppyPic = localStorage.getItem("puppyPic");

  let puppyDetailsContainer = document.getElementById(
    "puppy-details-container"
  );

  let detailsPuppyName = document.createElement("h2");
  detailsPuppyName.innerText = puppyName;

  let detailsPuppyBreed = document.createElement("p");
  detailsPuppyBreed.innerText = `Breed: ${puppyBreed}`;

  let detailsPuppyStatus = document.createElement("p");
  detailsPuppyStatus.innerText = `Status: ${puppyStatus}`;

  let detailsPuppyPic = document.createElement("img");
  detailsPuppyPic.src = puppyPic;

  console.log(puppyPic);

  puppyDetailsContainer.appendChild(detailsPuppyName);
  puppyDetailsContainer.appendChild(detailsPuppyBreed);
  puppyDetailsContainer.appendChild(detailsPuppyStatus);
  puppyDetailsContainer.appendChild(detailsPuppyPic);
};
