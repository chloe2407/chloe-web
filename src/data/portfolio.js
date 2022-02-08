import React from "react";
import newsletter from "../assets/portfolio/newsletter.png"
import craft from "../assets/portfolio/craftingsjoy.png"
import upcyc from "../assets/portfolio/upcyc.png"
import planit from "../assets/portfolio/planit.png"
import longevitypitch from "../assets/portfolio/longevitypitch.png"
import citychallenge from "../assets/portfolio/citychallenge.png"
import aiarticle from "../assets/portfolio/ai_article.jpeg"
import hapticai_op from "../assets/portfolio/hapticai_op.png"
import hapticai_vid from "../assets/portfolio/hapticai_vid.png"
import psiquantum from "../assets/portfolio/psiquantum.png"
import growth_article from "../assets/portfolio/growth_article.jpeg"
import stemcells from "../assets/portfolio/stemcells.png"
import unchallenge from "../assets/portfolio/unchallenge.png"
import brainer from "../assets/portfolio/brainer.png"
import fourPrint from "../assets/portfolio/4dprint.png"
import nanotech from "../assets/portfolio/nanotech.png"
import battle from "../assets/portfolio/battle.png"




const data = {
    port: [
        {
            id: 1,
            img: newsletter,
            title: "Computing Overload: Chloe's September Uncovered!",
            category:['Newsletter'],
            description: "This is a quick summary of what I've learned this past September! Feel free to provide any feedback on how I can improve!",
            link: 'https://chloelam.substack.com/p/a-new-journey-awaits',
        },
        {
           id: 2,
           img: newsletter,
           title: "Computing Overload: Chloe's October Uncovered!",
           category:['Newsletter'],
           description: "One moment, it's still the month of Spooky October, and the next, it's already the Holiday Season (November)! Learn more about what I've been up to this October, and don't forget to subscribe to my monthly newsletter!",
           link: 'https://chloelam.substack.com/p/reflectober',
       },
       {
           id: 3,
           img: newsletter,
           title: "Computing Overload: Chloe's November Uncovered!",
           category:['Newsletter'],
           description: 'My November Newsletter is out! Put down your email if you want to subscribe!',
           link: 'https://chloelam.substack.com/p/no-excuse-vember',
       },
       {
           id: 4,
           img: newsletter,
           title: "Computing Overload: Chloe's December Uncovered!",
           category:['Newsletter'],
           description: "2020 → 2021 🎉 \n Catch up on my take of appreciation during the holiday season in this month's newsletter of Computing Overload: Chloe's Month Uncovered! If you enjoyed reading, don't forget to like and subscribe! ",
           link: 'https://chloelam.substack.com/p/remember-december',
       },
       {
        id: 5,
        img: newsletter,
        title: "Computing Overload: Chloe's January Uncovered!",
        category:['Newsletter'],
        description: "From Nanotech to writing an article about Artificial Intelligence and Machine Learning, catch up with what I've been up to this January!",
        link: 'https://chloelam.substack.com/p/a-genuine-january',
    },
    {
       id: 6,
       img: newsletter,
       title: "Computing Overload: Chloe's February Uncovered!",
       category:['Newsletter'],
       description: "February Newsletter is out! Check out what I've been up to this month!",
       link: 'https://chloelam.substack.com/p/an-extraordinary-february',
   },
   {
       id: 7,
       img: newsletter,
       title: "Computing Overload: Chloe's March Uncovered!",
       category:['Newsletter'],
       description: "We're already through one quarter of 2021! Check out all the interesting things that I've been doing this March in my newsletter!",
       link: 'https://chloelam.substack.com/p/march-madness',
   },
   {
       id: 8,
       img: longevitypitch,
       title: "Longevity Pitch Deck",
       category:['Deck/One-Pager', 'Longevity'],
       description: "In the longevity session, my group explored stem cells to treat patients with Alzheimer's Disease.",
       link: 'https://drive.google.com/file/d/1G8ItgancmBN3yGgfO6Qm-hS7CLYmWg-G/view?usp=sharing',
   },
   {
    id: 9,
    img: psiquantum,
    title: "Psi Quantum One Pager",
    category:['Deck/One-Pager', 'Quantum Computing'],
    description: "My group (Austin and Raya) and I made this one-pager about Psi Quantum during the Quantum Computing session.",
    link: 'https://drive.google.com/file/d/15faBHVOCB_7zBZ5VVeWekW4cmBuyNoW_/view?usp=sharing'
},
{
    id: 10,
    img: hapticai_op,
    title: "Lorem Semper One Pager",
    category:['Deck/One-Pager', 'Artificial Intelligence', 'Haptics', 'Hackathon'],
    description: "My team (Adam, Ahmad, Josh) and I participated in the 24-hour West Coast Hackathon and made a one-pager on Lorem Semper, a haptic system that uses machine-learning algorithms to improve rehabilitative therapies.",
    link: 'https://drive.google.com/file/d/1om8V1_LI5IuyOsHV-BA54Ax4cAldjKYg/view?usp=sharing',
},
{
    id: 11,
    img: citychallenge,
    title: "501cTHREE Slide Deck (City Challenge)",
    category:['Deck/One-Pager', 'Recommendation'],
    description: "My team (Erica, Angela, Risa) and I built a four-part recommendation for 501cTHREE, aiming to get one out of 100 homes within a community to use 501cTHREE’s water quality monitoring solution as a component of their Water Box program, in response to the Flint Water Crisis (2014).",
    link: 'https://drive.google.com/file/d/1ToDkFTX3Bsc1MSUWK_LaWLQaHLMlmT4E/view?usp=sharing',
},
{
    id: 12,
    img: citychallenge,
    title: "501cTHREE Pitch Deck (City Challenge)",
    category:['Deck/One-pager', 'Recommendation'],
    description: "My team (Erica, Angela, Risa) and I built a four-part recommendation for 501cTHREE, aiming to get one out of 100 homes within a community to use 501cTHREE’s water quality monitoring solution as a component of their Water Box program, in response to the Flint Water Crisis (2014).",
    link: 'https://docs.google.com/presentation/d/1XEexoK-VjxQZzFFilqifPqOYGAdkzsxP0L-842riigI/edit?usp=sharing',
},
{
    id: 13,
    img: unchallenge,
    title: "Global UN Challenge: Increasing Women's Employment in the Philippines",
    category:['Deck/One-Pager', 'Recommendation'],
    description: "aiming to increase women’s employment in the digital economy by 2026 in the Philippines",
    link: 'https://docs.google.com/presentation/d/1XEexoK-VjxQZzFFilqifPqOYGAdkzsxP0L-842riigI/edit?usp=sharing',
},
{
    id: 14,
    img: planit,
    title: "PlanIt Article - AI Hackathon",
    category:['Article', 'Artificial Intelligence', 'Hackathon'],
    description: "An article that my team and I made for the AI Hackathon",
    link: 'https://www.canva.com/design/DAEK4d53B5M/weozv84Ywph9N4E-pkNstA/view?utm_content=DAEK4d53B5M&utm_campaign=designshare&utm_medium=link&utm_source=viewer',
},
{
    id: 15,
    img: growth_article,
    title: "The importance of asking 'Why?'",
    category:['Article'],
    description: "This is my first article. Please feel free to read it and give some feedback on how to improve! Anything is appreciated. :)",
    link: 'https://chloelam2407.medium.com/the-importance-of-asking-why-62da718c903d',
},
{
    id: 16,
    img: aiarticle,
    title: "‘Can machines think?’ — Alan Turing",
    category:['Artificial Intelligence', 'Article'],
    description: "An article detailing how exactly AI and Machine Learning work.",
    link: 'https://medium.datadriveninvestor.com/can-machines-think-alan-turing-4ce34fae23ee',
},
{
    id: 17,
    img: brainer,
    title: "BRAINER 2020 Promo Video",
    category:['Video', 'Entrepreneurship'],
    description: "Brainer is a peer-to-peer platform that connects ambitious high school students with mentors to provide guidance and resources in applying to universities, scholarships, and finding their first job/internship.",
    link: 'https://youtu.be/6JEh_3xDmnc',
},
{
    id: 18,
    img: fourPrint,
    title: "Using 4D Printing to create transportable homes",
    category:['Video', '3D/4D Printing'],
    description: "At TKSPRINTS, my team (Dickson, Aneka, and Sarah) pitched the idea of using 4D printing to create transportable houses that could fold into a small, suitcase-like container, facilitating the process of building cheaper, safer, and stronger homes for the millions in need.",
    link: 'https://youtu.be/3fpHT1m7XKU',
},
{
    id: 19,
    img: nanotech,
    title: "Nanotechnology and Food",
    category:['Video', 'Nanotechnology'],
    description: "During one of the TKS sessions, my team (Ava, Angelina, and Angela) explored how nanotechnology is being used in the food industry. Here is a video summarizing our findings.",
    link: 'https://youtu.be/9vonCFZgs-s',
},
{
    id: 20,
    img: craft,
    title: "Crafting's Joy BOTA 2021",
    category:['Video', 'Entrepreneurship'],
    description: "At Crafting’s Joy, our focus on sustainability and philanthropy allows us to spark children’s creativity through craft-making and skill-building. \n Won 3rd place among 15 teams in Junior Achievement BC's Battle of the Ads awards.",
    link: 'https://youtu.be/fHYpjHbwilM',
},
{
    id: 21,
    img: upcyc,
    title: "UpCyc BOTA 2021",
    category:['Video', 'Entrepreneurship'],
    description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment. \n Won 1st place among 15 teams in Junior Achievement BC's Battle of the Ads awards.",
    link: 'https://youtu.be/fHYpjHbwilM',
},
{
    id: 22,
    img: planit,
    title: "PlanIt! -- AI Hackathon Prototype",
    category:['Prototype', 'Hackathon', 'Artificial Intelligence', 'Design'],
    description: "Did you know that a staggering 50 percent of perfect food is thrown out while still edible? Well...I didn't either. Food waste is such a big problem in both developing and developed countries. It is one of the key factors that lead to poverty and overpopulation in developing countries. In developed countries, over 43 billion pounds of food in near-perfect condition get thrown out every year. \n In order to reduce this alarming percentage in developed countries, our team created PlanIt, an app that scans fruit or vegetables, using AI technology like Computer Vision and Convolutional Neural Networks, to tell consumers or grocery store owners an accurate expiration date instead of relying on the store’s sell-by stickers, which can be oftentimes inaccurate. This reduces food waste in consumer buying and creates more informative buying decisions, while also allowing grocery store owners to sell more produce as they reduce food waste.",
    link: 'https://www.figma.com/file/fjEfFMNpGCUZFX2laQ5yIY/TKS-AI-Hackathon?node-id=0%3A1',
},
{
    id: 23,
    img: upcyc,
    title: "UpCyc Prototype",
    category:['Prototype', 'Entrepreneurship', 'Design'],
    description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment.",
    link: 'https://www.figma.com/proto/JaMmkZQROcOKByjM2eFVkt/upcyc?node-id=3%3A15&scaling=scale-down',
},
{
    id: 24,
    img: craft,
    title: "Crafting's Joy Website",
    category:['Website', 'Entrepreneurship', 'Design'],
    description: "Think back to when you were a child? Craft-making used to be one of my favourite hobbies, and maybe one of yours as well. But nowadays, younger children, who are growing in a world filled with tech, are glued to their screens. \n To combat this, Crafting’s Joy is a student initiative that provides craft kits with five different animal-themed activities in it for children bored at home (especially suitable during COVID times!). \n By purchasing this product, it will spark children’s creativity through craft-making and skill-building. Purchase our craft kits for your children or any child within your network today through our newly launched website! \n If you have any further questions, feel free to reach out to me and ask any questions you may have.",
    link: 'https://www.craftingsjoy.com/',
},
{
    id: 25,
    img: planit,
    title: "PlanIt! - For our AI Hackathon",
    category:['Video', 'Hackathon', 'Artificial Intelligence'],
    description: "Video we made for the AI Hackathon",
    link: 'https://www.loom.com/share/0df580d5a28347dea0adbb8db9a15a20',
},
{
    id: 26,
    img: hapticai_vid,
    title: "Lorem Semper Pitch",
    category:['Video','Hackathon', 'Artificial Intelligence','Haptics'],
    description: "The current path to recovery for disabled patients is plagued with a system of trial and error, which can lead to weeks of frustration and hopelessness. \n My team, Ahmad Shams, Joshua DeCoteau, Adam Dhalla, and I created Lorem Semper, a haptic system that uses machine-learning algorithms to improve rehabilitative therapies during the 24-hour West Coast Hackathon hosted by The Knowledge Society (TKS). \n Among 40+ other teams in the Los Angeles, Las Vegas, and Vancouver area, our team ended up placing in one of the Top 5 teams. ",
    link: 'https://www.loom.com/share/091bffdd9f9a4ea2a17740271959567a',
},
{
    id: 27,
    img: upcyc,
    title: "UpCyc Instagram",
    category:['Social Media', 'Entrepreneurship'],
    description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment.",
    link: 'https://www.instagram.com/up.cyc',
},
{
    id: 28,
    img: upcyc,
    title: "UpCyc Facebook",
    category:['Social Media', 'Entrepreneurship'],
    description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment.",
    link: 'https://www.facebook.com/upcyc.app.1',
},
{
    id: 29,
    img: upcyc,
    title: "UpCyc Website",
    category:['Website', 'Entrepreneurship'],
    description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment.",
    link: 'https://sites.google.com/view/upcyc/home',
},
{
    id: 30,
    img: craft,
    title: "Crafting's Joy Facebook",
    category:['Social Media', 'Entrepreneurship'],
    description: "At Crafting’s Joy, our focus on sustainability and philanthropy allows us to spark children’s creativity through craft-making and skill-building.",
    link: 'https://www.facebook.com/craftings.joy',
},
{
    id: 31,
    img: craft,
    title: "Crafting's Joy Instagram",
    category:['Social Media', 'Entrepreneurship'],
    description: "At Crafting’s Joy, our focus on sustainability and philanthropy allows us to spark children’s creativity through craft-making and skill-building. ",
    link: 'https://www.instagram.com/craftingsjoy',
},
{
    id: 32,
    img: battle,
    title: "Battleship Game",
    category:['Coding Projects', 'Javascript', 'HTML', 'CSS'],
    description: "Built a battleship game using Javascript, HTML, CSS. Followed Ania Kubow's Tutorial on Youtube.",
    link: 'https://chloe2407.github.io/battleship/',
},
{
    id: 33,
    img: newsletter,
    title: "Computing Overload: Chloe's April Uncovered!",
    category:['Newsletter'],
    description: "Released my newsletter a couple of days ago. Check it out to see my highlights of April!",
    link: 'https://chloelam.substack.com/p/aprils-narrative',
},



    ]
    

        
}

export default data;


