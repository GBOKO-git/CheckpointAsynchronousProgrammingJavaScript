//Une fonction async iterateWithAsyncAwait qui prend un tableau de valeurs et enregistre chaque valeur avec un délai de 1 seconde entre les enregistrements.
const iterateWithAsyncAwait = async (values) => {
  const promises = values.map(async (value) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // délai de 1 seconde
    console.log(value); // Enregistre la valeur (par exemple, dans la console)
  });

  // Attendez que toutes les promesses soient résolues
  await Promise.all(promises);
};

// Tester avec un tableau de valeurs
const values = ["A", "B", "C"];
iterateWithAsyncAwait(values);

/*Créer une fonction asynchrone awaitCall qui simule l'obtention de données à partir d'une API.
 Utilisez await pour attendre la réponse de l'API, puis enregistrez les données. */
const awaitCall = async () => {
  try {
    // Simuler un appel API avec un délai
    const response = await new Promise((resolve) =>
      setTimeout(() => resolve("Données de l'API"), 2000)
    );
    console.log("Données reçues:", response);
  } catch (error) {
    console.error("Erreur lors de l’appel API:", error);
  }
};

awaitCall();

/**une fonction asynchrone concurrentRequests qui effectue deux appels API simultanément en utilisant Promise.all().
 * Enregistrez les résultats combinés une fois les deux requêtes résolues. */
const concurrentRequests = async () => {
  try {
    const apiCall1 = new Promise((resolve) =>
      setTimeout(() => resolve("Données API 1"), 2000)
    );
    const apiCall2 = new Promise((resolve) =>
      setTimeout(() => resolve("Données API 2"), 3000)
    );

    const [result1, result2] = await Promise.all([apiCall1, apiCall2]);
    console.log("Résultat combiné:", result1, result2);
  } catch (error) {
    console.error("Erreur dans l'une des requêtes:", error);
  }
};

concurrentRequests();
