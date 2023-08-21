// const colorChange= (color,delay)=>{
//         return new Promise((resolve,reject)=>{
//             setTimeout(()=>{
//                 document.body.style.backgroundColor=color
//                 resolve()
//                 console.log("Every thing is working fine")
//             },delay)
//         })
// }
// async function rainbow(){
//     await colorChange('blue',2000);
//     await colorChange('green',2000);
//     await colorChange('yellow',2000);
//     await colorChange('purple',2000);
//     await colorChange('voilet',2000);
//     await colorChange('black',2000);
// }


// colorChange('red',2000)
// .then(()=>colorChange('blue',2000))
// .then(()=>colorChange('green',2000))

// const users = [{
//     user:"bhuppi",
//     password:"hello",
//     email:"bhuppi@gmail.com",
//     gender:"male",
// }]


// const login = async(usename,password)=>{
//     console.log(users)
//     if(!usename||!password) throw "Fill both filed"
//     const valid = users.find(u=>u.user===usename && u.password ===password)
//       if(valid){
//         console.log(valid)
//         return "welcome"
//       }else{
//         console.log('wrong user')
//       }
//     throw "invalid password"
// }

// const signUp =async(usename,passowrd,email,gender)=>{
//     if(!usename || !passowrd || !email || !gender) throw "fill all field"
//     users.push({
//         user:usename,
//         password:passowrd,
//         email:email,
//         gender:gender
//     })
//     console.log(users)

// }
// signUp('bhupender','bhupender','bhupender@gmail.com','male').then((msg)=>{
//     console.log("user signedUp")
// }).catch((err)=>{
//     console.log(err)
// })


// login('bhupender','bhupender').then((msg)=>{
//     console.log("logged in")
//     console.log(msg)
// }).catch((err)=>{
//     // console.log("ERRor")
//     console.log(err)
// })

// fetch("https://swapi.dev/api/people/1/")
// .then((res)=>{
//     console.log("REsolved",res)
//     res.json().then(data=>console.log("JSON Done",data))
// }).catch((e)=>{
//     console.log("ERROR",e)
// })
// const loadDataPeople = async()=>{
//     try {
//         const res = await fetch("https://swapi.dev/api/people/1/")
//         const data  = await res.json();
//         console.log(data)
//         const res2 = await fetch("https://swapi.dev/api/people/2/")
//         const data2 =await res2.json();
//         console.log(data2)
//     } catch (error) {
//         console.log("ERROR",error)
//     }
// }

// axios.get("https://swapi.dev/api/people/1/")
// .then(res=>{
//     console.log("RESPONSE",res)
// }).catch(e=>{
//     console.log("ERROR",e)
// })
// const getStarWarsPerson = async(id)=>{
//     try {
//         const res = await axios.get(`https://swapi.dev/api/people/${id}/`)
//         console.log(res.data);
        
//     } catch (error) {
//         console.log(error)
//     }
// };

let list = document.querySelector(".list")
let button = document.querySelector('button')
const addNewJoke = async()=>{
  const jokeText = await getDataJoke()
  let meme = jokeText.data.joke
  const li = document.createElement("li")
  li.style.padding='5px'
  li.style.fontWeight='bold'
  li.textContent = meme
  list.append(li)
  console.log("Succesfully Appended!")
}
button.addEventListener('click',addNewJoke)
const getDataJoke = async()=>{
  try {
    const config = {headers:{Accept:'application/json'}}
    const res = await axios.get("https://icanhazdadjoke.com/",config)
    return res
  } catch (e) {
    console.log(e)
    console.log("Looks like there is a problem with the server. Try some moment later!")
  }
}