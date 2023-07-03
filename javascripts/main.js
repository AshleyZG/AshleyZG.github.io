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


// var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

// // Set the SVG attributes
// svg.setAttribute("width", "500");
// svg.setAttribute("height", "500");

// BioSection.append(svg);

// // create color maps
// colorLists = [["#32AEBD", "#EAC117", "#E8F3F5", "#3CB371", "#C9C9C9"],
//     ["#AA2116", "#B4DCA5", "#F0E68C", "#D8D8D8", "#5B7E91"],
//     ["#964239", "#F9BF45", "#B98EE3", "#C9D5B5", "#888888"],
//     ["#D52B1E", "#000000", "#FDFDFD", "#4C6CB3", "#CD7F32"],
//     ["#FAB1AB", "#FFAE5D", "#F6E6CC", "#A2B4C0", "#82B366"]];
// const width = 50;
// const height = 50;

// for (var i = 0; i < colorLists.length; i++) {
//     for (var j = 0; j < colorLists[i].length; j++) {
//         var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

//         rect.setAttribute("x", j*width);
//         rect.setAttribute("y", i*height);
//         rect.setAttribute("width", width);
//         rect.setAttribute("height", height);
//         rect.setAttribute("fill", colorLists[i][j]);
    
//         svg.appendChild(rect);
    
//     }
// }

