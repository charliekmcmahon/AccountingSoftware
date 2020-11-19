//Made by Charlie McMahon. Copyright 2020.

var wage2020 = 73639;
var wage2021 = wage2020 + 3500;
var wage2022 = wage2021 + 3500;
var wage2023 = wage2022 + 3500;
var wage2024 = wage2023 + 3500;
var wage2025 = wage2024 + 3500;
var wage2026 = wage2025 + 3500;
var wage2027 = wage2026 + 3500;
var wage2028 = wage2027 + 3500;

var HELPdebt = 45000;
var HELPrepayment = 0.045;

var currentWage = wage2020;

var i = 0;

while (i < 9) {

  currentWage = window['wage202' + i];

  if (currentWage < 76354) {
    HELPrepayment = 0.045;
  } else if (currentWage < 80935) {
    HELPrepayment = 0.05;
  } else if (currentWage < 85792) {
    HELPrepayment = 0.055;
  } else if (currentWage < 90939) {
    HELPrepayment = 0.06;
  } else if (currentWage < 96396) {
    HELPrepayment = 0.065;
  } else if (currentWage < 102179) {
    HELPrepayment = 0.07;
  } else {
    console.log("error");
  }

  HELPdebt = Math.round(HELPdebt - (currentWage * HELPrepayment));
  if (HELPdebt < 0) {
    console.log(`It took ${i} years to repay back the help debt.`)
    
    var para = document.createElement("p");
    var node = document.createTextNode(`It will take ${i+1} years to repay the HELP debt entirely.`);
    para.appendChild(node);
    
    break;
  }
  console.log(`Year ${i} (202${i}) debt - $${HELPdebt}`);

  var para = document.createElement("p");
  var node = document.createTextNode(`End of Year ${i} (202${i}) |  HELP Debt: $${HELPdebt}`);
  para.appendChild(node);

  var element = document.getElementById("div1");
  element.appendChild(para);



  i++;

}

