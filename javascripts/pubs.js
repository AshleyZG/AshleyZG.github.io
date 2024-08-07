const LongPubsSection = document.getElementById("pubs-long");
const ShortPubsSection = document.getElementById("pubs-short");
const MYNAME = "Ashley Ge Zhang";
// 
/**Pub data structure
 * {
 *  title: string,
 *  authors: string[],
 *  venue: string,
 *  abstractHTML: string,
 * optional
 *  imgPath: string,
 *  pdf: string,
 *  slides: string,
 *  award: string,
 *  video: string
 * }
 */

/**
 * Long publications stored in `longPubs`. 
 * Update from the beginning. 
 * See data structure above for details. 
 */
const longPubs = [
    {
        title: "CFlow: Supporting Semantic Flow Analysis of Students' Code in Programming Problems at Scale", 
        authors: [MYNAME, "Xiaohang Tang", "Steve Oney", "Yan Chen"],
        venue: "L@S 2024",
        abstractHTML: "Introdced CFlow, a system for creating understandable and navigable representations of code at scale. CFlow is able to represent thousands of code samples in a visualization that resembles a single code sample. This is in contrast to prior tools that either limit their focus on isolated statements (and thus discard the surrounding context of those statements) or cluster entire code samples (which can lead to large numbers of clusters -- for example, if there are n code features and m implementations of each, there can be m^n clusters).",
        imgPath: "./images/CFlow.jpg",
        pdf: "https://gezhangrp.com/assets/pubs/24-L@S-CFlow.pdf",
        award: "Best Paper Award",
        slides: "https://gezhangrp.com/assets/pubs/24-L@S-CFlow-slides.pdf",
    },
    {
        title: "RunEx: Augmenting Regular-Expression Code Search with Runtime Values",
        authors: [MYNAME, "Yan Chen", "Steve Oney"],
        venue: "VL/HCC 2023",
        abstractHTML: "Introduced RunEx, a novel code search tool for programming instructors, where they can effortlessly generate queries with minimal prior knowledge of code search and rapidly search through a large code corpus. RunEx consists of a syntax that augments regular expression with runtime values, and a user interface that enables instructors to construct runtime and syntax-based queries.",
    // optional
        imgPath: "./images/RunEx.png",
        pdf: "https://gezhangrp.com/assets/pubs/23-VLHCC-RunEx.pdf",
        slides: "https://gezhangrp.com/assets/pubs/23-VLHCC-RunEx-slides.pdf"
        // award: string,
        // video: string
    }, 
    {
        title: "VizProg: Identifying Misunderstandings by Visualizing Students' Coding Progress",
        authors: [MYNAME, "Yan Chen", "Steve Oney"],
        venue: "CHI 2023",
        abstractHTML: `Proposed a VizProg, a system that visualizing students' progress in in-class programming exercises by encoding their status into a 2-D map view. A comparison experiment showed that VizProg helped instructors identify more misunderstandings accurately than the baseline system (a real-time version of <a href="https://roc-hci.com/wp-content/uploads/overcode-visualizing-programming-solutions_TOCHI-2015.pdf">OverCode</a>). 
        </p>`,
        imgPath: "./images/VizProg.png",
        pdf: "https://gezhangrp.com/assets/pubs/23-CHI-VizProg.pdf",
        slides: "https://gezhangrp.com/assets/pubs/23-CHI-VizProg-slides.pdf",
        award: "Honorable Mention Award",
        video: "https://youtu.be/nc6njbX0lVY",
    },
    {
        title: "Colaroid: A Literate Programming Approach for Authoring Explorable Multi-Stage Tutorials",
        authors: ["April Wang", "Andrew Head", MYNAME, "Steve Oney", "Christopher Brooks"],
        venue: "CHI 2023",
        abstractHTML: "Colaroid allows users to create web programming tutorials in augmented computational notebooks, where each cell represents a snapshot of the project. In each cell, users can check the complete source code context, highlighted code differences, and the executed outputs. Users can also load and tinker with any stage of the project in a linked IDE.",
        // optional
        imgPath: "./images/Colaroid.png",
        pdf: "https://aprilwang.me/assets/pubs/CHI23_Colaroid.pdf",
        award: "Honorable Mention Award",
        video: "https://youtu.be/Oy1PRi8vov8"
    },
    {
        title: "CORAL: COde RepresentAtion Learning with Weakly-Supervised Transformers for Analyzing Data Analysis",
        authors: [MYNAME+"*", "Mike Merrill*", "Yang Liu", "Jeffrey Heer", "Tim Althoff"],
        venue: "EPJ Data Science 2022",
        abstractHTML: "Proposed a novel weakly supervised transformer-based architecture for computing joint representations of code to uncover common data analysis patterns from a set of 118,000 Jupyter Notebooks.",
        // optional
        imgPath: "./images/task_diagram.jpg",
        pdf: "https://arxiv.org/pdf/2008.12828.pdf",
        // award: string,
        // video: string
    },
    {
        title: "Mining Collective Data Science Knowledge from Code on the Web to Suggest Alternative Data Analysis Approaches",
        authors: ["Mike Merril", MYNAME, "Tim Althoff"],
        venue: "KDD 2021",
        abstractHTML: "Proposed a graph neural network model to support novice data analysts in exploring alternative approaches by identifying decision points and suggesting alternatives in computational notebooks for data science.",
        // optional
        imgPath: "./images/moray_diagram.jpg",
        pdf: "https://dl.acm.org/doi/pdf/10.1145/3447548.3467455",
        // award: string,
        // video: string
    }
   
];
const shortPubs = [
    {
        title: "Demonstration of CFlow: Supporting Semantic Flow Analysis of Students' Code in Programming Problems at Scale",
        authors: [MYNAME, "Xiaohang Tang", "Steve Oney", "Yan Chen"],
        venue: "L@S 2024 Demonstration",
        abstractHTML: "A demonstration of my research full paper, CFlow, at L@S 2024.",
        imgPath: "./images/CFlow.jpg",
        pdf: "https://gezhangrp.com/assets/pubs/24-L@SDemo-CFlow.pdf"
    },
    {
        title: "How Pairing by Code Similarity Influences Discussions in Peer Learning",
        authors: ["Shiyu Xu", MYNAME, "Steve Oney"],
        venue: "CHI 2023 Late-Breaking Work",
        abstractHTML: "Peer learning has been widely used in programming courses as a means of promoting active learning and enhancing students' programming skills. We investigated in what ways and to what extent groupding students with similar or different solutions affect the discussions that take place within groups.",
        // optional
        imgPath: "images/how-pairing-LBW23.jpg",
        pdf: "https://gezhangrp.com/assets/pubs/23-CHILBW-Pairing.pdf",
        // award: string,
        // video: string
    }
   
];

function createTitleSpan(title){
    const titleSpan = document.createElement('span');
    titleSpan.classList.add('title');
    const titleNode = document.createElement('strong');
    titleNode.innerText = title;
    titleSpan.appendChild(titleNode);
    return titleSpan;
}

function createImgDiv(imgPath){
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('paper-img');
    const img = document.createElement('img');
    img.src = imgPath;
    imgDiv.appendChild(img);
    return imgDiv;
}

function createAuthorsSpan(authors){
    const authorsSpan = document.createElement('span');
    authorsSpan.classList.add('author-list');
    for (const [index, author] of authors.entries()) {
        var authorNode;
        if (author === MYNAME || author === MYNAME+"*"){
            authorNode = document.createElement("strong");
        }else{
            authorNode = document.createElement("span");
        }
        authorNode.classList.add('author');
        if (index === 0){authorNode.classList.add('no-before');}
        authorNode.innerText = author;   
        authorsSpan.appendChild(authorNode);             

    }
    return authorsSpan;
}

function createVenueSpan(venue){
    const venueSpan = document.createElement('span');
    venueSpan.classList.add('venue');
    const venueNode = document.createTextNode(venue);
    venueSpan.appendChild(venueNode);
    return venueSpan;
}

function createAwardSpan(award){
    const awardSpan = document.createElement('span');
    awardSpan.classList.add('award');
    awardSpan.innerText = award;
    return awardSpan;
}

function createPdfSpan(pdf){
    const pdfSpan = document.createElement('span');
    pdfSpan.classList.add('link');

    const pdfIcon = document.createElement('a');
    pdfIcon.className = "fa fa-file-pdf-o";
    pdfIcon.href = pdf;

    const tag = document.createElement('span');
    tag.innerText = 'PDF';
    pdfIcon.appendChild(tag);
    pdfSpan.appendChild(pdfIcon);

    return pdfSpan;
}

function createSlidesSpan(slides){
    const slidesSpan = document.createElement('span');
    slidesSpan.classList.add('link');

    const slidesIcon = document.createElement('a');
    slidesIcon.className = "fa fa-slideshare";
    slidesIcon.href = slides;

    const tag = document.createElement('span');
    tag.innerText = 'Slides';
    slidesIcon.appendChild(tag);
    slidesSpan.appendChild(slidesIcon);

    return slidesSpan;
}

function createVideoSpan(video){
    const videoSpan = document.createElement('span');
    videoSpan.classList.add("link");

    const videoIcon = document.createElement('a');
    videoIcon.className = "fa fa-youtube-play";
    videoIcon.href = video;

    const tag = document.createElement('span');
    tag.innerText = 'Video';
    videoIcon.appendChild(tag);
    videoSpan.appendChild(videoIcon);

    return videoSpan;
}

function createPaperElement(paperItem){
    const container = document.createElement('div');
    container.classList.add('paper-item');
    container.classList.add('container');

    // paper image
    const imgDiv = createImgDiv(paperItem.imgPath);

    // paper info
    const textDiv = document.createElement('div');
    textDiv.classList.add('paper-text');
    const textContent = document.createElement('p');

    const titleSpan = createTitleSpan(paperItem.title);
    const authorsSpan = createAuthorsSpan(paperItem.authors);
    const venueSpan = createVenueSpan(paperItem.venue);


    // paper links
    const linkSpan = document.createElement('span');
    if ('pdf' in paperItem){
        const pdfSpan = createPdfSpan(paperItem.pdf);
        linkSpan.appendChild(pdfSpan);
    }
    if ('slides' in paperItem){
        const slidesSpan = createSlidesSpan(paperItem.slides);
        linkSpan.appendChild(slidesSpan);
    }
    if ('video' in paperItem){
        const videoSpan = createVideoSpan(paperItem.video);
        linkSpan.appendChild(videoSpan);
    }

    // paper abstract
    const abstractSpan = document.createElement('span');
    abstractSpan.innerHTML = paperItem.abstractHTML;

    textContent.appendChild(titleSpan);
    textContent.appendChild(document.createElement('br'));
    textContent.appendChild(authorsSpan);
    textContent.appendChild(document.createElement('br'));
    textContent.appendChild(venueSpan);
    if ('award' in paperItem){
        const awardSpan = createAwardSpan(paperItem.award);
        textContent.appendChild(awardSpan);
    }
    textContent.appendChild(document.createElement('br'));
    textContent.appendChild(linkSpan);
    textContent.appendChild(document.createElement('br'));
    textContent.appendChild(abstractSpan);

    textDiv.appendChild(textContent);

    container.appendChild(imgDiv);
    container.appendChild(textDiv);
    
    return container;
}



for (var item of longPubs){
    const itemElement = createPaperElement(item);
    LongPubsSection.appendChild(itemElement);
}

for (var item of shortPubs){
    const itemElement = createPaperElement(item);
    ShortPubsSection.appendChild(itemElement);
}