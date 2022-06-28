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
    const newImg = document.createElement('img');
    newImg.setAttribute('src', `img/${currentMember.img}`);
    newDiv.classList.add('col-12', 'py-3');
    newDiv.innerHTML = `${currentMember.name} ${currentMember.role}`;
    console.log(`${currentMember.name} ${currentMember.role} ${currentMember.img}`);
    newDiv.append(newImg);
    container.append(newDiv);
}