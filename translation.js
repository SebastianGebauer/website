
        const translation = {
            en: {
                english: "English",
                german: "German",
                slovak: "Slovak",
                welcome: "Welcome to my Page!"
            },
            de: {
                english: "English",
                german: "Deutsch",
                slovak: "Slowakisch",
                welcome: "Willkommen auf meiner Seite!"
            },
            sk: {
                english: "Anglictina",
                german: "Nemcina",
                slovak: "Slovencina",
                welcome: "Vitajte na mojej Stranke!"
            }
        };

        function translateLang() {
            const language = document.getElementById('language').value;
            const elementsToTranslate = document.querySelectorAll('[data-translate]');

            elementsToTranslate.forEach (element => {
                const translateKey = element.getAttribute('data-translate');
                if(translation[language][translateKey]) {
                    element.textContent = translation[language][translateKey];
                }
            });
        }

        window.onload = function() {
            document.getElementById('language').value = 'en';
            translateLang();

            var viewport = document.querySelector("meta[name=viewport]");
            if(viewport) {
                viewport.setAttribute("content", "width=device-width, initial-scale=1.0");
            }
        };
    