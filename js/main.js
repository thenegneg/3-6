console.log("shallow copy");
data = ["negneg", "rahim", 23, true, null];
console.log(data);
result = data;
console.log(result);
result.push("rose");
console.log(data);
console.log(result);
console.log("*******************************************");
console.log("deep copy(ecma)");
data01 = [15, 100, "negneg", "rahim", 23, false, null];
console.log(data01);
result01 = [...data01];
result01.push("hahaha");
console.log(data01);
console.log(result01);
console.log("*******************************************");
console.log("deep copy(from)");
data02 = [10, 20, 3, 15, 1000, 60, 16];
console.log(data02);
result02 = Array.from(data02);
result02.push("harki mige 16 nist");
console.log(data02);
console.log(result02);
console.log("*******************************************");
console.log("deep copy(concat)");
data03 = ["rose", "is", "coming"];
result03 = ["yo", "ha", "ha", "ha", "ha"];
console.log(data03);
console.log(result03);
aa = data03.concat(result03);
console.log(aa);
result03.push("HAHAHAHAHAHA");
ab = data03.concat(result03);
console.log(ab);
console.log("*******************************************");
console.log("Array to Array");
let data04 = [1, 2, 3, 4, 5];
let result04 = [6, 7, 8, 9, 10];
let test = [11, 12, 13];
test.push(data04.concat(result04));
console.log(test);
test.splice(0, 3);
console.log(test);
test.push(data04, result04);
test.splice(1, 2);
console.log(test);
console.log("*******************************************");
console.log("for(merge array)");
let x = [1, 2, 3, 4, 5];
let y = [6, 7, 8, 9, 10];
let z = [11, 12, 13, 14, 15];
let w = ["end"];
let teest = ["start"];
console.log(teest);
for (let i = 0; i < x.length; i++) {
  teest.push(x[i]);
}
console.log(teest);
for (let i = 0; i < y.length; i++) {
  teest.push(y[i]);
}
console.log(teest);
for (let i = 0; i < z.length; i++) {
  teest.push(z[i]);
}
console.log(teest);
for (let i = 0; i < w.length; i++) {
  teest.push(w[i]);
}
console.log(teest);
console.log("*******************************************");
console.log("slice");
let q = ["negneg", 23, "programmer", true, null, 1, 2, 3, 4];
console.log(q);
let r = q.slice(1, 4);
console.log(q);
console.log(r);
console.log("*******************************************");
console.log("sort");
let dataa = [1, 9, 17, 25, 2, 15, 36, 100, 21, 45, 8, 6];
console.log(dataa);
dataa.sort((a, b) => a - b);
console.log(dataa);
let dataaa = ["negneg", "rose", "leila", "abbas", "reza", "ali", "iran"];
console.log(dataaa);
dataaa.sort();
console.log(dataaa);
console.log("*******************************************");
console.log("forEach");
let testt = ["negneg", "rahim", 23, "bluemoon@gmail.com", 2023];
testt.forEach(function (elem, index) {
  console.log(elem, index);
});
console.log("-------------------------");
testt.forEach(function (elem, index) {
  if (elem === "negneg") {
    console.log("hahahahaha", index);
  } else {
    console.log(elem, index);
  }
});
console.log("-------------------------");
testt.forEach(function (elem, index) {
  testt[index] = elem + " (LOOOL)";
  console.log(index, elem);
});
console.log(testt);
console.log("*******************************************");
console.log("map");
let k = ["negneg", "rahim", 23, null];
console.log(k);
k.map((elem, index) => {
  console.log(elem, index);
});
console.log("-------------------------");
let m = k.map((elem, index) => {
  return elem;
});
console.log(m);
m.push("loooool");
console.log(m);
console.log(k);
console.log("-------------------------");
let s = [1, 2, 5, 48, 78];
let n = s.map((elem, index) => {
  return elem * 9;
});
console.log(n);
console.log("*******************************************");
console.log("filter");
let digi = [
  { brand: "apple", price: "2000$", color: "rosegold" },
  { brand: "xiaomi", price: "1000$", color: "teal" },
  { brand: "samsung", price: "1500$", color: "black" },
  { brand: "honor", price: "1600$", color: "blue" },
  { brand: "sonny", price: "700$", color: "wite" },
  { brand: "nokia", price: "1100$", color: "gray" },
];
console.log(digi);
let resuult=digi.filter((elem)=>{
    return elem.brand==="sonny" || elem.color==="teal" || elem.price>="1600$"
})
console.log(resuult);
console.log("*******************************************");
console.log("fined");
let t=[
    {brand:"apple",price:"1000$"},
    {brand:"asus",price:"1200$"},
    {brand:"xiaomi",price:"1400$"},
    {brand:"samsung",price:"1600$"},
    {brand:"sonny",price:"1800$"},
    {brand:"honor",price:"2000$"},
]
let tt=t.find((elem)=>{
    return elem.price>"1600$" 
})
console.log(tt);
console.log("*******************************************");
console.log("indexof");
let rr=[1,2,"negneg","rose",5,"rahim","negneg","taba",38,"negneg",5,"rose",25,38]
console.log(rr.indexOf("negneg")+" (negneg)");
console.log(rr.lastIndexOf("negneg")+" (negneg)")
console.log(rr.indexOf(5)+" (5)")
console.log(rr.lastIndexOf(38)+" (38)")
console.log("*******************************************");
console.log("includes");
let rrr=[1,2,"negneg","rose",5,"rahim","negneg","taba",38,"negneg",5,"rose",25,38,false]
console.log(rrr.includes("negneg"));
console.log(rrr.includes("rose"));
console.log(rrr.includes("abbas"));
console.log(rrr.includes(34));
console.log(rrr.includes(12));
console.log(rrr.includes(null));
console.log(rrr.includes(false));
console.log("*******************************************");
console.log("findIndex");
let u=[
    {brand:"apple",price:"1000$"},
    {brand:"asus",price:"1200$"},
    {brand:"xiaomi",price:"1400$"},
    {brand:"samsung",price:"1600$"},
    {brand:"sonny",price:"1800$"},
    {brand:"honor",price:"2000$"},
]
let p=u.findIndex((elem)=>{
    return elem.brand==="asus"
})
console.log(p);
let p1=u.findIndex((elem)=>{
    return elem.brand==="honor"
})
console.log(p1);
console.log("*******************************************");
console.log("object");
let data000={
    firstName:"negneg",
    lastName:"rahim",
    age:23,
    towork:false,
    test:null
}
console.log(data000);
console.log("-------------------------");
let data001=Object({
    firstName:"rose",
    lastName:"vish",
    age:38,
    towork:false,
})
console.log(data001);