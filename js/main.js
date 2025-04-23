const emailEsterne = "https://flynn.boolean.careers/exercises/api/random/mail";
const listaEl = document.getElementById("lista");
const email = [];
const buttonEl = document.getElementById("button");

// axios.get(emailEsterne)
// .then(Response => {
//     console.log(Response.data);
// })

// for (let i = 0; i <= 10 -1; i++) {
//     axios.get(emailEsterne)
//     .then(Response => {
//     console.log(Response.data.response);
//     })
//   }

buttonEl.addEventListener("click", function(){
    // console.log("click");
    listaEl.innerHTML = "";
    for (let i = 0; i <= 10 -1; i++) {
        axios.get(emailEsterne)
        .then(Response => {
            const email = Response.data.response;
            console.log(email);
            const li = document.createElement("li");
            li.textContent = email;
            listaEl.appendChild(li);
        })
    }
  })

