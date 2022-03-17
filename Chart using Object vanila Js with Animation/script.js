let analytics = {
  data: [
    {
      month: "January",
      sell: 20,
      buy: 50,
    },
    {
      month: "February",
      sell: 45,
      buy: 95,
    },
    {
      month: "March",
      sell: 52,
      buy: 70,
    },
    {
      month: "April",
      sell: 69,
      buy: 58,
    },
    {
      month: "May",
      sell: 35,
      buy: 65,
    },
    {
      month: "June",
      sell: 40,
      buy: 80,
    },
    {
      month: "July",
      sell: 30,
      buy: 40,
    },
  ],
};

let chart = document.querySelector(".chart");

for (let i = 0; i < analytics.data.length; i++) {
  let monthlyDetails = document.createElement("div");
  monthlyDetails.className = "monthlyDetails";

  monthlyDetails.innerHTML = `<div class="sell"><h3>${analytics.data[i].sell}%</h3></div>
<div class="buy"><h3>${analytics.data[i].buy}%</h3></div>
<h2 class="month">${analytics.data[i].month}</h2>`;

  chart.appendChild(monthlyDetails);
  let buy = document.querySelectorAll(".buy");
  let sell = document.querySelectorAll(".sell");

  function addAnimation(body) {
    let dynamicStyles = document.createElement("style");
    dynamicStyles.type = "text/css";
    document.head.appendChild(dynamicStyles);
    dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
  }
  addAnimation(`
   @keyframes myAnimation { 
     0% { height: 0%  }
     100% { height:${analytics.data[i].buy}; }
   }
   `);

  for (let i = 0; i < buy.length; i++) {
    buy[i].style.height = `${analytics.data[i].buy}%`;
    buy[i].style.animation = "myAnimation 1s linear backwards";
  }

  addAnimation(`
  @keyframes myAnimation { 
    0% { height: 0%  }
    100% { height:${analytics.data[i].sell}; }
  }
  `);
  for (let i = 0; i < sell.length; i++) {
    sell[i].style.height = `${analytics.data[i].sell}%`;
    sell[i].style.animation = "myAnimation 1s linear backwards";

  }
}
