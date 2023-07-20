let myInput = document.querySelector ( ".input" ) ;
let addBtn  = document.querySelector ( ".add"   ) ;
if(localStorage.tasks!=null){
    myArr = JSON.parse(localStorage.tasks)
}
else{
    var myArr = []
}
let mydiv = document.querySelector(".tasks");
//addTasks
myInput.onclick=function(){
    myInput.style.border="orange"
}
addBtn.onclick=function(){
    if(myInput.value!=""){
        let myOpj = {
            "id" : Date.now(),
            "title":myInput.value,
        }
        //push to array
        myArr.push(myOpj)
        localStorage.setItem("tasks",JSON.stringify(myArr))
        showTasks()
        myInput.value="";
    }
}
//showTasks
function showTasks(){
    var k = ``
    for (let i = 0; i < myArr.length; i++) {
        
        k +=`
        <div>
        <p>${myArr[i].title}</p>
        <button onclick = "delTasks(${i})" >Delete</button>
        </div>
        `
    }
    mydiv.innerHTML=k;
}
showTasks()
//delTasks
function delTasks(task){
    myArr.splice(task,1);
    localStorage.tasks=JSON.stringify(myArr)
    showTasks()
}
