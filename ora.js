
        let count = 0;
        const maxCount = 100;
        const counterElement = document.getElementById("counter");

        function updateCounter() {
            if (count <= maxCount) {
                counterElement.textContent = count;
                count++;
            } else {
                clearInterval(interval); // ArrÃªte le compteur
            }
        }

        let interval = setInterval(updateCounter, 15000); // Change toutes les 7ms
    