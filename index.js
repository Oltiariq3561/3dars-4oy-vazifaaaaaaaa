// 1-masala 
// let a = +prompt('yoshingiz');
// if (a>=18) {
//     console.log('katta yoshdasiz');
// }else{
// console.log('siz hali yosh siz');
// }

// 2-masala
// let a = +prompt('son kiritin');
// if (a%2==0) {
//     console.log(a, 'juft son');
// }else{
// console.log(a,'toq son');
// }

// 3-masala
// let a = +prompt('salomatt');
// if (a>0) {
//     console.log(a,'musbat');
// }else if (a<0) {
//     console.log(a,'manfiy');
// }else{
// console.log(a,'nitral');
// }

// 4-masala
// let a = +prompt('son');
// if (a>=20) {
//     console.log('yengil kiyin');
// }else{
// console.log('qalin kiyin');
// }

// 5-masala
// let a = +prompt('ball');
// if (a>=90 && a<=100) {
//     console.log('alo');
// }
// if (a>=70 && a<90) {
//     console.log('yaxshi');
// }
// if (a>=50 && a<70) {
//     console.log('qoniqarli');
// }
// if (a<50) {
//     console.log('rasvo');
// }

// 6-masala
// let a = prompt('ism');
// if (a === 'ali') {
//     console.log('salom ali');
// }else{
// console.log('salom mehmon');
// }

// 7-masala
// let a = +prompt('sum');
// if (a>100) {
//     console.log('chegirma');
// }else{
// console.log('chegirma yoq');
// }

//Ternary ga oid masalalar

// 1 masala

// let a= +prompt("")

// a>=25 ? console.log("Issiq") : console.log("Sovuq");

// 2 masala
// Balni tekshirish:

// let a= +prompt("imtihon balli")

// a>=50 ? console.log("O'tdi") : console.log("Yiqildi");

// 3 masala
// Sonning musbat yoki manfiy ekanligini aniqlash

// let a= +prompt("sonni kriting")

// a>0 ? console.log("Musbat") : console.log("Manfiy");


// For ga oid masalalar

// 1 masala

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// 2 masala

// for(let i=10; i>=1; i--){
//     console.log(i);
// }

// 3 masala

// for(let i=1; i<=100; i++){
//     if (i % 2== 0) {
//         console.log(i);
//     }
// }

// 4 masala

// for(let i=1; i<=100; i++){
//     if (i % 2== 1) {
//         console.log(i);
//     }
// }

// 5 masala

// let sum=0

// for(let i =1; i<=10; i++){
//     sum=sum+i;
// }

// console.log(sum);

// 6 masala

// let sum=1

// for(let i =1; i<=10; i++){
//     sum=sum*i;
// }

// console.log(sum);

// 7 masala
// let a = +prompt('son kirit');
// let result = 1 ;
// for(let i =1 ; i<=a;i++){
// result = result * i;
// }
// console.log(result);

// 8-masala
// let a = +prompt('son kirit');
// let result = 1 ;
// for(let i =1 ; i<=a;i++){
// result = i**3;
// console.log(result);
// }

// 9-masala
// let a = +prompt('son kirit');
// let result = 1 ;
// for(let i =1 ; i<=a;i++){
// result = i**4;
// console.log(result);
// }

// 10-masala
// let a = 100;
// let res = 0;
// for(let i = 1; i<=a ; i++){
// res = res + i;
// }
// console.log(res);

// 11-masala
// let a = 5;
// for(let i = 1 ; i<=a; i++){
// console.log('salom');
// }

// 12-masala
// let a = 100;
// let res = 0;
// for(let i = 1 ; i<=a; i++){
// res = res + i*2
// console.log(res);
// }

// 14-masala
// let num = +prompt("son kiriting");
// let res = 1;
// for (let i = 1; i <= num; i++){
//     res = i**2;
// }
// console.log(res);

// boolean

// let a = +prompt('son');
// let b = +prompt('son');
// if (a%2==0 && b%2==0 || a%2==1 && b%2==1) {
//     console.log(true);
// }else{
// console.log(false);
// }


// 2-boolean
// let a = +prompt('son');
// let b = +prompt('son');
// let c = +prompt('son');
// if (a>0 && b>0 && c>0) {
//     console.log(true);
// }else{
// console.log(false);
// }

// 3-boolean
// let a = +prompt('son');
// let b = +prompt('son');
// let c = +prompt('son');
// if (a>0 || b>0 || c>0) {
//     console.log(true);
// }else{
// console.log(false);
// }


// 4- boolean
// let a = +prompt('son');
// let b = +prompt('son');
// let c = +prompt('son');
// if (a>0 && b<0 && c<0 || a<0 && b>0 && c<0 || a<0 && b<0 && c>0){
//     console.log(true);
// }else{
// console.log(false);
// }

// 5-boolea
// let a = +prompt('son');
// let b = +prompt('son');
// let c = +prompt('son');
// if (a>0 && b>0 && c<0 || a<0 && b>0 && c>0 || a>0 && b<0 && c>0){
//     console.log(true);
// }else{
// console.log(false);
// }

// // 6-boolean
// let a = +prompt('son');
// if (a%2==0 && a>9 && a<100) {
//     console.log(true);
// }else{
// console.log(false);
// }


let num = +prompt("son kiriting");
let res = 1;
for (let i = 1; i <= num; i++){
    res = res * i;
}
console.log(res);