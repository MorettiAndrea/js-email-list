const emailList = document.getElementById("email-list");
const randomEmailsArray = [];

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((response) => {
      const randomEmail = response.data.response;
      randomEmailsArray.push(randomEmail);
      let emailElement = ``;
      for (let i = 0; i < randomEmailsArray.length; i++) {
        const currentEmail = randomEmailsArray[i];
        emailElement += `<li class="text-center">${currentEmail}</li>`;
      }
      emailList.innerHTML = emailElement;
    });
}
console.log(randomEmailsArray);
