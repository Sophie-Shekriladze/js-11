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
// div შექმნა

function createDivTag() {
  let div = document.createElement("div");

  return div;
}

// სურათის შექმნა
function createImgTag(item) {
  let tagImage = document.createElement("img");
  tagImage.setAttribute("src", `${item.imageUrl}`);

  //დავაბრუნოთ ახალი ტეგი ატრიბუტებით
  return tagImage;
}


//სათაურის შექმნა
function createTitle(item) {
  let titleTag = document.createElement("h2");
  titleTag.innerText = `${item.title}`;

  return titleTag;
}


//დოტების შექმნა
function createDots() {
  
}


// რომელი სლაიდ უნდა გამოჩნდეს
function slide() {
  sliderCcontent.innerHTML = " "; //გავასუფთაოთ კონტენტი
  let slideItem = createDivTag();
  let imgItem = createImgTag(dataSlider[sliderIndex]);
  let titleItem = createTitle(dataSlider[sliderIndex]);

  slideItem.appendChild(imgItem);
  slideItem.appendChild(titleItem);
  sliderCcontent.appendChild(slideItem);
}

slide();

//ღილაკის კლიკ ივენთები

function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = dataSlider.length - 1;
    slide();
    return;
  }
  sliderIndex -= 1;
  slide();
}

function arrowRightClick() {
  if (sliderIndex == dataSlider.length - 1) {
    sliderIndex = 0;
    slide();
    return;
  }
  sliderIndex += 1;
  slide();
}

arrowLeft.addEventListener("click", arrowLeftClick);

arrowRight.addEventListener("click", arrowRightClick);

setInterval(() => {
  arrowRightClick();
}, 3000); // აქ იწერება მილიწამები, ამიტომ 3 წამი 3*1000
