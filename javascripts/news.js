const NewsDiv = document.getElementById("news");

const news = [
    {date: "Jul 2024", content: "CFlow won Best Paper Award at L@S 2024!"},
    {date: "Jul 2024", content: "I'll present CFlow at L@S 2024. See you all in Atlanta!"},
    {date: "May 2024", content: "Attending CHI 24 and starting my internship at Adobe!"}, 
    {date: "April 2024", content: "CFlow is conditionally accepted to L@S 2024!"},
    {date: "Oct 2023", content: "I will present RunEx at VL/HCC. See you all in Washington DC. "},
    {date: "June 2023", content: "One paper is conditionally accepted to VL/HCC 2023!"},
    {date: "April 2023", content: "VizProg and Colaroid won Best Paper Honorable Mention Awards at CHI 2023!"},
    {date: "Jan 2023", content: "Two papers are conditionally accepted to CHI 2023!"}
];

for (var item of news) {
    const pItem = document.createElement("p");
    pItem.innerText = item.date+": "+item.content;
    NewsDiv.appendChild(pItem);
}