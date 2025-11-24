document.addEventListener('DOMContentLoaded', () => {
    
    //it shows time
    function updateDateTime() {
        const now = new Date();

        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        const dateText = now.toLocaleDateString("ru-RU", dateOptions);
        const timeText = now.toLocaleTimeString("ru-RU", timeOptions);

        document.getElementById('date').textContent = `${dateText} — ${timeText}`;
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    const Taskform = document.getElementById("Task-form");
    const Taskinput = document.getElementById("Task-input");
    const Tasklist = document.getElementById("Task-list");


    //ToDo list
    Taskform.addEventListener('submit', (e)=>{
        e.preventDefault();
        addTask(Taskinput.value);
        Taskinput.value = '';
    });

    function addTask(task){
        const li = document.createElement("li");
        li.textContent = task;

        const CompletedTask = document.createElement("input");
        CompletedTask.type = "checkbox";
        CompletedTask.addEventListener("change", ()=>{
            if(CompletedTask.checked){li.style.background='#00ff1591';}
            else{li.style.background='#3d3d3d';}
        });

        const deletebutton = document.createElement("button");
        deletebutton.textContent = 'Delete';
        deletebutton.addEventListener("click", ()=>{
            Tasklist.removeChild(li);
        });
        
        li.appendChild(CompletedTask);
        li.appendChild(deletebutton);
        Tasklist.appendChild(li);
    }

    // const Activitiesform = document.getElementById("Activities-form");
    // const Activitiesinput = document.getElementById("Activities-input");
    // const Timeinput = document.getElementById("Time-input")

    // Taskform.addEventListener('submit', (e)=>{
    //     e.preventDefault();
    //     addTask(Activitiesinput.value);
    //     Activitiesinput.value = '';
    // });
    
    // function addActivity(Activity){
    //     const li = document.createElement("li");
    //     li.textContent = Activity;

    //     const deletebutton2 = document.createElement("button");
    //     deletebutton2.textContent = 'Delete';
    //     deletebutton2.addEventListener("click", ()=>{
    //         Tasklist.removeChild(li);
    //     });
        
    //     li.appendChild(deletebutton2);
    //     Tasklist.appendChild(li);
    // }
});