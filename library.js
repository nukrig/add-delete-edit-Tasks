export const setup = (skillList)=>{
    let skillListHTML = ''
for(let i=0;i<skillList.length;i++){
    let skill=skillList[i]
    skillListHTML +=
    `<li id=${i} class="skill ${!skill.active ? "" : 'skillProgress'}">
    <input id="skill-${i}" class='skill-checkbox' type="checkbox" ${!skill.active ? "" : 'checked'}>
    <label for="skill-${i}" class="skill-text">${skill.name}</label>
    </li>`
}
document.getElementById('skills').innerHTML = skillListHTML
}

export const skillList = [
    {
        name: 'HTML5',
        active: true,
    },
    {
        name: 'CSS3',
        active: true,
    },
    {
        name: 'SCSS',
        active: true,
    },
    {
        name: 'JAVASCRIPT',
        active: true,
    },
    {
        name: 'GIT-HUB',
        active: true,
    },
    {
        name: 'Git',
        active: false,
    },
    {
        name: 'NODE.JS',
        active: false,
    },
    {
        name: 'REACT',
        active: false,
    },
];