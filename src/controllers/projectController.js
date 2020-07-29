import Project from '../models/Project';


//Mostrar Registros
export const getProyects= async (req,res) =>{

    try {
        const proyectos =  await Project.findAll();
        res.json({
            data: proyectos
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo a salido mal ',
            data: {}
        });
    }

}

//Crear proyecto
export const createProject = async (req,res)=>{
    const {name,priority,description,deliverydate} = req.body;

    try {
        let newProject = await Project.create({
            name,
            priority,
            description,
            deliverydate
        },{
            fields: ['name','priority','description','deliverydate']
        
        });
    
        if(newProject){
            return res.json({
                message:'Projecto Creado',
                data: newProject
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Algo a salido mal ',
            data: {}
        });
    }
 }


 export async function getProyectByID  (req,res) {
     const { id } = req.params;
      const project = await  Project.findOne({
            where:{
                id
            }
        });
    //   res.json({
    //       data: project
    //   })  
    res.json(project);
 }

 export async function deleteProyect (req,res){
   const {id} = req.params; 
   const deleteRowCount = await Project.destroy({
         where:{
             id
         }
     });
    
     res.json({
         message: 'Proyecto Rippeado al 5',
         count: deleteRowCount
         
     })

 }

 export async function updateProyect (req,res){
     const { id } = req.params; //capturamos el id
     const {name,priority,description,deliverydate } = req.body; //datos a actualizar.

    const projects = await Project.findAll({
         atributes:['id','name','priority','description','deliverydate'],
         where:{
             id
         }
     });
     
     if(projects.length > 0){
         projects.forEach(async (project) => {

            await project.update({
                name,
                priority,
                description,
                deliverydate
            });
             
         });
     }
     return res.json({
         message: 'Proyecto actualizado Correctamente',
         data: projects
     })
    }