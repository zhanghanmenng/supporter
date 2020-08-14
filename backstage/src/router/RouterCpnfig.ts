
import {config} from "../uilt/interface"
import Main from "../view/main"
// interface
import AddQuestions from "../view/children/AddQuestions"
const router:config[]=[
        {
            path:'/main',
            component:Main,
            children:[
                    {
                        path:'/main/addQuestions',
                        component:AddQuestions,
                    
                    }
            ]
        },{
            path:'/',
            redirect:'/main'
        }
]

export default router