//ev tapsirigi 



//  let books = [
//         {
//      author: "J.K. Rowling",
//    bookName: "Harry Potter and the Sorcerer's Stone",
//     bestseller: true,
//      genre: "Fantasy",
//     },
//     {
//      author: "George Orwell",
//      bookName: "1984",
//      bestseller: false,
//     genre: "Dystopian",
//   },
//    {
//      author: "J.R.R. Tolkien",
//      bookName: "The Hobbit",
//     bestseller: true,
//      genre: "Fantasy",
//    },
//    {
//      author: "Jane Austen",
//      bookName: "Pride and Prejudice",
//     bestseller: false,
//     genre: "Classic",
//    },
//       {
//      author: "Harper Lee",
//     bookName: "To Kill a Mockingbird",
//      bestseller: true,
//      genre: "Fiction",
//    },
//    {
//     author: "F. Scott Fitzgerald",
//     bookName: "The Great Gatsby",
//     bestseller: false,
//     genre: "Classic",
//    },
//   {
//      author: "Agatha Christie",
//      bookName: "Murder on the Orient Express",
//      bestseller: true,
//      genre: "Mystery",
//   },
//    {
//      author: "Ernest Hemingway",
//      bookName: "The Old Man and the Sea",
//      bestseller: false,
//      genre: "Fiction",
//    },
//    {
//      author: "Jules Verne",
//      bookName: "Twenty Thousand Leagues Under the Sea",
//     bestseller: true,
//     genre: "Adventure",
//    },
//    {
//      author: "Arthur Conan Doyle",
//      bookName: "Sherlock Holmes",
//      bestseller: false,
//      genre: "Mystery",
//   },
//  ];

//  function besteller(arr){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i].bestseller){
//             console.log(arr[i].bookName);
//         }
//      }
//  }

//  function genre(arr){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i].genre=="Fantasy"){
//             console.log(arr[i].author);
//             console.log(arr[i].bookName);
//         }
//      }
//  }

// //  besteller(books);
// // genre(books);
  
// function book(arr){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i].book=="Fantasy"){
//             console.log(arr[i].author);
//         }
//         if(arr[i].bestseller){
//             console.log(arr[i].bookName);
//         }
//     }
// }
// book(books);
  


//task 2 kutle ceki indeksini (BMi) hesablayan
// function weight(kutle,uzunluq){
//    return kutle/(uzunluq**2)
// }
// console.log(weight(52,1.66));


//task 3 userden alinan ededin neqativ ve ya pozitiv oldugunu yoxlayan bir function yaz 
// function negativ(eded){
//   if(eded > 0){
//     return "Pozitiv"
//   }
//   else if(eded<0){
//     return "Negativ"
//   }
//   else{
//     return"Sifir"
//   }
// }
// console.log(negativ(7));
// console.log(negativ(-7));
// console.log(negativ(0));




//task4 Bir arrayin elementlerinin hasilini tapan bir funksiya yazin(return);
// function hasil(array){
//   let vurma=1;
//   for(let i=0; i< array.length; i++){
//     vurma *=array[i]
//   }
//   return vurma;
// }
// const total=[1,2,3,4,5];
// console.log(hasil(total));




//task 5   2 ededin ortalamsini tapin
// function ortalama( a,b){
//   return(a+b)/2;
// }
// console.log(ortalama(5,9));





//task 6  3 eded alin ve onlardan birinin diger ikisi arasinda yerlesib yerlesmediyini kontrol edin.(5,1,10)
// function kontrol(eded1,eded2,eded3){
//   return(eded1<eded3);
// }



//task iki ayri setr alan bir function yaz.ve bu setrleri birlesdir.
// function birlesdir(setr1,setr2){
//   return setr1+setr2;
// }
// let text1="Salam";
// let text2="necesiz?";
// console.log(birlesdir(text1,text2));










//  let movies = [
//   {
//     title: "Inception",
//      director: "Christopher Nolan",
//      genre: "Science Fiction",
//      blockbuster: true,
//    },
//    {
//      title: "The Shawshank Redemption",
//      director: "Frank Darabont",
//     genre: "Drama",
//     blockbuster: false,
//   },
//   {
//      title: "The Dark Knight",
//      director: "Christopher Nolan",
//      genre: "Action",
//      blockbuster: true,
//    },
//    {
//     title: "Forrest Gump",
//      director: "Robert Zemeckis",
//      genre: "Drama",
//      blockbuster: true,
//   },
//   {
//     title: "Pulp Fiction",
//     director: "Quentin Tarantino",
//     genre: "Crime",
//     blockbuster: false,
//   },
//   {
//      title: "The Matrix",
//      director: "Lana and Lilly Wachowski",
//      genre: "Science Fiction",
//      blockbuster: true,
//   },
//    {
//      title: "The Godfather",
//      director: "Francis Ford Coppola",
//      genre: "Crime",
//      blockbuster: false,
//    },
//    {
//      title: "Avatar",
//      director: "James Cameron",
//      genre: "Action",
//     blockbuster: true,
//    },
//    {
//      title: "Titanic",
//      director: "James Cameron",
//      genre: "Romance",
//      blockbuster: true,
//    },
//    {
//      title: "The Silence of the Lambs",
//     director: "Jonathan Demme",
//     genre: "Thriller",
//      blockbuster: false,
//    },
//  ];
// function movie(movie){
//     for(let i=0; i<movie.length;i++){
//         let total=movie[i];
//         if(total.blockbuster){
//             console.log(total.title);
//         }
//     }
// }
// movie(movies);


//task switch
// let user=prompt("Aylari reqem olaraq daxil edin");

// switch(user){
//   case"1":
//   console.log("Yanvar");
//   case"2":
//   console.log("Fevral");
//   break;
//   case"3":
//   console.log("Mart");
//   break;
//   case"4":
//   console.log("Aprel");
//   break;
//   case"5":
//   console.log("May");
//   break;
//   case"6":
//   console.log("Iyun");
//   break;
//   case"7":
//   console.log("Iyul");
//   break;
//   case"8":
//   console.log("Avqust");
//   break;
//   case"9":
//   console.log("Sentyabr");
//   break;
//   case"10":
//   console.log("Oktyabr");
//   break;
//   case"11":
//   console.log("Dekabr");
//   break;
//   case"12":
//   console.log("Yanvar");
//   break;
//   default:
//     console.log("Bele bir ay yoxdur");
//     break;
// }



 







//function hesab(a,b,t){
//if(t ==="vurma"){
//return a*b;
//}
//else if(t === "cixma"){
//    return a-b;
//}
//else if(t === "toplama"){
 //   return a+b;
//}
//else if (t==="bolme"){
  //  return a/b;
//}
//else{
 //  return "duzgun emeliyyat daxil edin";
//}
//}
//const vurma=hesab(5,3,"vurma");
//const bolme=hesab(5,3,"bolme");
//const cixma=hesab(5,3,"cixma");
//const toplama=hesab(5,3,"toplama");


//console.log("vurma :" +vurma);
//console.log("cixma :" +cixma);
//console.log("toplama :" +toplama);
//console.log("bolme :" +bolme);



//3 reqem teyin edin en boyuk olanini tap
//function bigger(a,b,c){
  //  let biggest=a;
  //  if(a<b){
  //      biggest=b;
  //  }
    //if(b<c){
   //     biggest=c;
  //  }
  //  return biggest;
//}
//console.log(bigger(10,100,2));


//
// function great(name){
//   console.log(`hello ` +name);
// }
// great(`John`);