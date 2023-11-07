import self from "../img/self.gif"
import node from "../img/node-project.webp"
import pricenuxt from "../img/pricenuxt.png"
import petshop from "../img/pet.png"
import prismapost from "../img/prisma-ts-nest.png"

export let colors = ["#a8a927", "#485d18"];

export const info = {
    firstName: "Matheus",
    lastName: "Patrick",
    initials: "m", 
    position: "a Full Stack Developer",
    selfPortrait: self,  
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🇧🇷',
            text: 'based in the BR',
        },
        {
            emoji: "💼",
            text: "full stack developer at ezok"
        },
        {
            emoji: "📧",
            text: "mathtg2@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/matheustavaresz",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/matheus-patrickz/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! My name is Patrick, and I'm a web developer at Ezok. I'm currently studying Data Science at Descomplica. I enjoy long walks on the beach and hold the belief that artificial intelligence will inevitably govern our future. I would be a valuable addition to your team!",
    skills:
        {
            proficientWith: ['javascript', 'typescript', 'react', 'vue', 'nuxt', 'nest', 'aws', 'bootstrap', 'html5', 'css3'],
            exposedTo: ['nodejs', 'docker', 'angular', 'azure']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'games',
            emoji: '🎮'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
    ],
    portfolio: [ 
        {
            title: "Node Scraper",
            source: "https://github.com/MatheusTavaresz/node-scraper/", 
            image: node
        },
        {
            title: "Course CRUD NestJS",
            source: "https://github.com/MatheusTavaresz/NestJS-CourseCRUD",
            image: prismapost, 
        },
        {
            title: "Nuxt Scraper",
            live: "https://price-search-90rkul9a1-matheustavaresz.vercel.app/",
            source: "https://github.com/MatheusTavaresz/price-search-nuxt",
            image: pricenuxt
        },
        {
            title: "Landing Page Petshop",
            live: "https://desafio-petshop.vercel.app/",
            source: "https://github.com/MatheusTavaresz/desafio-petshop",
            image: petshop
        }
    ]
}
