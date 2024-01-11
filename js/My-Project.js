function getDistanceTime(startTime) {
    const timeNow = new Date().getTime();
    const timePosted = new Date(startTime).getTime();

    const distanceSeconds = Math.floor((timeNow - timePosted) / 1000);
    const distanceMinutes = Math.floor(distanceSeconds / 60);
    const distanceHours = Math.floor(distanceMinutes / 60);
    const distanceDays = Math.floor(distanceHours / 24);
    const distanceYears = Math.floor(distanceDays / 365);

    if (distanceYears > 0) {
        return `${distanceYears} year${distanceYears > 1 ? 's' : ''} ago`;
    } else if (distanceDays > 0) {
        return `${distanceDays} day${distanceDays > 1 ? 's' : ''} ago`;
    } else if (distanceHours > 0) {
        return `${distanceHours} hour${distanceHours > 1 ? 's' : ''} ago`;
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} minute${distanceMinutes > 1 ? 's' : ''} ago`;
    } else {
        return `${distanceSeconds} second${distanceSeconds !== 1 ? 's' : ''} ago`;
    }
}

let dataMyProject = [];

function submitData(event) {
    event.preventDefault();
    const projectName = document.getElementById("inputMyProject");
    const startDate = document.getElementById("startDate");
    const endDate = document.getElementById("endDate");
    const description = document.getElementById("inputContent");
    const technologies = document.querySelectorAll("input[type=checkbox]:checked");
    const image = document.getElementById("inputImage");

    if (projectName === "" || startDate === "" || endDate === "" || description === "" || technologies === "" || image.files.length === 0) {
        alert("Please fill in all fields correctly!!!");
        return;
    }

    if (projectName && startDate && endDate && description && technologies && image && image.files.length > 0) {
        const projectNameValue = projectName.value;
        const startDateValue = startDate.value;
        const endDateValue = endDate.value;
        const descriptionValue = description.value;
        const technologiesValue = Array.from(technologies).map(
            (tech) => tech.value
        );
        const imageValue = image.files[0];
        const postAt = new Date();
        const durationValue = getDistanceTime(startDateValue, endDateValue);

        if (imageValue) {
            const imageUrl = URL.createObjectURL(imageValue);

            const MyProject = {
                title: projectNameValue,
                content: descriptionValue,
                technologies: technologiesValue,
                image: imageUrl,
                postAt: postAt,
                author: "Ravano Akbar Widodo",
                get duration() {
                    return getDistanceTime(postAt);
                }
            };

            dataMyProject.push(MyProject);
            console.log("My Project", dataMyProject);
            renderMyProject();
        }
    }
}

function renderMyProject() {
    const contentsElement = document.getElementById("contents");
    contentsElement.innerHTML = '';

    for (let index = 0; index < dataMyProject.length; index++) {
        contentsElement.innerHTML += `
        <div class="My-Project-list-item">
            <div class="My-Project-image">
                <img src="${dataMyProject[index].image}" alt="" />
            </div>
            <div class="My-Project-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h1>
                    <a href="My-Project-detail.html" target="_blank">${dataMyProject[index].title}</a>
                </h1>
                <h3>Duration : ${dataMyProject[index].duration}</h3>
                <br>
                <div class="detail-My-Project-content">
                    ${dataMyProject[index].postAt} | ${dataMyProject[index].author}
                </div>
                <p style="text-align: center;">
                   ${dataMyProject[index].content}
                </p>
                <br>
                <div class="technologies" style="text-align: center;">
                    <label>Technologies :</label>
                    <ul style="list-style: none; padding: 0;">
                        ${dataMyProject[index].technologies.map((tech) => `<li>${tech}</li>`).join('')}
                    </ul>
                </div>
                <div class="card-icons">
                     <i class="fa-brands fa-google-play fa-xl"></i>
                     <i class="fa-brands fa-android fa-xl"></i>
                     <i class="fa-brands fa-java fa-lg"></i>
                </div>
            </div>
        </div>`;
    }
}

renderMyProject();

setInterval(() => {
    renderMyProject();
}, 1000);
