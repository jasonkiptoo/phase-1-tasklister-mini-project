 document.addEventListener("DOMContentLoaded", () => {
  // your code here
 let form=  document.querySelector('form')
   form.addEventListener('submit',(e)=>{
    e.preventDefault()
    toDo( e.target.new_to_Do.value)
    form.reset()
  })

});

function toDo(toDo){
  console.log( `${toDo}`)
  //create a DOM element
  let p=document.createElement('h4')
  //create a  button to delete the toDo list item
  let btn=document.createElement('button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent= '  X'
  console.log(p)
  p.textContent=` ${toDo}  `
  p.appendChild(btn)
      document.querySelector('#list').appendChild(p)
}


//function to delete the item
function deleteToDo(e){
  e.target.parentNode.remove()
}
