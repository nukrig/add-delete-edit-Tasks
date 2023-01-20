import { setup , skillList } from "./library.js";
setup(skillList,'skills')
const addskill = document.getElementById('add-skill')
const addSkillInput = document.getElementById('add-skillInput')
addskill.addEventListener('click',(event)=>{
    event.preventDefault();
    if(addSkillInput.value){
        skillList.push({
            name: addSkillInput.value.toUpperCase(),
            active: false,
        })
        addSkillInput.value=''
        setup(skillList)
    }

})
const ul=document.getElementById('skills')
const items =Array.from(ul.querySelectorAll('.skill-checkbox, .skill-text'))
ul.addEventListener('click',(event)=>{
    let id = Number(event.target.parentNode.getAttribute('id'))
    let skill = skillList[id]
    skill.active = !skill.active
    setup(skillList)
})

const del = document.getElementById('delete')
del.addEventListener('click',(event)=>{
    event.preventDefault()
    skillList.pop()
    setup(skillList)
})






