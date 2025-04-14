// (async function myFetch() {
//     const res: Response = await fetch("http://localhost:3000/api/projects");
//     if(res.ok) {
//         // const data: Project[] = await res.json();
//         // Store each data in HTML file
//         // data.forEach((project) => {
//         //     const div = document.createElement("div");
//         //     div.setAttribute("style", "border solid 1px");
//         //     div.innerHTML = `<p>${project.id}</p><p>${project.title}</p>`;
//         //     document.getElementById("app")?.appendChild(div);
//         // })
//         // console.log(data);
//         console.log(res);
//     }
// })
fetch("http://localhost:3000/api/projects")
    .then(res => res.json())
    .then((data) => {
    const container = document.getElementById("projects");
    console.log(data);
    data.projects.forEach((project) => {
        console.log(`Project`, project);
        const projectDiv = document.createElement("div");
        projectDiv.id = project._id;
        const titleDiv = document.createElement("h2");
        titleDiv.setAttribute("class", `title-${project._id}`);
        titleDiv.innerText = project.title;
        const descriptionDiv = document.createElement("p");
        descriptionDiv.setAttribute("class", `description-${project._id}`);
        descriptionDiv.innerText = project.description;
        // Add modify button
        const button = document.createElement('button');
        button.textContent = 'Modify';
        button.addEventListener('click', (e) => {
            // Redirect to project.html page
            location.assign("http://127.0.0.1:5500/portfolio-crud-frontend/public/project.html");
            fetch(`http://localhost:3000/api/projects/${project._id}`)
                .then(response => response.json())
                .then(data => {
                const div = document.getElementById('app');
                // Create a UI component to display project data
                const specificProjectDiv = document.createElement('div');
                const { project } = data;
                specificProjectDiv.setAttribute('id', project._id);
                const specificProjectTitle = document.createElement('h2');
                specificProjectTitle.textContent = project.title;
                const specificProjectDescription = document.createElement('p');
                specificProjectDescription.textContent = project.description;
                specificProjectDiv.append(specificProjectTitle, specificProjectDescription);
                div?.appendChild(specificProjectDiv);
            })
                .catch((err) => console.error(err));
        });
        projectDiv.append(titleDiv, descriptionDiv, button);
        container?.appendChild(projectDiv);
    });
    /*
    <div id="projectID">
        <h2 class="title-projectID">title</h2>
        <p class="description-projectID">description</p>
    <div>
    
    */
});
export {};
