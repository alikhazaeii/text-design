console.log("hello");
const data:string[] = [
  'Ali khazaei'
]
let index:number = 0
let num:number = 0
let cloneNum:number = 0
const h1 = document.getElementById('demo') as HTMLElement;
const mySet = setInterval(() => {
  if (index < data.length) {
      let x = data[index]
      if (num < x.length) {
          h1.innerHTML += x[num]
          num++
      }else if(num==x.length){
          cloneNum = num
          num++
      } else{
          console.log(x.length);
          
          if(cloneNum > 0){
              cloneNum--
              h1.innerHTML = x.slice(0 , cloneNum)
          }else{
              index++
              num=0
          }
      }
  }
  else{
      // clearInterval(mySet)
      index=0
  }
}, 200);
