const PhotoPath = "images/head-shot.jpg";
const AltPhotoPath = "images/head-shot-alt.JPG";

const Image = document.getElementById('head-shot');
Image.onmouseover = () => {Image.src = AltPhotoPath;};
Image.onmouseout = () => {Image.src = PhotoPath;};

const BioSection = document.getElementById("bio");

const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
console.log(year, month);
const grade = month>=9? year-2021+1:year-2021;

const gradeSpan = document.getElementById("grade");
gradeSpan.innerText = mapToOrder(grade);


