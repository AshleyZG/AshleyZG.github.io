const NewsDiv = document.getElementById("news");

const news = [
    {date: "June 2023", content: "One paper is conditionally accepted to VL/HCC 2023!"},
    {date: "April 2023", content: "VizProg and Colaroid won Best Paper Honorable Mention Awards at CHI 2023!"},
    {date: "Jan 2023", content: "Two papers are conditionally accepted to CHI 2023!"}
];

for (var item of news) {
    const pItem = document.createElement("p");
    pItem.innerText = item.date+": "+item.content;
    NewsDiv.appendChild(pItem);
}