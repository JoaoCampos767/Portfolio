import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "João Pedro ",
    lastName: "Piai de Campos",
    initials: "jp", 
    position: "Analista de Desenvolvimento de Sistema",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        {
            emoji: "💼",
            text: "Analista de Desenvolvimento de Sistema na MBM Solutions"
        },
        {
            emoji: "📧",
            text: "joao.campos767@hotmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/joaopedro.campos.520/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/_juuaum/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/JoaoCampos767",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/jo%C3%A3o-pedro-campos-169900234/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
    bio: "Hello! I'm John. I'm a systems engineer for Google. I studied CompSci at Harvard, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3'],
            exposedTo: ['nodejs', 'python', 'nexjs', 'react']
        }
    ,
}