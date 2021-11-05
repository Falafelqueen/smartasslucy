const boringAdviceUrl = "https://api.adviceslip.com/advice";
const wisdomUrl = "https://api.kanye.rest/";
const adviceHolder = document.querySelector(".advice-holder");
const btnAdvice = document.querySelector(".btn-advice");
const btnWisdom = document.querySelector(".btn-wisdom");
const btnMotivation = document.querySelector(".btn-motivation");
const btnOther = document.querySelector(".btn-other");
const image = document.querySelector("img");

// fetch data
const fetchData = (url, displayFunction) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayFunction(data);
    });
};

const fetchWeird = (displayFunction) => {
  var proxyUrl = "https://cors-anywhere.herokuapp.com/",
    targetUrl = "https://badadvice.vercel.app/api/random";
  fetch(proxyUrl + targetUrl)
    .then((blob) => blob.json())
    .then((data) => {
      console.table(data);
      // document.querySelector("pre").innerHTML = JSON.stringify(data, null, 2);
      displayFunction(data);
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
};

// tags

const adviceTag = (text, author = "unknown genius") => {
  return `<h2>${text}</h2><p>${author}</p>`;
};

const randomAuthor = () => {
  const authorArray = [
    "Ghandi",
    "The school bully",
    "Gaudí",
    "Lisa Simpson",
    "Your mum",
    "That creepy friend of your dad",
    "Shrek",
    "Frida Kahlo",
    "Cyprian",
    "Big Lebowski",
    "Jesus",
    "Stranger on the bus",
    "Louis",
    "Max",
  ];
  return authorArray[Math.floor(Math.random() * authorArray.length)];
};

// display functions

const displayBoringAdvice = (data) => {
  const boringAdviceText = data.slip.advice;
  const boringAdviceAuthor = randomAuthor();
  const boringAdviceTag = adviceTag(boringAdviceText, boringAdviceAuthor);
  adviceHolder.insertAdjacentHTML("afterbegin", boringAdviceTag);
  console.log(boringAdviceTag);
};

const displayKeyneQuote = (data) => {
  const keyneQoteText = data.quote;
  const keyneQoteAuthor = "Keyne West";
  const keyneQoteTag = adviceTag(keyneQoteText, keyneQoteAuthor);
  adviceHolder.insertAdjacentHTML("afterbegin", keyneQoteTag);
};

const displayTest = (data) => {
  const keyneQoteText = data;
  const keyneQoteAuthor = "";
  const keyneQoteTag = adviceTag(keyneQoteText, keyneQoteAuthor);
  adviceHolder.insertAdjacentHTML("afterbegin", keyneQoteTag);
};
// switch image

// const switchImage = () => {};

const shaking = (object) => {
  object.classList.add("shaking");
  setTimeout(() => {
    object.classList.remove("shaking");
  }, 1000);
};

// event listeners

btnAdvice.addEventListener("click", () => {
  adviceHolder.innerHTML = "";
  shaking(image);
  adviceHolder.classList.add("bubble");
  fetchData(boringAdviceUrl, displayBoringAdvice);
});

btnWisdom.addEventListener("click", () => {
  adviceHolder.innerHTML = "";
  shaking(image);
  adviceHolder.classList.add("bubble");
  fetchData(wisdomUrl, displayKeyneQuote);
});

btnMotivation.addEventListener("click", () => {
  adviceHolder.innerHTML = "";
  shaking(image);
  adviceHolder.classList.add("bubble");
  fetchWeird(displayTest);
});
