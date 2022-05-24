//global variables.newTask stores value in txtTask. count begins at 0 and iterates for use as identification of tasks.
let newTask=document.getElementById("txtTask");
let count=0;
//count iteration attaches id to each task, which is used in deleteTask function.function displays tasks in html file, calls functions for deletion of tasks(when needed)and clearing of forms(each time a task is entered)
function registerTask(){
    console.log(newTask.value);
    let tmp=`<li id="${count}" class="task">${newTask.value} <button onclick="deleteTask(${count})">🗑️</button> </li>`
    document.getElementById("todoList").innerHTML+=tmp;
    clearForm();
    count++;
}
//delete task when trash can is clicked, called in registerTask function
function deleteTask(x){
    document.getElementById(x).remove();
}
//clear form after entering task, called in registerTask function
function clearForm(){
    newTask.value="";
}
