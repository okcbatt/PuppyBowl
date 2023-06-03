let cohortName = "2304-FTB-ET-WEB-FT";
let APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;

//Fetching all player data from API
const fetchAllPlayers = async () => {
  try {
    let response = await fetch(`${APIURL}/players`);
    let translatedData = await response.json();
    let actualPuppyData = translatedData.data;
    return actualPuppyData.players;
  } catch (error) {
    console.error("Uh oh, trouble fetching players!", error);
  }
};

async function renderAllPuppyData() {
  let playerContainer = document.getElementById("all-players-container");
  let myPuppyArray = await fetchAllPlayers();
  for (let i = 0; i < myPuppyArray.length; i++) {
    let myCurrentPuppy = myPuppyArray[i];
    let puppyCardContainer = document.createElement("div");
    puppyCardContainer.className = "puppy-card";

    let newPuppyCardName = document.createElement("h2");
    let newPuppCardBreed = document.createElement("p");
    newPuppyCardName.innerText = myCurrentPuppy.name;
    newPuppCardBreed.innerText = myCurrentPuppy.breed;

    let newPuppyDetails = document.createElement("button");
    newPuppyDetails.id = "details-button";
    newPuppyDetails.innerText = "Details";
    newPuppyDetails.addEventListener("click", () => {
      localStorage.setItem("puppyName", myCurrentPuppy.name);
      localStorage.setItem("puppyBreed", myCurrentPuppy.breed);
      localStorage.setItem("puppyStatus", myCurrentPuppy.status);
      localStorage.setItem("puppyPic", myCurrentPuppy.imageUrl);

      window.location.href = "details.html";
    });

    puppyCardContainer.appendChild(newPuppyCardName);
    puppyCardContainer.appendChild(newPuppCardBreed);
    puppyCardContainer.appendChild(newPuppyDetails);
    playerContainer.appendChild(puppyCardContainer);
  }
}

renderAllPuppyData();
