let randomEmailsArray = [];

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const randomEmail = response.data.response;
      randomEmailsArray.push(randomEmail);
    });
}
console.log(randomEmailsArray);
