const image = document.getElementById("img");
const person = document.getElementById("name");
const jobs = document.getElementById("job");
const infoPerson = document.getElementById("about");
const flag = document.getElementById("nation");

const btnForward = document.getElementById("forward");
const btnBackward = document.getElementById("backward");

//object
const reviews = [
  {
    id: 1,
    img: "./imgs/david-beckham.jpg",
    name: "David Beckhem",
    job: "Football Player from",
    about:
      "David Robert Joseph Beckham OBE is an English former professional footballer, the president and co-owner of Inter Miami CF and co-owner of Salford City.",
    flags: "./flags/uk.svg",
  },
  {
    id: 2,
    img: "./imgs/Murray.jpg",
    name: "Andry Murray",
    job: "Tennis Player from",
    about:
      "Andy Murray is a British professional tennis player. He was ranked world No. 1 in singles by the Association of Tennis Professionals (ATP) for 41 weeks, and finished as the year-end No. 1 in 2016. Murray has won three Grand Slam singles titles.",
    flags: "./flags/uk.svg",
  },
  {
    id: 3,
    img: "./imgs/Nadal.jpg",
    name: "Rafael Nadal",
    job: "Tennis Player from",
    about:
      "Rafeal Nadal is a Spanish professional tennis player. Nadal has been ranked world No. 1 in singles by the Association of Tennis Professionals (ATP) for 209 weeks. Nadal has won 22 Grand Slam men's singles titles.",
    flags: "./flags/es.svg",
  },
  {
    id: 4,
    img: "./imgs/alcaraz.jpg",
    name: "carlos Alcaraz",
    job: "Tennis Player from",
    about:
      "Carlos Alcaraz Garfia is a Spanish professional tennis player. He has been ranked as high as world No. 1 in men's singles by the Association of Tennis Professionals.",
    flags: "./flags/es.svg",
  },
];

let currentReview = 0;

document.addEventListener("DOMContentLoaded", () => {
  const items = reviews[currentReview];
  img.src = items.img;
  person.textContent = items.name;
  jobs.textContent = items.job;
  infoPerson.textContent = items.about;
  flag.src = items.flags;
});

function persons(item) {
  const items = reviews[item];
  img.src = items.img;
  person.textContent = items.name;
  jobs.textContent = items.job;
  infoPerson.textContent = items.about;
  flag.src = items.flags;
}

btnForward.addEventListener("click", () => {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  }
  persons(currentReview);
});

btnBackward.addEventListener("click", () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  }
  persons(currentReview);
});
