const dataSlider = [
  {
    id: 1,
    imageUrl: "http://wowslider.com/sliders/demo-18/data1/images/new_york.jpg",
    title: "slider title 1",
  },

  {
    id: 2,
    imageUrl: "http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
    title: "slider title 2",
  },

  {
    id: 3,
    imageUrl:
      "http://wowslider.com/sliders/demo-18/data1/images/london830775.jpg",
    title: "slider title 3",
  },

  {
    id: 4,
    imageUrl:
      "http://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
    title: "slider title 4",
  },
];

const sliderCcontent = document.getElementById("slider-content");
const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
let sliderIndex = 0;

//slider სტრუქტურის აწყობა

function createDivTag() {
  let div = document.createElement("div");

  return div;
}

function createImgTag(item) {
  let tagImage = document.createElement("img");
  tagImage.setAttribute("src", `${item.imageUrl}`);

  //დავაბრუნოთ ახალი ტეგი ატრიბუტებით
  return tagImage;
}

function createTitle(item) {
  let titleTag = document.createElement("h2");
  titleTag.innerText = `${item.title}`;

  return titleTag;
}

// რომელი სლაიდ უნდა გამოჩნდეს
function slide() {
  console.log(dataSlider[sliderIndex]);
  let slideItem = createDivTag();
  let imgItem = createImgTag(dataSlider[sliderIndex])
}

slide();
