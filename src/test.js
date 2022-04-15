import {types, projects} from './pages/Projects/Datas.js'

projects.map( project  => {
    if(types.find(project.type)) {
        console.log(project)
        return {
            project
        }
    }
})
