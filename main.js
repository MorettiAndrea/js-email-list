axios
  .get(" https://flynn.boolean.careers/exercises/api/random/mail")
  .then((response) => {
    const randomEmail = response.data.response;
    let randomEmailsArray = [];

    for (let i = 0; i < 10; i++) {
      if (randomEmailsArray.length < 10) {
        randomEmailsArray.push(randomEmail);
      }
    }
    console.log(randomEmailsArray);
  });
