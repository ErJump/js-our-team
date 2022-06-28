const teamList = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name : 'Angela Caroll',
        role : 'Founder & CEO',
        img : 'angela-caroll-chief-editor.jpg',
    },
    {
        name : 'Walter Gordon',
        role : 'Office Manager',
        img : 'walter-gordon-office-manager.jpg',
    },
    {
        name : 'Angela Lopez',
        role : 'Social Media Manager',
        img : 'angela-lopez-social-media-manager.jpg',
    },
    {
        name : 'Scott Estrada',
        role : 'Developer',
        img : 'scott-estrada-developer.jpg',
    },
    {
        name : 'Barbara Ramos',
        role : 'Graphic Designer',
        img : 'barbara-ramos-graphic-designer.jpg',
    },
    {
        name : 'Nyan Cat',
        role : 'Mascotte',
        img : 'poptart1redrainbowfix_1.0.gif',
    }
];

const container = document.getElementById('cardContainer');

for (let i = 0; i < teamList.length; i++){
    const currentMember = teamList[i];
    const newDiv = createDiv();
    //const newImg = document.createElement('img');
    //newImg.setAttribute('src', `img/${currentMember.img}`);
    modifyHTML(newDiv, currentMember); 
    console.log(`${currentMember.name} ${currentMember.role} ${currentMember.img}`);
    //newDiv.append(newImg);
    container.append(newDiv);
}

function createDiv (){
    const div = document.createElement('div');
    div.classList.add('col-4', 'py-3');
    return div;
}

function modifyHTML (div , member){
    div.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="img/${member.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <p class="card-text">${member.role}</p>
        </div>
    </div>`;
}