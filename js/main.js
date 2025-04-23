const emailEsterne = "https://flynn.boolean.careers/exercises/api/random/mail";

// axios.get(emailEsterne)
// .then(Response => {
//     console.log(Response.data);
// })

for (let i = 0; i <= 10 -1; i++) {
    axios.get(emailEsterne)
    .then(Response => {
    console.log(Response.data);
    })
  }