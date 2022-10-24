// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*getInstruction("mashedPotatoes",0,
  (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  1,
  (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  2,
  (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  3,
  (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  },
  (error) => console.log(error)
);

getInstruction(
  "mashedPotatoes",
  4,
  (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  },
  (error) => console.log(error)
);*/

// Iteration 1 - using callbacks
// ...
const mashedPotatoesImage = document.querySelector("#mashedPotatoesImg");
getInstruction(
  "mashedPotatoes",
  0,
  (step0) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector(
          "#mashedPotatoes"
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction("mashedPotatoes", 3, (step3) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step3}</li>`;
          getInstruction("mashedPotatoes", 4, (step4) => {
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>${step4}</li>`;
            document.querySelector(
              "#mashedPotatoes"
            ).innerHTML += `<li>Mashed potatoes are ready!</li>`;
            mashedPotatoesImage.removeAttribute("hidden");
          });
        });
      });
    });
  },
  (error) => console.log(error)
);
// Iteration 2 - using promises
// ...
const steakImage = document.querySelector("#steakImg");
obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
  })
  .then(() =>
    obtainInstruction("steak", 1).then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    })
  )
  .then(() =>
    obtainInstruction("steak", 2).then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    })
  )
  .then(() =>
    obtainInstruction("steak", 3).then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    })
  )
  .then(() =>
    obtainInstruction("steak", 4).then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    })
  )
  .then(() =>
    obtainInstruction("steak", 5).then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    })
  )
  .then(() =>
    obtainInstruction("steak", 6).then((step6) => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    })
  )
  .then(() =>
    obtainInstruction("steak", 7).then((step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    })
  )
  .finally(() => {
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;
    steakImage.removeAttribute("hidden");
  });

// Iteration 3 using async/await
// ...

const broccoliImage = document.querySelector("#broccoliImg");
async function makeBroccoli() {
  try {
    let instruction = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    instruction = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${instruction}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>Broccoli is ready!</li>`;
    broccoliImage.removeAttribute("hidden");
  } catch (error) {
    console.log(error);
  }
}
makeBroccoli();
// Bonus 2 - Promise all
// ...
Promise.all([
  obtainInstruction("brusselsSprouts", 0),
  obtainInstruction("brusselsSprouts", 2),
  obtainInstruction("brusselsSprouts", 3),
  obtainInstruction("brusselsSprouts", 4),
  obtainInstruction("brusselsSprouts", 5),
  obtainInstruction("brusselsSprouts", 6),
  obtainInstruction("brusselsSprouts", 7),
])
  .then((brussels) => {
    brussels.forEach((element) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${element}</li>`;
    });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  })
  .catch((error) => {
    return error;
  });
