import srcURLs from "../data/srcURLs.js";

// Featured project IDs (displayed in Featured Works carousel)
export const featuredProjectIds = [22, 21, 10, 13, 20]; // VRRC, Patient App, UCLit, UofTinder, CodeCa

const portfolio = [
    {
        id: 1,
        title: "Computing Overload: Chloe's Month Uncovered!",
        description: "In 2020, I created a **monthly newsletter** to hold myself accountable and track my progress. I shared my journey with others who might be interested in following along.",
        category: ['Miscellaneous', 'Archived'],
        image: srcURLs.newsletter.newsletter,
        gallery: [
            { 
                name: "September 2020", 
                link: 'https://chloelam.substack.com/p/a-new-journey-awaits'
            },
            { 
                name: "October 2020",
                link: 'https://chloelam.substack.com/p/reflectober'
            },
            { 
                name: "November 2020",
                link: 'https://chloelam.substack.com/p/no-excuse-vember'
            },
            { 
                name: "December 2020",
                link: 'https://chloelam.substack.com/p/remember-december'
            },
            { 
                name: "January 2021",
                link: 'https://chloelam.substack.com/p/a-genuine-january'
            },
            { 
                name: "February 2021",
                link: 'https://chloelam.substack.com/p/an-extraordinary-february'
            },
            { 
                name: "March 2021",
                link: 'https://chloelam.substack.com/p/march-madness'
            },
            { 
                name: "April 2021",
                link: 'https://chloelam.substack.com/p/aprils-narrative'
            }
        ]
    },
    {
        id: 2,
        title: "Projects from The Knowledge Society (TKS)",
        description: "While participating in **The Knowledge Society's Accelerator Program**, I took part in various events and collaborated with like-minded peers on projects spanning **longevity**, **quantum computing**, **hackathons**, and **moonshot thinking**.",
        category: ['Miscellaneous', 'Archived'],
        image: srcURLs.tks.tks,
        gallery: [
            {
                title: 'Stem Cells',
                description: "During the Longevity Session, my group and I explored stem cells to treat patients with Alzheimer's Disease.",
                image:srcURLs.tks.stemcells,
                gallery:[
                    {
                        name: 'One-Pager',
                        link: 'https://drive.google.com/file/d/1G8ItgancmBN3yGgfO6Qm-hS7CLYmWg-G/view?usp=sharing'
                    }
                ] 
            },
            {
                title: 'Psi Quantum',
                description: "During the Quantum Computing Session, my group and I created a one-pager discussing quantum algorithms and companies like PsiQuantum.",
                image:srcURLs.tks.psiquantum,
                gallery: [
                    {
                        name: 'One-Pager',
                        link: 'https://drive.google.com/file/d/15faBHVOCB_7zBZ5VVeWekW4cmBuyNoW_/view?usp=sharing'
                    }
                ]
            },
            {
                title: 'Haptics: Lorem Semper',
                description: 'During a 24-hour West Coast Hackathon, my group and I made a one-pager and pitch video on Lorem Semper, a haptic system that uses machine-learning algorithms to improve rehabilitative therapies.',
                image: srcURLs.tks.loremsemper.loremsemper,
                gallery: [
                    {
                        name: 'One-Pager',
                        link: 'https://drive.google.com/file/d/1om8V1_LI5IuyOsHV-BA54Ax4cAldjKYg/view?usp=sharing'
                    },
                    {
                        name: 'Pitch Video',
                        link: 'https://www.loom.com/share/091bffdd9f9a4ea2a17740271959567a'
                    } 
                ]
            },
            {
                title: 'City Challenge: 501cTHREE Recommendation Deck',
                description: 'My group and I built a four-part recommendation for 501cTHREE, aiming to get one out of 100 homes within a community to use 501cTHREE’s water quality monitoring solution as a component of their Water Box program, in response to the Flint Water Crisis (2014).',
                image: srcURLs.tks.citychallenge,
                gallery: [
                    {
                        name: 'Recommendation Slide Deck',
                        link: 'https://drive.google.com/file/d/1ToDkFTX3Bsc1MSUWK_LaWLQaHLMlmT4E/view?usp=sharing'
                    },
                    {
                        name: 'Recommendation Pitch Deck',
                        link: 'https://docs.google.com/presentation/d/1XEexoK-VjxQZzFFilqifPqOYGAdkzsxP0L-842riigI/edit?usp=sharing'
                    } 
                ]
            },
            {
                title: "Global UN Challenge: Increasing Women's Employment in the Philippines",
                description: "My team focused on the gender wage gap and developed a slide deck recommending that the UN boost women’s employment in the Philippines' digital economy by 2026.",
                image: srcURLs.tks.unchallenge,
                gallery: [
                    {
                        name: 'Recommendation Slide Deck',
                        link: 'https://firebasestorage.googleapis.com/v0/b/tks-life-prod.appspot.com/o/items%2FV4TVmZkjwJc3NU8KYapnVkV6yDo1%2FAngelina%2C%20Chloe%2C%20Jalisha%2C%20Julia%2C%20Macy%20-%20UN%20Recommendation%20Deck.pdf?alt=media&token=c75f327c-7b38-40f7-a16a-dee25c6faeb3'
                    }, 
                ]
            },
            {
                title: "AI Hackathon: PlanIt",
                description: "Did you know that a staggering 50 percent of perfect food is thrown out while still edible? Well...I didn't either. Food waste is such a big problem in both developing and developed countries. It is one of the key factors that lead to poverty and overpopulation in developing countries. In developed countries, over 43 billion pounds of food in near-perfect condition get thrown out every year. \n In order to reduce this alarming percentage in developed countries, our team created PlanIt, an app that scans fruit or vegetables, using AI technology like Computer Vision and Convolutional Neural Networks, to tell consumers or grocery store owners an accurate expiration date instead of relying on the store’s sell-by stickers, which can be oftentimes inaccurate. This reduces food waste in consumer buying and creates more informative buying decisions, while also allowing grocery store owners to sell more produce as they reduce food waste.",
                image: srcURLs.tks.planit,
                gallery: [
                    {
                        name: 'Article',
                        link: 'https://www.canva.com/design/DAEK4d53B5M/weozv84Ywph9N4E-pkNstA/view?utm_content=DAEK4d53B5M&utm_campaign=designshare&utm_medium=link&utm_source=viewer'
                    },
                    {
                        name: 'Video',
                        link: 'https://www.loom.com/share/0df580d5a28347dea0adbb8db9a15a20'
                    },
                    {
                        name: 'Prototype',
                        link:'https://www.figma.com/file/fjEfFMNpGCUZFX2laQ5yIY/TKS-AI-Hackathon?node-id=0%3A1'
                    }
                ]
            },
            {
                title: "Using 4D Printing to create transportable homes",
                description: "My group and I pitched the idea of using 4D printing to create transportable houses that could fold into a small, suitcase-like container, facilitating the process of building cheaper, safer, and stronger homes for the millions in need.",
                image: srcURLs.tks.fourPrint,
                gallery: [
                    {
                        name: 'Presentation',
                        link: 'https://youtu.be/3fpHT1m7XKU'
                    }
                ]
            },
            {
                title: "Nanotechnology and Food",
                description: "During one of the TKS sessions, my team (Ava, Angelina, and Angela) explored how nanotechnology is being used in the food industry. Here is a video summarizing our findings.",
                image: srcURLs.tks.nanotech,
                gallery: [
                    {
                        name: 'Video',
                        link: 'https://youtu.be/9vonCFZgs-s'
                    }
                ]
            },
            {
                title: "Ribosoma Biolabs",
                description: "In the U.S. alone, 109,000 people are waiting for organ transplants, while only 39,000 transplants were performed in 2020. There is also a 50% chance that the body will reject the organ within 10 years of transplantation. To combat this problem, my team had three weeks to research, ideate, and create Ribosoma Biolabs, a moonshot company that uses personalized mRNA therapeutics and DNA hydrogels to regenerate damaged organs, eradicating the need for transplants. Our vision is to create a world where the damage from diseases can be repaired instead of having to be replaced by a transplant. With Ribosoma, we hope to reinvent the standard of care with mRNA regenerative therapeutics.",
                image: srcURLs.tks.ribosoma,
                gallery: [
                    {
                        name: 'Website',
                        link: "https://chloe2407.github.io/ribosoma/"
                    }
                ]
            },


        ]
    },
    {
        id: 3,
        title: "Articles",
        description: "**Medium articles** I've written on topics that interest me, including **personal growth**, **AI**, and **machine learning**.",
        category: ['Miscellaneous'],
        image: srcURLs.articles.mediumarticles,
        gallery: [
            {
                title: "The importance of asking 'Why?'",
                description: "",
                image:srcURLs.articles.growtharticle,
                gallery:[
                    {
                        name: 'Article',
                        link: 'https://chloelam2407.medium.com/the-importance-of-asking-why-62da718c903d'
                    }
                ] 
            },
            {
                title: "‘Can machines think?’ — Alan Turing",
                description: "An article detailing how exactly AI and Machine Learning work.",
                image:srcURLs.articles.aiarticle,
                gallery:[
                    {
                        name: 'Article',
                        link: 'https://medium.datadriveninvestor.com/can-machines-think-alan-turing-4ce34fae23ee'
                    }
                ] 
            },
            {
                title: "I've always been interested in Artificial Intelligence",
                description: "Reflection on how my interest in artificial intelligence originated.",
                image:srcURLs.articles.aireflectionarticle,
                gallery:[
                    {
                        name: 'Article',
                        link: 'https://medium.com/@chloelam2407/ive-always-been-fascinated-by-artificial-intelligence-38717afbc3f0'
                    }
                ] 
            }
        ]
    },
    {
        id: 4,
        title: "Crafting's Joy",
        description: "**Crafting's Joy** is a student initiative I co-founded to spark children's creativity through craft-making. We provide **craft kits** with five animal-themed activities—especially suitable for children at home during COVID. Our focus on **sustainability and philanthropy** drives our mission. Won **3rd place** among 15 teams in **Junior Achievement BC's Battle of the Ads** awards.",
        category: ['Miscellaneous', 'Archived'],
        image: srcURLs.craftingsjoy.craftingsjoy,
        gallery: [
            {
                title: "Battle of the Ads 2021",
                description: "Won 3rd place among 15 teams in Junior Achievement BC's Battle of the Ads awards.",
                image:srcURLs.craftingsjoy.craftingsjoyBOTA,
                gallery:[
                    {
                        name: 'Promo Video',
                        link: 'https://youtu.be/fHYpjHbwilM'
                    }
                ] 
            },
            {
                title: "Social Media",
                description: "At Crafting’s Joy, our focus on sustainability and philanthropy allow us to spark children’s creativity through craft-making and skill building.",
                image:srcURLs.craftingsjoy.craftingsjoyInsta,
                gallery:[
                    {
                        name: 'Instagram',
                        link: 'https://www.instagram.com/craftingsjoy'
                    },
                    {
                        name: 'Facebook',
                        link: 'https://www.facebook.com/craftings.joy'
                    }
                ] 
            },
        ]
    },
    {
        id: 5,
        title: "UpCyc",
        description: "**UpCyc** is a platform that incentivizes people to **upcycle waste** for a better environment. Developed with my **Junior Achievement BC** team.",
        category: ['Miscellaneous', 'Archived'],
        image: srcURLs.upcyc.upcyc,
        gallery: [
            {
                title: "Battle of the Ads 2021",
                description: "Won 1st place among 15 teams in Junior Achievement BC's Battle of the Ads awards.",
                image:srcURLs.upcyc.upcycBOTA,
                gallery:[
                    {
                        name: 'Promo Video',
                        link: 'https://www.youtube.com/watch?v=jgZ_KSEq04E'
                    }
                ] 
            },
            {
                title: "National Company of the Year 2021",
                description: "Video submission for Junior Achievement (JA) National Company of the Year 2021 award.",
                image:srcURLs.upcyc.upcycNCOY,
                gallery:[
                    {
                        name: 'Video',
                        link: 'https://www.youtube.com/watch?v=fZcwbtks0F0'
                    }
                ] 
            },
            {
                title: "Prototype",
                description: "Built an interactive prototype for UpCyc on Figma.",
                image:srcURLs.upcyc.upcycPrototype,
                gallery:[
                    {
                        name: 'Prototype',
                        link: 'https://www.figma.com/proto/JaMmkZQROcOKByjM2eFVkt/upcyc?node-id=3%3A15&scaling=scale-down'
                    }
                ] 
            },
            {
                title: "Website",
                description: "Website detailing the team and mission behind UpCyc.",
                image:srcURLs.upcyc.upcycWebsite,
                gallery:[
                    {
                        name: 'Website',
                        link: 'https://sites.google.com/view/upcyc/home'
                    }
                ] 
            },
            {
                title: "Social Media",
                description: "UpCyc is a platform that incentivizes and inspires people to commit to upcycling waste towards a better environment.",
                image:srcURLs.upcyc.upcycInsta,
                gallery:[
                    {
                        name: 'Instagram',
                        link: 'https://www.instagram.com/up.cyc'
                    },
                    {
                        name: 'Facebook',
                        link: 'https://www.facebook.com/upcyc.app.1'
                    }
                ] 
            },
        ]
    },
    {
        id: 6,
        title: "Brainer",
        description: "While participating in **Junior Achievement BC's** program, I formed a group with **six other high school students**. We developed **Brainer**—a peer-to-peer platform connecting high school students with **mentors** for guidance on **university applications**, **scholarships**, and finding their first job or internship.",
        category: ['Miscellaneous', 'Archived'],
        image: srcURLs.brainer.brainer,
        gallery: [
            {
                title: "2020 Promo Video",
                description: "Brainer is a peer-to-peer platform that connects ambitious high school students with mentors to provide guidance and resources in applying to universities, scholarships, and finding their first job/internship.",
                image:srcURLs.brainer.brainerPromo,
                gallery:[
                    {
                        name: 'Video',
                        link: 'https://youtu.be/6JEh_3xDmnc'
                    }
                ] 
            },
            {
                title: "Team Journey",
                description: "Learn more about the process behind developing the Brainer Company Prototype!",
                image:srcURLs.brainer.brainerTeam,
                gallery:[
                    {
                        name: 'Video',
                        link: 'https://www.youtube.com/watch?v=E4xilZ1y77A'
                    }
                ] 
            },
            {
                title: "Prototype",
                description: "Built an interactive prototype for Brainer on Adobe XD.",
                image:srcURLs.brainer.brainerPrototype,
                gallery:[
                    {
                        name: 'Prototype',
                        link: 'http://bit.ly/brainercompany'
                    }
                ] 
            },
            {
                title: "Website",
                description: "Website detailing the team and mission behind Brainer.",
                image:srcURLs.brainer.brainerWebsite,
                gallery:[
                    {
                        name: 'Website',
                        link: 'https://2116894.wixsite.com/brainer'
                    }
                ] 
            },
            {
                title: "Social Media",
                description: "Brainer is a peer-to-peer platform that connects ambitious high school students with mentors to provide guidance and resources in applying to universities, scholarships, and finding their first job/internship.",
                image:srcURLs.upcyc.upcycInsta,
                gallery:[
                    {
                        name: 'Instagram',
                        link: 'https://www.instagram.com/brainercompany/'
                    },
                    {
                        name: 'Facebook',
                        link: 'https://www.facebook.com/upcyc.app.1'
                    }
                ] 
            },
        ]
    },
    {
        id: 7,
        title: "Battleship Game",
        description: "A **Battleship** game built with **JavaScript**, **HTML**, and **CSS**, following Ania Kubow's YouTube tutorial.",
        type: "Game",
        category: {
            'Languages': ['JavaScript', 'HTML', 'CSS'],
            'Frameworks / Libraries': [],
            'Tools': ['Github', 'Git'],
            'Technologies': []
        },
        image: srcURLs.battle,
        gallery: [
            {
                name: 'Game',
                link: 'https://chloe2407.github.io/battleship/'
            },
            {
                name: 'Github',
                link: 'https://github.com/chloe2407/battleship'
            }
         
        ]
    },
    {
        id: 8,
        title: "UniPlanit",
        description: "**UniPlanit** uses an **intelligent algorithm** to generate optimal schedules for university students—satisfying preferences for desired lectures, break times, and classes with friends. Built with **four other students** over the summer.",
        type: "Web App",
        category: {
            'Frameworks / Libraries': [],
            'Tools': ['Git', 'Github', 'ReactJS'],
            'Technologies': []
        },
        image: srcURLs.uniplanit,
        gallery: [
            {
                name: 'Website',
                link: 'https://chloe2407.github.io/UniPlanit/'
            },
            {
                name: 'Github',
                link: 'https://github.com/chloe2407UniPlanit'
            }
        ]
    },
    {
        id: 9,
        title: "Pétudier",
        description: "**Pétudier** helps students become more productive by **blocking distracting websites** during study time. Promotes **self-improvement** and effective **time management**.",
        type: "Web App",
        category: {
            'Languages': ['HTML', 'CSS', 'JavaScript'],
            'Frameworks / Libraries': [],
            'Tools': ['Git', 'Github', 'ReactJS'],
            'Technologies': []
        }, 
        image: srcURLs.petudier,
        gallery: [
            {
                name: 'Demo',
                link: 'https://www.youtube.com/watch?v=Wbbj37xxTjQ&t=36s'
            },
            {
                name: 'Github',
                link: 'https://github.com/chloe2407UniPlanit'
            }
        ]
    },
    {
        id: 10,
        title: "UCLit Website (University College Literary and Athletic Society, UofT)",
        description: "During the **2022-2023 school year**, I maintained **databases** and ensured the **UCLit's** events and announcements are updated on their website. As **Web Coordinator**, I explored redesigning the website for **accessibility and appeal**.",
        type: "Website",
        category: {
            'Languages': ['HTML', 'CSS', 'JavaScript'],
            'Frameworks / Libraries': [],
            'Tools': ['Git', 'Github'],
            'Technologies': []
        }, 
        image: srcURLs.uclit,
        gallery: [
            {
                name: 'Website',
                link: 'https://uclit.ca/'
            }
        ]
    },
    {
        id: 11,
        title: "LockIn (formerly ASocial)",
        description: "A **mobile application** built to help people achieve their full potential in **life**, **career**, and **relationships** by providing tools to combat **addictive technology** usage.",
        type: "Mobile App",
        category: {
            'Languages': ['Dart'],
            'Frameworks / Libraries': ['Flutter'],
            'Tools': ['Git', 'Github'],
            'Technologies': []
        }, 
        image: srcURLs.asocial,
        gallery: [
            {
                name: 'Website',
                link: 'https://tryasocial.com/'
            }
        ]
    },
    {
        id: 12,
        title: "r/HowCovidImpactsMentalHealth (CSC110 Final Report)",
        description: "A **CSC110 final report** analyzing the relationship between **COVID-19 and mental health**. Using **Python** libraries (Pandas, Matplotlib, NumPy, Scikit-learn), we analyzed and visualized how **social media data** reveals these impacts.",
        type: "Research",
        category: {
            'Languages': ['Python'],
            'Frameworks / Libraries': ['Pandas', 'Matplotlib', 'Numpy', 'Scikit-learn'],
            'Tools': ['Git', 'Github'],
            'Technologies': []
        }, 
        image: srcURLs.csc110.lineplot,
        gallery: [
            {
                name: 'Final Report',
                link: srcURLs.csc110.csc110
            }
        ]
    },
    {
        id: 13,
        title: "UofTinder (CSC207 Final Project)",
        description: "**UofTinder** is a social networking **Android app** built by a group of U of T students. Inspired by Tinder, it offers users the chance to find their significant other, **friends**, or **academic partners**. A **compatibility algorithm** analyzes profile metrics to recommend matches. We implemented **MVP**, **Façade**, **Observer**, and **Dependency Injection** patterns, with **Firebase** for the backend and **unit tests** across UI and database layers.",
        type: "Mobile App",
        category: {
            'Languages': ['Java'],
            'Frameworks / Libraries': [],
            'Tools': ['Git', 'Github', 'Firebase'],
            'Technologies': []
        }, 
        image: srcURLs.csc207.uoftinder,
        gallery: [
            {
                name: 'Final Presentation',
                link: srcURLs.csc207.csc207
            },
            {
                name: 'Github',
                link: 'https://github.com/CSC207-2022F-UofT/course-project-group-80'
            }
        ]
    },
    {
        id: 14,
        title: "Breakout (CSC258 Final Project)",
        description: "A traditional **Breakout** game built using **Assembly Language** and the **MIPS Simulator** for CSC258.",
        type: "Game",
        category: {
            'Languages': ['Assembly'],
            'Frameworks / Libraries': [],
            'Tools': ['Git'],
            'Technologies': []
        }, 
        image: srcURLs.csc258.breakout,
        gallery: [
            {
                name: 'Final Report (Game Description)',
                link: srcURLs.csc258.csc258
            },
            {
                name: 'Game Walkthrough',
                link: 'https://www.loom.com/share/a138b08c4120449ab8d141c8fd88be07',
            }
        ]
    },
    {
        id: 15,
        title: "OneOnOne (CSC309 Final Project)",
        description: "**OneOnOne** is a web app that facilitates **one-on-one meetings** between students and professors. Students can **book appointments**, view schedules, and communicate with professors. Built with **ReactJS** and **Django**, with **Postman** for API testing.",
        type: "Web App",
        category: {
            'Languages': ['Python'],
            'Frameworks / Libraries': ['ReactJS', 'Django'],
            'Tools': ['Git', 'Github', 'Postman'],
            'Technologies': []
        }, 
        image: srcURLs.csc309.oneOnOne,
        gallery: [
            {
                name: 'API Documentation',
                link: srcURLs.csc309.csc309
            },
            {
                name: 'Github',
                link: 'https://github.com/chloe2407/oneOnOne',
            }
        ]
    },
    {
        id: 16,
        title: "CSC311 Final Project",
        description: "A **CSC311 final project** that implemented **machine learning algorithms** to predict student correctness on diagnostic questions.",
        type: "Research",
        category: {
            'Languages': ['Python'],
            'Frameworks / Libraries': ['NumPy', 'Scipy', 'Pandas', 'PyTorch'],
            'Tools': ['Git', 'Github'],
            'Technologies': []
        }, 
        image: srcURLs.csc311.graph,
        gallery: [
            {
                name: 'Final Project Report',
                link: srcURLs.csc311.csc311,
            }
        ]
    },
    {
        id: 18,
        title: "Housing Hippos (CSC396 Final Project)",
        description: "**Housing Hippos** empowers students—particularly **first-year students**, **newcomers to Canada**, and those with limited housing knowledge—to navigate the **rental process in Toronto**. We deliver guidance on **tenant rights**, **laws**, **regulations**, and **negotiation strategies**. Developed with four other students for the **University of Toronto Summer Abroad Program (CSC396Y0)**.",
        type: "Prototype",
        category: {
            'Languages': [''],
            'Frameworks / Libraries': [],
            'Tools': ['Figma'],
            'Technologies': []
        }, 
        image: srcURLs.csc396.housinghippos,
        gallery: [
            {
                name: 'Final Presentation',
                link: srcURLs.csc396.csc396,
            }
        ]
    },
    {
        id: 19,
        title: "CampusEats (CSC494 Final Project)",
        description: "A **CSC494 final project** focused on **campus food options** and dining.",
        type: "Mobile App",
        category: {
            'Languages': [],
            'Frameworks / Libraries': [],
            'Tools': ['Figma', 'Git', 'Github'],
            'Technologies': ['Flutter']
        }, 
        image: srcURLs.csc494.campuseats,
        gallery: [
            {
                name: 'Final Report',
                link: srcURLs.csc494.csc494,
            }
        ]
    },
    {
        id: 20,
        title: "CodeCa: C3D Summer Camp Webpage",
        description: "During a **4-month apprenticeship** with **CodeCa** in 2020, I built the **C3D summer camp webpage** (HTML/CSS) and contributed to website pages in **ReactJS**. I **co-taught coding classes**, developed educational content, filmed a **promotional video** for the camps, and provided feedback on **Java** and **Blockly** lesson plans from both student and instructor perspectives.",
        type: "Website",
        category: {
            'Languages': ['HTML', 'CSS', 'Javascript'],
            'Frameworks/Libraries': [],
            'Tools': ['ReactJS', 'Git', 'Github', 'Trello'],
            'Technologies': []
        },
        image: srcURLs.codeca,
        gallery: [
            {
                name: 'C3D SummerCamp Webpage',
                link: 'https://summercamp.c3d.io/'
            }
         
        ]
    },
    {
        id: 21,
        title: "Patient App",
        description: "A **Flutter Patient App** developed for **BC Renal** (Provincial Health Services Authority) that allows patients to **log health patterns** for improved treatment plans. During my **4-month internship**, I implemented **SOLID** and **Clean Architecture**, collaborated with a **UX designer**, created **comprehensive documentation**, and **presented monthly progress** to the development team.",
        type: "Mobile App",
        category: {
            'Languages': ['Dart'],
            'Frameworks/Libraries': ['Flutter'],
            'Tools': ['Firebase', 'Git', 'Gitlab', 'Jira', 'Confluence'],
            'Technologies': ['OAuth']
        },
        image: srcURLs.bcrenal.patientapp,
        gallery: [
            {
                name: 'Video Demo (not all features accessible)', 
                link: srcURLs.bcrenal.bcrenal
            }
         
        ]
    },
    {
        id: 22,
        title: "Volcano Risk Reduction in Canada (VRRC)",
        description: "For **eight months** at **Natural Resources Canada (NRCan)**, I developed tools for **satellite-based volcanic monitoring** in Canada. I led a **UI design session** with over eight scientists to build an observation log tab in **Figma** and **Dash/Python**—improving dashboard usability by **25%**. I enhanced the dashboard with **Government of Canada branding**, **glacier footprint** integration, and a streamlined summary table. I developed a **scalable real-time inference pipeline** for RCM InSAR data using **Docker** and **AWS**, optimizing **ML models** for automated volcanic unrest detection. Continued through **CSC495** at U of T in winter 2025.",
        type: "Web App",
        category: {
            'Languages': ['Python'],
            'Frameworks/Libraries': [],
            'Tools': ['Git', 'Github', 'Docker'],
            'Technologies': ['SSH', 'Linux', 'AWS']
        },
        image: srcURLs.vrrc.vrrc,
        gallery: [
            {
                name: 'Workbench Github', 
                link: 'https://github.com/chloe2407/Volcanic-Interpretation-Workbench'
            },
            {
                name: "Volcano Deformation Detection Github",
                link: 'https://github.com/chloe2407/volcano_deform_detection'

            },
            {
                name: "Snippet of Canadian Space Agency (CSA)'s November 2024 Radarsat Constellation Mission (RCM) Newsletter",
                link: srcURLs.vrrc.csa_rcm
            },
            {
                name: "Final Presentation Slides (in association with CSC495)",
                link: srcURLs.vrrc.csc495.final_presentation
            },
            {
                name: "Final Presentation Video (in association with CSC495)",
                link: "https://youtu.be/J9CrfHIND1A"
            },
            {
                name: "Final Report (in association with CSC495)",
                link: srcURLs.vrrc.csc495.final_report
            }
         
        ]
    },
    {
        id: 23,
        title: "HoroLogic",
        description: "**HoroLogic** helps instructors run **fair, efficient presentation sessions**. Upload a CSV of teams, auto-generate and randomize the queue, track states (pending → queued → presenting → done), and run a **dual-phase timer** (presentation + Q&A) with clear visual feedback.",
        type: "Web App",
        category: {
            'Languages': ['TypeScript', 'JavaScript'],
            'Frameworks/Libraries': ['React 19', 'React Router 7', 'Vite 7', 'MUI 7', 'Emotion', 'Tailwind CSS 4'],
            'Tools': ['Git', 'Github', 'Prisma ORM', 'Multer', 'GitHub Actions'],
            'Technologies': ['Node.js', 'Express.js', 'Docker', 'Google Cloud Run', 'Vercel', 'Supabase PostgreSQL']
        },
        image: srcURLs.csc491.horologic,
        gallery: [
            {
                name: 'Live Demo',
                link: 'https://horologic.vercel.app/'
            },
            {
                name: 'Promo Video',
                link: 'https://drive.google.com/file/d/1nAGaFe3Fnp8ticgs_7hdcalcIBuMfqHv/view?usp=sharing'
            },
        ]
    },
    {
        id: 24,
        title: "Sentinel — Clinical Symptom Summary",
        description: "**Sentinel** is a clinical symptom summary web app that helps healthcare providers and patients track and summarize symptom information. Integrates **LLM API calls** to **Gemini** and **Meta Llama** for intelligent summarization.",
        type: "Web App",
        category: {
            'Languages': [],
            'Frameworks/Libraries': ['Next.js'],
            'Tools': ['Git', 'Github', 'GitHub Actions'],
            'Technologies': ['FastAPI', 'MongoDB', 'Docker', 'Vercel', 'Google Cloud Run', 'Gemini', 'Meta Llama']
        },
        image: srcURLs.csc491.sentinel,
        gallery: [
            {
                name: 'Live App',
                link: 'https://oribyte-sentinel.vercel.app/login'
            }
        ]
    }
  ];

export default portfolio;


