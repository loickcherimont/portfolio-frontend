import { Project } from './Project';

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

        data.projects.forEach((project: Project) => {
            const projectDiv = document.createElement("div");
            projectDiv.id = project.id;

            const titleDiv = document.createElement("h2");
            titleDiv.setAttribute("class", `title-${project.id}`);
            titleDiv.innerText = project.title;

            const descriptionDiv = document.createElement("p");
            descriptionDiv.setAttribute("class", `description-${project.id}`);
            descriptionDiv.innerText = project.description;


            projectDiv.append(titleDiv, descriptionDiv);

            container?.appendChild(projectDiv);
        })
        /*
        <div id="projectID">
            <h2 class="title-projectID">title</h2>
            <p class="description-projectID">description</p>
        <div>
        
        */
    });