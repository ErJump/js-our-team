let teamList = [
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
];

const container = document.getElementById('cardContainer');

for (let i = 0; i < teamList.length; i++){
    const currentMember = teamList[i];
    const newDiv = document.createElement('div');
    //const newImg = document.createElement('img');
    newImg.setAttribute('src', `img/${currentMember.img}`);
    newDiv.classList.add('col-4', 'py-3');
    newDiv.innerHTML = `<div class="card" style="width: 18rem;">
        <img src="img/${currentMember.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${currentMember.name}</h5>
        <p class="card-text">${currentMember.role}</p>
        </div>
    </div>`;
    console.log(`${currentMember.name} ${currentMember.role} ${currentMember.img}`);
    //newDiv.append(newImg);
    container.append(newDiv);
}
