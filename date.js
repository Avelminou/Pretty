function tempsEcouleDepuis(dateString) {
      const maintenant = new Date();
      const dateDonnee = new Date(dateString);
      const ecart = maintenant - dateDonnee;

      const secondes = Math.floor(ecart / 1000);
      const minutes = Math.floor(secondes / 60);
      const heures = Math.floor(minutes / 60);
      const jours = Math.floor(heures / 24);

      if (jours > 0) return `il y a ${jours} jour${jours > 1 ? 's' : ''}`;
      if (heures > 0) return `il y a ${heures} heure${heures > 1 ? 's' : ''}`;
      if (minutes > 0) return `il y a ${minutes} minute${minutes > 1 ? 's' : ''}`;
      return `il y a quelques secondes`;
    }

    // Exemple : date de création d'une publication
    const datePublication = '2025-06-22T16:00:00';
    const element = document.getElementById("temps");
    element.textContent = tempsEcouleDepuis(datePublication);