/*this js file contains all the code needed to get information 
from the json file and display the projects I have done so far...*/
const portfolioSection = document.querySelector('.cont_car_proyects');

//First we get the data from the json...
const projects = async () => {
    const url = 'https://ramedina98.github.io/api_nat/projects.json'; 

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data; 
    } catch (error) {
        console.error('Error: ', error);
        return []; 
    }

}
const stack = (stackItems) => {
    const elements = stackItems.map(item => `<div class="leng"><i class="${item}"></i></div>`);
    return elements.join(''); 
};
const displayTheData = async () => {
    try {
        const data = await projects();

        //we build the carts that will contain everything...
        data.forEach(item => {
            const projectCart = `
                <div class="cont_car">
                <div class="img_cont">
                    <img src="${item.img}">
                </div>
                <div class="information">
                    <div class="title">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="extracto">
                        <p>
                            ${item.description}
                        </p>
                    </div>
                    <div class="tec">
                        ${stack(item.stack)}
                    </div>
                    <div class="links">
                        <a target="_blank" href="${item.links.github}">
                            <div class="circle_link">
                                <i class="fab fa-github icono-github"></i>
                            </div>
                        </a>
                        <a target="_blank" href="${item.links.page}">
                            <div class="circle_link">
                                <i class="fas fa-link"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            `

            portfolioSection.insertAdjacentHTML('beforeend', projectCart);
        });
        console.log(data[1].stack[1])
    } catch (error) {
        console.error('Error in obtaining data', error);
    }
}

displayTheData();