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
import c3dweb from "../assets/portfolio/c3d_web.png"
import csc110proj from "../assets/portfolio/CSC110_Project.pdf"
import lineplot from "../assets/portfolio/line_plot_default.png"
import ribosoma from "../assets/portfolio/ribosoma.png"
import uniplanit from "../assets/portfolio/uniplanit.png"
import petudier from "../assets/portfolio/petudier.png"
import uoftinder from "../assets/portfolio/uoftinder.png"
import breakout from "../assets/portfolio/breakout.png"
import csc258proj from "../assets/portfolio/CSC258_FinalProject.pdf"
import patientapp from "../assets/portfolio/patientapp.png"
import bcrenal from "../assets/portfolio/bcrenal.mp4"
import aireflectionarticle from "../assets/portfolio/ai_reflection_article.png"


const data = {
    port: [
        {
            id: 1,
            img: newsletter,
            title: "Computing Overload: Chloe's Month Uncovered!",
            category:['Newsletters/Article Writing'],
            description: "In 2020, I decided to create a monthly newsletter to keep myself accountable and keep track of my progress. I wanted to share my journey along with others who may be interested.",
            links: [
                ['September','https://chloelam.substack.com/p/a-new-journey-awaits'],
                ['October' ,'https://chloelam.substack.com/p/reflectober'],
                ['November', 'https://chloelam.substack.com/p/no-excuse-vember'],
                ['December', 'https://chloelam.substack.com/p/remember-december'],
                ['January' , 'https://chloelam.substack.com/p/a-genuine-january'],
                ['February', 'https://chloelam.substack.com/p/an-extraordinary-february'],
                ['March', 'https://chloelam.substack.com/p/march-madness'],
                ['April', 'https://chloelam.substack.com/p/aprils-narrative']

            ],
        },
        
    {
       id: 2,
       img: longevitypitch,
       title: "Longevity Pitch Deck",
       category:['Entreprenurship/Hackathons'],
       description: "While I was participating in The Knowledge Society's Accelerator Program, my group explored stem cells to treat patients with Alzheimer's Disease during the longevity session.",
       links: [
        ['Stem Cells One-Pager', 'https://drive.google.com/file/d/1G8ItgancmBN3yGgfO6Qm-hS7CLYmWg-G/view?usp=sharing']
        ],
   },
   {
    id: 3,
    img: psiquantum,
    title: "Psi Quantum One Pager",
    category:['Entreprenurship/Hackathons'],
    description: "While I was participating in The Knowledge Society's Accelerator Program, my group (Austin and Raya) and I made this one-pager about Psi Quantum during the Quantum Computing session.",
    links: [
        ['One-Pager about Psi Quantum','https://drive.google.com/file/d/15faBHVOCB_7zBZ5VVeWekW4cmBuyNoW_/view?usp=sharing']
    ]
},
{
    id: 4,
    img: hapticai_op,
    title: "Lorem Semper One Pager",
    category:['Entreprenurship/Hackathons'],
    description: "While I was participating in The Knowledge Society's Accelerator Program, my team (Adam, Ahmad, Josh) and I participated in the 24-hour West Coast Hackathon and made a one-pager on Lorem Semper, a haptic system that uses machine-learning algorithms to improve rehabilitative therapies.",
    links: [
        ['Haptics Hackathon One-Pager','https://drive.google.com/file/d/1om8V1_LI5IuyOsHV-BA54Ax4cAldjKYg/view?usp=sharing'],
        ['Haptics Pitch Video', 'https://www.loom.com/share/091bffdd9f9a4ea2a17740271959567a'],
    ]
},
{
    id: 5,
    img: citychallenge,
    title: "501cTHREE Recommendation Deck (City Challenge)",
    category:['Entrepreneurship/Hackathons'],
    description: "While I was participating in The Knowledge Society's Accelerator Program, my team (Erica, Angela, Risa) and I built a four-part recommendation for 501cTHREE, aiming to get one out of 100 homes within a community to use 501cTHREE’s water quality monitoring solution as a component of their Water Box program, in response to the Flint Water Crisis (2014).",
    links: [
        ['501cTHREE Slide Deck','https://drive.google.com/file/d/1ToDkFTX3Bsc1MSUWK_LaWLQaHLMlmT4E/view?usp=sharing'],
        ['501cTHREE Pitch Deck', 'https://docs.google.com/presentation/d/1XEexoK-VjxQZzFFilqifPqOYGAdkzsxP0L-842riigI/edit?usp=sharing']
    ]
},
{
    id: 6,
    img: unchallenge,
    title: "Global UN Challenge: Increasing Women's Employment in the Philippines",
    category:['Entreprenurship/Hackathons'],
    description: "While I was participating in The Knowledge Society's Accelerator Program, my team decided to focus on learning more about the gender wage gap that females experience today. We created a slide deck with a recommendation to the UN to increase women’s employment in the digital economy by 2026 in the Philippines.",
    links: [
        ['UN Recommendation Slide Deck','https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FV4TVmZkjwJc3NU8KYapnVkV6yDo1%2FAngelina%2C%20Chloe%2C%20Jalisha%2C%20Julia%2C%20Macy%20-%20UN%20Recommendation%20Deck.pdf?alt=media&token=c75f327c-7b38-40f7-a16a-dee25c6faeb3']
    ]
},
{
    id: 7,
    img: planit,
    title: "PlanIt (AI Hackathon)",
    category:['Entrepreneurship/Hackathons'],
    description: "Did you know that a staggering 50 percent of perfect food is thrown out while still edible? Well...I didn't either. Food waste is such a big problem in both developing and developed countries. It is one of the key factors that lead to poverty and overpopulation in developing countries. In developed countries, over 43 billion pounds of food in near-perfect condition get thrown out every year. \n In order to reduce this alarming percentage in developed countries, our team created PlanIt, an app that scans fruit or vegetables, using AI technology like Computer Vision and Convolutional Neural Networks, to tell consumers or grocery store owners an accurate expiration date instead of relying on the store’s sell-by stickers, which can be oftentimes inaccurate. This reduces food waste in consumer buying and creates more informative buying decisions, while also allowing grocery store owners to sell more produce as they reduce food waste.",
    link: [
        ['Article about Planit','https://www.canva.com/design/DAEK4d53B5M/weozv84Ywph9N4E-pkNstA/view?utm_content=DAEK4d53B5M&utm_campaign=designshare&utm_medium=link&utm_source=viewer'],
        ['Video about Planit','https://www.loom.com/share/0df580d5a28347dea0adbb8db9a15a20'],
        ['Planit Prototype', 'https://www.figma.com/file/fjEfFMNpGCUZFX2laQ5yIY/TKS-AI-Hackathon?node-id=0%3A1']
    ]
},
{
    id: 8,
    img: growth_article,
    title: "The importance of asking 'Why?'",
    category:['Newsletters/Article Writing'],
    description: "This is my first article. Please feel free to read it and give some feedback on how to improve! Anything is appreciated. :)",
    links: [
        ['Link to Article','https://chloelam2407.medium.com/the-importance-of-asking-why-62da718c903d'],
    ]
},

{
    id: 9,
    img: aiarticle,
    title: "‘Can machines think?’ — Alan Turing",
    category:['Newsletters/Article Writing', 'Featured'],
    description: "An article detailing how exactly AI and Machine Learning work.",
    links: [ 
        ['Link to Article','https://medium.datadriveninvestor.com/can-machines-think-alan-turing-4ce34fae23ee'],
    ]
},
{
    id: 10,
    img: brainer,
    title: "BRAINER 2020 Promo Video",
    category:['Entrepreneurship/Hackathons'],
    description: "While participating in Junior Achievement BC's program, I formed a group with 6 other highschool students. We developed Brainer, a peer-to-peer platform that connects ambitious high school students with mentors to provide guidance and resources in applying to universities, scholarships, and finding their first job/internship.",
    link: [
        ['Video about Brainer','https://youtu.be/6JEh_3xDmnc'],
]
},
{
    id: 11,
    img: fourPrint,
    title: "Using 4D Printing to create transportable homes",
    category:['Entrepreneurship/Hackathons'],
    description: "At TKSPRINTS, my team (Dickson, Aneka, and Sarah) pitched the idea of using 4D printing to create transportable houses that could fold into a small, suitcase-like container, facilitating the process of building cheaper, safer, and stronger homes for the millions in need.",
    link: [
        ['Presentation of our idea','https://youtu.be/3fpHT1m7XKU'],
    ]
},
{
    id: 12,
    img: nanotech,
    title: "Nanotechnology and Food",
    category:['Entrepreneurship/Hackathons'],
    description: "During one of the TKS sessions, my team (Ava, Angelina, and Angela) explored how nanotechnology is being used in the food industry. Here is a video summarizing our findings.",
    links: [
        ['Video of our findings','https://youtu.be/9vonCFZgs-s'],
    ]
},
{
    id: 13,
    img: craft,
    title: "Crafting's Joy",
    category:['Entrepreneurship/Hackathons'],
    description: "Think back to when you were a child? Craft-making used to be one of my favourite hobbies, and maybe one of yours as well. But nowadays, younger children, who are growing in a world filled with tech, are glued to their screens. \n To combat this, Crafting’s Joy is a student initiative that provides craft kits with five different animal-themed activities in it for children bored at home (especially suitable during COVID times!). \n By purchasing this product, it will spark children’s creativity through craft-making and skill-building. Purchase our craft kits for your children or any child within your network today through our website! At Crafting’s Joy, our focus on sustainability and philanthropy allows us to spark children’s creativity through craft-making and skill-building. \n Won 3rd place among 15 teams in Junior Achievement BC's Battle of the Ads awards.",
    links: [
        ["Crafting's Joy Battle of the Ads 2021", 'https://youtu.be/fHYpjHbwilM'],
        ["Website", 'https://www.craftingsjoy.com/'],
        ["Facebook", 'https://www.facebook.com/craftings.joy'],
        ["Instagram", "https://www.instagram.com/craftingsjoy"],

    ]
},
{
    id: 14,
    img: upcyc,
    title: "UpCyc",
    category:['Entrepreneurship/Hackathons'],
    description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment. \n Won 1st place among 15 teams in Junior Achievement BC's Battle of the Ads awards.",
    link: [
        ["UpCyc Battle of the Ads 2021",'https://youtu.be/fHYpjHbwilM'],
        ["Prototype", 'https://www.figma.com/proto/JaMmkZQROcOKByjM2eFVkt/upcyc?node-id=3%3A15&scaling=scale-down'],
        ["Instagram", "https://www.instagram.com/up.cyc"],
        ["Facebook" , "https://www.facebook.com/upcyc.app.1"],
        ["Website", "https://sites.google.com/view/upcyc/home"]
    ]
},
{
    id: 15,
    img: battle,
    title: "Battleship Game",
    category:['Technical Projects', 'Javascript', 'HTML', 'CSS'],
    description: "Built a battleship game using Javascript, HTML, CSS. Followed Ania Kubow's Tutorial on Youtube.",
    links: [
        ['Link to game','https://chloe2407.github.io/battleship/'],
    ]
},
{
    id: 16,
    img: c3dweb,
    title: "C3D Summer Camp Webpage",
    category:['Technical Projects', 'HTML', 'CSS', 'Javascript', 'ReactJS', 'Github', 'Featured'],
    description: "Worked with CodeCa to help build their website pages using HTML, CSS, Javascript, ReactJS",
    links: [
        ['C3D SummerCamp Webpage', 'https://summercamp.c3d.io/']
    ]
},
{
    id: 17,
    img: lineplot,
    title: "r/HowCovidImpactsMentalHealth",
    category:['Technical Projects', 'Python', 'Github'],
    description: "Worked with peers in CSC110 to find the relationship bewtween Covid-19 and Mental Health. Using Python libraries like Pandas, Matplotlib, Numpy, Scikit-learn, we analyzed and graphed how social media reveals the impacts of COVID-19 on mental health.",
    links: [
        ['PDF of project' , csc110proj],
        ['Project Github' , 'https://github.com/helen-li/r-covid19mentalhealth']
    ]
},
{
    id: 18,
    img: ribosoma,
    title: "Ribosoma Biolabs",
    category:['Entrepreneurship/Hackathons'],
    description: "In the U.S. alone, 109,000 people are waiting for organ transplants, while only 39,000 transplants were performed in 2020. There is also a 50% chance that the body will reject the organ within 10 years of transplantation. To combat this problem, my team had three weeks to research, ideate, and create Ribosoma Biolabs, a moonshot company that uses personalized mRNA therapeutics and DNA hydrogels to regenerate damaged organs, eradicating the need for transplants. Our vision is to create a world where the damage from diseases can be repaired instead of having to be replaced by a transplant. With Ribosoma, we hope to reinvent the standard of care with mRNA regenerative therapeutics.",
    links: [ 
        ['Website', "https://chloe2407.github.io/ribosoma/"],
    ]
},
{
    id: 19,
    img: uniplanit,
    title: "UniPlanit",
    category:['Entrepreneurship/Hackathons', 'Technical Projects', 'Website', 'ReactJS', 'Github', 'Featured'],
    description: "UniPlanit's intelligent algorithm generates your best schedules for you. We help university students produce a customised timetable satisfying their needs for desired lectures, reserved break times, having classes with friends, and many more. Worked a group of 4 other students over the summer to create a schedule planner.",
    links: [
        ['Website','https://www.uniplanit.com']
    ]
},
{
    id: 20,
    img: petudier,
    title: "Pétudier",
    category:['Entrepreneurship/Hackathons', 'Technical Projects', 'Website', 'HTML', 'CSS', 'Github', 'JavaScript'],
    description: "Pétudier aims to aid students in becoming more productive by blocking out distracting websites when it's time to study. It promotes self-improvement and building effective time management.",
    links: [
        ['Demo Video','https://www.youtube.com/watch?v=Wbbj37xxTjQ&t=36s']
    ]
},
{
    id: 21,
    img: uoftinder,
    title: "UofTinder",
    category:['Entrepreneurship/Hackathons', 'Technical Projects', 'Mobile App', 'Java', 'Firebase', 'Android', 'Github', 'Featured'],
    description: "Introducing UofTinder, a social networking Android application built by a group of UofT students. Inspired by Tinder, we wanted to create an application with more options in terms of the type of relationships people may want to build with others. The program offers users the opportunity to either look for their significant other, friends, or academic partners. Then, a compatibility algorithm analyzes certain profile metrics (e.g., hobbies and interests, sexual orientation, academic focuses) to recommend potential matches to people based on their calculated compatibility. If two people match with each other through this selection process, they proceed to a chat feature where they have the opportunity to talk and get to know each other more. Some design patterns that we implemented within our project include Model View Presenter (MVP), Façade, Observer, and Dependency Injection.",
    links: [
        ['Github Project','https://github.com/CSC207-2022F-UofT/course-project-group-80']
    ]
},
{
    id: 22,
    img: breakout,
    title: "Breakout",
    category:['Technical Projects', 'Game', 'Assembly', 'Featured'],
    description: "Traditional Breakout Game built using Assembly Language and MIPS Simulator.",
    links: [
        ['Game Walkthrough','https://www.loom.com/share/a138b08c4120449ab8d141c8fd88be07'],
        ['Game Description PDF', csc258proj]
    ]

},
{
    id: 23,
    img: patientapp,
    title: "Patient App",
    category: ['Technical Projects', 'Mobile App', 'Flutter', 'Firebase', 'Dart', 'Github', 'Featured'],
    description: "A Flutter Patient App that allows patients to log their health patterns for improved health plans.",
    links: [
        ['Video Demo of App (not all features accessible)', bcrenal]
    ]
    
},
{
    id: 24,
    img: aireflectionarticle,
    title: "I've always been interested in Artificial Intelligence",
    category: ['Newsletters/Article Writing', 'Featured'],
    description: "Reflection on how my interest in artificial intelligence originated",
    links: [
        ['Link to Article', "https://medium.com/@chloelam2407/ive-always-been-fascinated-by-artificial-intelligence-38717afbc3f0"]
    ]
    
}

]
        
}

export default data;


