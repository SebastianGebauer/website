
const translation = {
    en: {
        english: "English",
        german: "German",
        slovak: "Slovak",
        welcome: "Welcome to my personal website!",
        welcomeText: "Here, you'll find insights into my career, skills and hobbies. <br>Explore my journey and discover what drives my passion for technology and innovation"
        , introduction: "Introduction"
        , introductionText1: "Hello! My name is Sebastian Gebauer, a tech enthusiast with a love for solving complex problems. <br> This website serves as a showcase of my work, achievments and aspirations."
        , introductionText2: "I enjoy diving into software development projects that challenge my skills <br>and allow me to grow as an IT professional. Feel free to explore my portfolio and get to know me better!"

    },
    de: {
        english: "English",
        german: "Deutsch",
        slovak: "Slowakisch",
        welcome: "Willkommen auf meiner persönlichen Website!",
        welcomeText: "Hier erhalten Sie Einblicke in meine Karriere, Fähigkeiten und Interessen. <br>Entdecken Sie meinen Werdegang und erfahren Sie, was meine Leidenschaft für Technologie und Innovation antreibt.",
        introduction: "Einleitung",
        introductionText1: "Hallo! Mein Name ist Sebastian Gebauer, ein Technikbegeisterter, der gerne komplexe Probleme löst. <br> Diese Website ist eine Präsentation meiner Arbeit, meiner Erfolge und meiner Ziele.",
        introductionText2: "Ich freue mich, an Softwareentwicklungsprojekten zu arbeiten, die meine Fähigkeiten herausfordern <br> und mir helfen, als IT-Profi zu wachsen. Schauen Sie sich mein Portfolio an und lernen Sie mich besser kennen!"
    },
    sk: {
        english: "Angličtina",
        german: "Němčina",
        slovak: "Slovenčina",
        welcome: "Vitajte na mojej osobnej webovej stránke!",
        welcomeText: "Tu nájdete informácie o mojej kariére, zručnostiach a záľubách. <br>Objavte moju cestu a zistite, čo ma motivuje k vášne pre technológie a inovácie.",
        introduction: "Úvod",
        introductionText1: "Ahoj! Volám sa Sebastian Gebauer, nadšenec do technológií, ktorý rád rieši zložité problémy. <br> Táto webová stránka predstavuje moju prácu, úspechy a ciele.",
        introductionText2: "Rád sa zapájam do projektov v oblasti vývoja softvéru, ktoré ma vyzývajú  a pomáhajú mi rásť ako IT profesionál. <br> Prezrite si moje portfólio a spoznajte ma lepšie!"
    }
};

function translateLang() {
    const language = document.getElementById('language').value;
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    elementsToTranslate.forEach(element => {
        const translateKey = element.getAttribute('data-translate');
        if (translation[language][translateKey]) {
            element.innerHTML = translation[language][translateKey];
        }
    });
}

window.onload = function () {
    document.getElementById('language').value = 'en';
    translateLang();

    var viewport = document.querySelector("meta[name=viewport]");
    if (viewport) {
        viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
    }
};
