const list = [
  {
    Industry: "電信及通訊相關業",
    Past5YearAnnualSalary: "757,790",
    Past5YearAnnualSalaryP25: "517,150",
    Past5YearAnnualSalaryP50: "679,073",
    Past5YearAnnualSalaryP75: "928,800",
    Past5YearAnnualSalaryIncrease: "4.1%",
    YearEndBonuses: "1.07",
    YearEndBonusesP25: "0.18",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "3.4%",
    Origin: "0"
  },
  {
    Industry: "電腦及消費性電子製造業",
    Past5YearAnnualSalary: "820,282",
    Past5YearAnnualSalaryP25: "532,800",
    Past5YearAnnualSalaryP50: "729,000",
    Past5YearAnnualSalaryP75: "1,019,600",
    Past5YearAnnualSalaryIncrease: "16.8%",
    YearEndBonuses: "1.31",
    YearEndBonusesP25: "0.88",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "2.7%",
    Origin: "1"
  },
  {
    Industry: "光電及光學相關業",
    Past5YearAnnualSalary: "712,845",
    Past5YearAnnualSalaryP25: "507,200",
    Past5YearAnnualSalaryP50: "633,536",
    Past5YearAnnualSalaryP75: "840,000",
    Past5YearAnnualSalaryIncrease: "16.5%",
    YearEndBonuses: "1.11",
    YearEndBonusesP25: "0.88",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.38",
    PayScale: "2.9%",
    Origin: "2"
  },
  {
    Industry: "電子零組件相關業",
    Past5YearAnnualSalary: "750,577",
    Past5YearAnnualSalaryP25: "507,904",
    Past5YearAnnualSalaryP50: "661,678",
    Past5YearAnnualSalaryP75: "903,000",
    Past5YearAnnualSalaryIncrease: "15.4%",
    YearEndBonuses: "1.16",
    YearEndBonusesP25: "0.88",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.63",
    PayScale: "3.3%",
    Origin: "3"
  },
  {
    Industry: "半導體業",
    Past5YearAnnualSalary: "866,432",
    Past5YearAnnualSalaryP25: "547,500",
    Past5YearAnnualSalaryP50: "742,000",
    Past5YearAnnualSalaryP75: "1,075,000",
    Past5YearAnnualSalaryIncrease: "15.6%",
    YearEndBonuses: "1.31",
    YearEndBonusesP25: "0.88",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "3.2%",
    Origin: "4"
  },
  {
    Industry: "民生消費製造業",
    Past5YearAnnualSalary: "646,219",
    Past5YearAnnualSalaryP25: "450,700",
    Past5YearAnnualSalaryP50: "561,000",
    Past5YearAnnualSalaryP75: "747,084",
    Past5YearAnnualSalaryIncrease: "-0.1%",
    YearEndBonuses: "0.87",
    YearEndBonusesP25: "0.13",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.38",
    PayScale: "2.8%",
    Origin: "5"
  },
  {
    Industry: "化工與石化業",
    Past5YearAnnualSalary: "661,072",
    Past5YearAnnualSalaryP25: "463,200",
    Past5YearAnnualSalaryP50: "590,000",
    Past5YearAnnualSalaryP75: "782,000",
    Past5YearAnnualSalaryIncrease: "0.7%",
    YearEndBonuses: "1.26",
    YearEndBonusesP25: "0.63",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "2.9%",
    Origin: "6"
  },
  {
    Industry: "金屬機電製造業",
    Past5YearAnnualSalary: "651,735",
    Past5YearAnnualSalaryP25: "460,000",
    Past5YearAnnualSalaryP50: "579,077",
    Past5YearAnnualSalaryP75: "765,312",
    Past5YearAnnualSalaryIncrease: "-2.1%",
    YearEndBonuses: "1.20",
    YearEndBonusesP25: "0.63",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "2.5%",
    Origin: "7"
  },
  {
    Industry: "營建產業",
    Past5YearAnnualSalary: "683,489",
    Past5YearAnnualSalaryP25: "485,000",
    Past5YearAnnualSalaryP50: "620,000",
    Past5YearAnnualSalaryP75: "816,150",
    Past5YearAnnualSalaryIncrease: "3.5%",
    YearEndBonuses: "1.13",
    YearEndBonusesP25: "0.18",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "3.7%",
    Origin: "8"
  },
  {
    Industry: "批發零售業",
    Past5YearAnnualSalary: "667,747",
    Past5YearAnnualSalaryP25: "455,000",
    Past5YearAnnualSalaryP50: "583,150",
    Past5YearAnnualSalaryP75: "797,532",
    Past5YearAnnualSalaryIncrease: "9.7%",
    YearEndBonuses: "1.06",
    YearEndBonusesP25: "0.18",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.63",
    PayScale: "2.7%",
    Origin: "9"
  },
  {
    Industry: "倉儲或運輸輔助業",
    Past5YearAnnualSalary: "805,700",
    Past5YearAnnualSalaryP25: "490,000",
    Past5YearAnnualSalaryP50: "630,000",
    Past5YearAnnualSalaryP75: "883,000",
    Past5YearAnnualSalaryIncrease: "11.2%",
    YearEndBonuses: "0.89",
    YearEndBonusesP25: "0.18",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "0.88",
    PayScale: "2.7%",
    Origin: "10"
  },
  {
    Industry: "住宿產業",
    Past5YearAnnualSalary: "492,794",
    Past5YearAnnualSalaryP25: "376,000",
    Past5YearAnnualSalaryP50: "455,000",
    Past5YearAnnualSalaryP75: "546,000",
    Past5YearAnnualSalaryIncrease: "31.8%",
    YearEndBonuses: "0.96",
    YearEndBonusesP25: "0.18",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.13",
    PayScale: "2.0%",
    Origin: "11"
  },
  {
    Industry: "餐飲產業",
    Past5YearAnnualSalary: "550,578",
    Past5YearAnnualSalaryP25: "390,000",
    Past5YearAnnualSalaryP50: "488,600",
    Past5YearAnnualSalaryP75: "646,000",
    Past5YearAnnualSalaryIncrease: "7.6%",
    YearEndBonuses: "0.69",
    YearEndBonusesP25: "0.38",
    YearEndBonusesP50: "0.63",
    YearEndBonusesP75: "0.88",
    PayScale: "2.8%",
    Origin: "12"
  },
  {
    Industry: "軟體及網路相關業",
    Past5YearAnnualSalary: "790,822",
    Past5YearAnnualSalaryP25: "530,500",
    Past5YearAnnualSalaryP50: "685,857",
    Past5YearAnnualSalaryP75: "961,800",
    Past5YearAnnualSalaryIncrease: "1.6%",
    YearEndBonuses: "1.10",
    YearEndBonusesP25: "0.38",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "4.4%",
    Origin: "13"
  },
  {
    Industry: "金融投顧及其相關業",
    Past5YearAnnualSalary: "672,757",
    Past5YearAnnualSalaryP25: "458,408",
    Past5YearAnnualSalaryP50: "580,065",
    Past5YearAnnualSalaryP75: "846,698",
    Past5YearAnnualSalaryIncrease: "0.1%",
    YearEndBonuses: "1.64",
    YearEndBonusesP25: "0.63",
    YearEndBonusesP50: "1.88",
    YearEndBonusesP75: "2.13",
    PayScale: "3.4%",
    Origin: "14"
  },
  {
    Industry: "法律╱會計╱顧問╱研發業",
    Past5YearAnnualSalary: "703,261",
    Past5YearAnnualSalaryP25: "492,000",
    Past5YearAnnualSalaryP50: "624,400",
    Past5YearAnnualSalaryP75: "834,912",
    Past5YearAnnualSalaryIncrease: "1.1%",
    YearEndBonuses: "1.20",
    YearEndBonusesP25: "0.63",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.88",
    PayScale: "3.4%",
    Origin: "15"
  },
  {
    Industry: "醫療服務業",
    Past5YearAnnualSalary: "628,711",
    Past5YearAnnualSalaryP25: "437,000",
    Past5YearAnnualSalaryP50: "562,500",
    Past5YearAnnualSalaryP75: "748,000",
    Past5YearAnnualSalaryIncrease: "10.6%",
    YearEndBonuses: "0.93",
    YearEndBonusesP25: "0.38",
    YearEndBonusesP50: "0.88",
    YearEndBonusesP75: "1.38",
    PayScale: "2.6%",
    Origin: "16"
  }
]

const adjust = [{
  Industry: "",
  Past5YearAnnualSalary: "0",
  Past5YearAnnualSalaryP25: "0",
  Past5YearAnnualSalaryP50: "0",
  Past5YearAnnualSalaryP75: "0",
  Past5YearAnnualSalaryIncrease: "0",
  YearEndBonuses: "0",
  YearEndBonusesP25: "0",
  YearEndBonusesP50: "0",
  YearEndBonusesP75: "0",
  PayScale: "0"
}]

list.forEach(d => {
  d.Past5YearAnnualSalary = +d.Past5YearAnnualSalary.split(',').join('')
  d.Past5YearAnnualSalaryP25 = +d.Past5YearAnnualSalaryP25.split(',').join('')
  d.Past5YearAnnualSalaryP50 = +d.Past5YearAnnualSalaryP50.split(',').join('')
  d.Past5YearAnnualSalaryP75 = +d.Past5YearAnnualSalaryP75.split(',').join('')
  d.Past5YearAnnualSalaryIncrease = +d.Past5YearAnnualSalaryIncrease.split('%').join('')
  d.PayScale = +d.PayScale.split('%').join('')
})




// let YearEndBonuses = []
// list.forEach((d, i) => {
//   YearEndBonuses.push(list[i].YearEndBonuses.sort())
// })



// https://www.itread01.com/content/1541238850.html sort

