// // let amerson = [1 , 2, 3, 4, 5]
// // let jason   = [2,  1, 4, 5, 7]



// // function Compare (s1, s2){
// //     let alice= 0;
// //     let jack = 0;
   
// //     for(let i = 0 ; i < s1.lenght; i++){
// //         if(s1[i] > s2[i]){
// //             alice = alice + 1
// //         }
// //         else{
// //             if (s2[i] > s1[i]){
// //                 jack = jack + 1
// //             }
// //         }
// //     }  return alice, jack 
// // }
// // Compare(amerson, jason)


// // let arr = [ 1, 2, 3, 4, 5, 6]

// // function call (k , arr){
// //     for(i = 0  ; i < k ; i++){
// //         let back = arr.pop();
// //         arr.unshift(back);
       
// //     }
// //     console.log(arr)
   
// // }
// // call (4 , arr)

// // let arr = [ 1, 2, 3, 4, 5, 6]

// // function call(k){
// //     for(let i = 0 ; i  < k; i ++){
// //         let count = arr.splice(2,1)
// //         arr.push(count) 
// //         console.log(arr)
// //     }
   
    
// // }
// // call(1)







// // function Icream (cost, flavours){
   
// //     for (let i = 0; i < flavours.length; i++){
// //         let first = flavours[i];
// //         let second = cost - first;
        

    
// //         for(let j = 0; j < flavours.length; j++){
// //             if( i !== j && flavours[j] === second ){
// //                 return [i + 1, j +1]
// //             }
// //         }

// //     }
// // }

// // let flavours = [ 1 , 2, 3, 4, 5]
// // let main = Icream (4, flavours)
// // console.log(main)

// // function Calculate(Totalcost, flavors){
// //     let indice = {};
// //    for(i = 0; i < flavors.length; i++){
// //     let firstprice = flavors[i]
// //     let secondprice = Totalcost - firstprice
// //     indice = i;

// //     for (j = 0; j < flavors.length; j++){
// //         if(i !== j && flavors[j] === secondprice){
// //             return [ i + 1, j + 1 ]
// //         }
// //     }
// //    }
// // }
// // let flavors = [ 1, 2, 3, 4, 5]
// // let cost= Calculate(4, flavors)
// // console.log(cost)


// let alice = [1, 2, 3];
// let bob = [4, 3, 2];

// function triplets(arr, brr) {
//   let aliceCount = 0;
//   let bobCount = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > brr[i]) {
//       aliceCount++;
//     } else if (arr[i] < brr[i]) {
//       bobCount++;
//     }
//   }

//   console.log(bobCount, aliceCount);
// }

// triplets(alice, bob); // Output: 1 2
















// Rotating k times

// function times( k, array){
//   for (i = 0; i < k; i++){
//         const back =  array.pop()
//          array.unshift(back)

//   }
//   console.log(array)
// }

// let array = [ 1, 2, 3, 4, 5]
// call = times(1, array)
// console.log(call)



// triplets

// function  triplets(score1, score2){
//   let add1 = 0
//   let add2   = 0
  
//   for (let i = 0; i < score1.length; i++ ){
//     if(score1[i] > score2[i]){
//         add1 ++;
//     }
//     if(score1[i] < score2[i]){
//       add2 ++;
//   }
// }
//  console.log(add1, add2)
// }

// let Alice = [2, 4, 7, 3]
// let Bob   = [5, 3, 8, 5]
// triplets(Alice, Bob)

// divisible

// function divisible( num ){
//   if( num < 0){
//     return "It's minus zero"
//   }
//   let sum = 0
//   for (let i = 1; i < num; i++){
//      if( i % 4 === 0 || i % 6 === 0 ){
//         sum += i;
//      }
//   }
//   console.log(sum)

// }
// divisible(10)

// Checking the divisible sum

// function add(clone){
//   let total = 0
//   for(let i = 0; i < clone.length; i++){
//       total += clone[i]
//   }
//   console.log(total)
// }
// let array = [ 4, 8, 12, 6]
// add(array)


// Reverse 


// function reverse(aru){
//    aru.toString().split("")
//    for(let i = 0; i < aru.length; i++){
//         aru[i] = aru[i].split("").reverse().join("");
//    }
//    return aru.toString().split("").reverse().join("");
// }

// console.log(reverse("jello"))





// function tree(n){
//   for (let i = 1; i <= n; i++){
//        let spaces = n - i;
//        let stairs = " ";

//        for(let j = 0; j < spaces; j++){
//          stairs += " ";
//        }

//        for (let j = 0; j < i; j++){
//         stairs =+ "#"
//        }
//        console.log(stairs)
//   }
 
// }
 
// tree(4)



// function tree(n){
//   for (let i = 1; i <= n; i++){
//        let spaces = n - i;
//        let stairs = "";

//        for(let j = 0; j < spaces; j++){
//          stairs += " ";
//        }

//        for (let j = 0; j < i; j++){
//         stairs += "#";
//        }
//        console.log(stairs);  // print the stairs for each row
//   }
// }

// tree(4);







// function call (n){
//   for(let i = 0; i <= n; i++){
//     let spaces = n-i
//     let stairs  = ""

//     for(let j = 0; j < spaces; j++){
//          stairs += "";
//     }
//     for(let j = 0; j < i; j++){
//       stairs +=  "#";
//     }
//     console.log(stairs)
//   }
// }

// call(6)












// function reverse(mack){
//     for(let i = 0; i <= mack; i++){
//         let space  = mack - i;
//         let stairs = ""

//         for(let j = 0; j < space; j++){
//              stairs += "";
//         }

//         for (let j = 0; j < i; j++){
//             stairs += "#";
//         }

//         console.log(stairs)
//     }
// }

// reverse(10)



// function triplets(arr, brr){
//      A = 0
//      B = 0

//     for(let i = 0 ; i < arr.length; i++){
//         if(arr[i] > brr[i]){
//             A++;
//         }
//         if(arr[i] < brr[i]){
//             B++;
//         }
        
//     }
//     console.log(A, B)
// }
// let array = [1 ,2 ,3, 4, 5]
// let  array2 = [ 6, 7, 8, 0, 1]
// triplets(array, array2)


// function divisible (num){
//     if( num < 0){
//         return "error"
//     }
//     let sum = 0;
//     for(let i = 0; i < num; i++){
//         if(i % 4 === 0 || i % 5 === 0){
//            sum+= i;
//         }
        
//     }
//     console.log(sum)
 
// }
// divisible(10)


// function count (number){
//     let  add = 0;
//     for(let i = 0; i < number.length; i++ ){
//         add += number[i]
//     }
//     console.log(add)
// }
// let array4 = [ 4, 8, 5]
// count(array4)




// function division(num){
//   if(num < 0){
//     return 'none'
//   }
//   let sum = 0; 
//   for(i = 0; i < num; i++){
//     if( i % 4 ===0){
//         sum+= i
//     }
//   }
//   console.log(sum)
// }
// division(10)

// function checker(number){
//     let total = 0;
//     for(let i = 0; i < number.length; i++){
//          total+= number[i]
//     }
//     return total
// }
// let array = [1, 2, 3, 4, 5]
// let cost = checker(array)
// console.log(cost)

// function wordschanger(words){
//     words.toString().split(" ")
//     for(let i = 0 ; i < words.length; i++){
//         words[i] = words[i].toString().split("").reverse().join()
//     }
//     console.log(words.toString().split("").reverse().join())
// }
// wordschanger("Hello")

// function prymid(some){
//     for(let i = 1; i <= some; i++ ){
//         let spaces = some - i;
//         let stairs = "";

//         for( let j = 0; j < spaces; j++){
//              stairs+= "";
//         }
//         for(let j = 0; j < i; j++){
//             stairs+= '#'
//         }
//         console.log(stairs)
//     }
   
// }

// prymid(6)










// function icecream(cost, flavors){
//      for(i = 0; i < flavors.length; i++){
//        let first_price = flavors[i]
//        let second_price = cost - first_price

//         for(j = 0; j < flavors.length; j++){
//           if( i !== j && flavors[j] === second_price){
//             return [i + 1 , j + 1]
//           }
//         }
//      } 
// }  
// let flavors = [ 1 , 2, 3, 4, 5, 6]-0
// let toatl_cost = icecream(6 , flavors)
// console.log(toatl_cost)



// function Calculate(Totalcost, flavors){
//   let indice = {};
//  for(i = 0; i < flavors.length; i++){
//   let firstprice = flavors[i]
//   let secondprice = Totalcost - firstprice
//   indice = i;

//   for (j = 0; j < flavors.length; j++){
//       if(i !== j && flavors[j] === secondprice){
//           return [ i + 1  , j + 1]
//       }
//   }
//  }
// }  
// let flavors = [ 1, 2, 3, 4, 5]
// let cost= Calculate(5, flavors)
// console.log(cost)
 







// function example(total, individual_flavours){
//     for(let i = 0; i < individual_flavours.length; i++){
//         let first_price = individual_flavours[i]
//         let second_price = first_price - total;
//         for(let j = 0; j < individual_flavours.length; j++){
//             if( i !== j && individual_flavours[j] === second_price){
//                 return([i+1, j+1])
//             }
//         }

//     }
// }
// let individual_flavours = [1 , 2, 3, 4, 5, 6]
// let cost = example(6, individual_flavours)
// console.log(cost)





//THIS CODE IS ITERATING THE LOOP FROM THE MIDDLE////

// let array = [ 1, 2, 3, 4, 5]
// function reverse(array, k){
//     for(i = 0 ; i < k/2; i++){
//         const jack = array[i]
//         array[i] = array[k - 1 - i]; 
//         array[k -1- i]= jack
        
//     }
// }
// reverse(array, 3)
// console.log(array)







// function add (n){
//     let sum = 0;
//     for (let i = 0; i < n.length; i++ ){
//         if(typeof n[i] === 'number'){
//             sum = sum + n[i];
//         }
    
//     }
//     return sum
    
// }
// const array = [1, 2, 3, 4, 5]
// const back = add(array)
// console.log(back)
 



// function convert(array){
//    let number_of_elements = array.length;
//    let total = 0
//    for (i = 0; i < number_of_elements; i++ ){
//         total+= array[i]
//    }
//    return total
// }
// let array = [1,2,3,4,5]
// let back = convert(array)
// console.log(back)

// jack = [1, 7, 3]
// mack = [4, 5, 6]

// function compareTriplets(a, b) {
//     let alice = 0
//     let bob   = 0
//     for(i = 0; i < a.length; i++){
//        if(a[i] > b[i]){
//             alice+= 1
//         }
//           if(a[i]< b[i]){
//               bob+= 1
//           }
         
//         }
//         console.log(alice, bob)
// }
//   compareTriplets(jack, mack)


// class node{// O(1)//
//   constructor(data, next){
//       this.data = data;
//       this.next = next
//   }
// }

// class Linkedlist{//O(1)
//   constructor(head){
//       this.head = null
//   } 
//   push(data){
//       if(!this.head) return this.head = new  node(data)
//       let current = this.head
//       while(current.next){
//           current = current.next//O(n)//
//       }
//       current.next = new node(data)
//   }
//   print(data){
//       let current = this.head;
//       while(current){
//           console.log(current.data)
//           current = current.next;//O(n)
//       }
//   }
//   insertfirst(data){
//       this.head = new node(data , this.head)//O(1)
//   }
//   remove(data){
//   let current = this.head;
//   let lastsecond = this.head;
//   while(current.next != null){
//       lastsecond = current
//       current = current.next
//   }
//   lastsecond.next = null;//O(n)
// }
  
// }

// let list = new Linkedlist()
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.remove()
// list.insertfirst(1)
// list.print()





// class  Node{
//   constructor (data, next){
//     this.data = data
//     this.next = next 

//   }
// }

// class Linkedlist{
//   constructor(head){
//     this.head = null 
//   }
//   push(data){
//    if (!this.head)  return this.head = new Node(data)
//    let current = this.head
//    if(current.next){
//     current = current.next
//    }
//    current.next = new Node(data)
//   }
//   instertfirst(data){
//    this.head = new Node(data, this.head)  
//   }
//    print(){
//    let current = this.head
//    while(current){
//         console.log(current.data)
//         current = current.next
//    }
//   }
//   remove(data){
//     let current = this.head
//     let lastsecond = this.head
//     while(current.next != null){
//       lastsecond = current
//       current = current.next 
//     }
//      lastsecond.next = null;
//   }
 
  
  

// }
// let list = new Linkedlist()
// list.push(1)
// list.push(2)
// list.remove()
// list.push(3)

// list.instertfirst(10)
// list.print()


// // console.log(list)




// function reverse (array, k){
//     for(i = 0 ; i < Math.floor(k/2) ; i ++){
//         let jack = array[i];
//         array[i] = array[k -1 -i];
//         array[k - 1 -i] = jack;
//     }
//     return array
 

// }
// let array = [1,2,3,4,5,6,7,8,9,10,11,12]
// let mack  = reverse (array, 6)
// console.log(mack)

// function reverse(array, k) {   /This code is actually making the loop in half so that the loop dosent to the fullest its like putting a breakk point//
//     for (i = 0; i < k/2; i++) {
//       let jack = array[i];
//       array[i] = array[k - 1 - i];
//       array[k - 1 - i] = jack;
//     }
//     return array;
//   }
  
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//   let mack = reverse(array, 9);
//   console.log(mack);



// let array = [[1, 2, 3, 4, 5],[6, 7, 8, 9, 10]]


//  function matrix (n){
//   let total = []
//   for(i = 0 ; i < n.length - 2; i++){
//     total.push([n[i][j], n[i][j + 1], n[i][j + 2],
//       n[i + 1][j + 1],
//       n[i + 2][j], n[i + 2][j + 1], n[i + 2][j + 2]
//     ]);
    
//   }
//   return total
//  }
//  console.log(matrix(array))

// 2d array


// let array = [[1, 2, 3],
//              [4, 6, 7],
//              [8, 9, 10]];

// function add(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       total += array[i][j];
//     }
//   }
//   return total;
// }

// console.log(add(array));






// let array = [[1, 2, 3],
//             [4, 6, 7],
//             [8, 9, 10]];

// function call(array) {
//   let total = []
//   for (let i = 0; i < array.length - 2; i++) { //Minus 2 is actully substracting the -2 resulting it the loop to iterate only once //
//     for (let j = 0; j < array[i].length -2; j++) {
//       let hourglass = [
//         array[i][j] + array[i][j + 1] + array[i][j + 2],
//          array[i + 1][j + 1],
//         array[i + 2][j] + array[i + 2][j + 1] + array[i + 2][j + 2]
//       ];

//         total.push(hourglass);
//     }
//   }

//   return total;
// }

// console.log(call(array));






// let R = 4;
// let C = 4;
// function ray (arr){
//    if ( R < 2 ||  C < 2){
//       return none;
//    }
//    let max_sum = Number.MIN_VALUE;
//    for ( i = 0; i < R-2; i++){//This is the number of timmes the loop will iterate//
//       for (j = 0; j< C - 2; j++){
//          let sum = (arr[i][j] + arr[i][j+1] + arr[i][j+2]) +  
//          (arr[i + 1][j+1])+ 
//          (arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]);
         
//          max_sum = Math.max(max_sum, sum)

         

//       }
//    }
//    return max_sum;
// }
// let arr =    [[1, 0, 0, 0 , 1],
//             [1 , 0, 0, 0, 1],
//              [0, 1, 0, 0, 1],
//             [0 , 0, 2,  1, 1]];
//    let res = ray(arr);
//    console.log(res);  

















        function call(arr){
          let total = []
          for( i = 0; i < arr.length-2; i++){/////this is abit confusing but the loop will run twice as we count the index from zero so 4-2 = 2 the loop will run twice
                                              ///in the first iteration of the outer loop the inner loop will run twice in sequental manner first index 0 & 1(index 0 of i)very immportant
                                              ////in the second iterstion of the outer loop the inner loop will run twice in sequental manner first index 0 & 1(index 1 0f i)veryimportant
            for(j = 0; j < arr.length -2; j++){
              total.push(arr[i][j]+ arr[i][j+1]+arr[i][j+2])
            }
          }
          return total
        }
        let n =
        [[1, 0, 0, 0 , 1],
        [1 , 0, 0, 0,  1],
        [0,  0, 0, 0,  1],
        [0 , 0, 0, 1,  1]];
       let res = call(n)
       console.log(res)



















