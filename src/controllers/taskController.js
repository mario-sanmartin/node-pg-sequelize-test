import Task from '../models/Task';


export async function createTask (req,res) {
   
    try {
        const { name, done,projectid } = req.body;
        // console.log(req.body);
        const newTask = await Task.create({
            name,
            done,
            projectid
        }, {
                fields: ['name', 'done','projectid'] //Campos a pasar
            });
        res.json({ message: 'New Task created' });
    }
    catch (error) {
        console.log(error);
    }
};
  
export async function getTasks (req,res) {

        try {
            const task = await Task.findAll({
                attributes:['id','name','done','projectid'],
                order:[
                    ['id','ASC'] //Criterio para ordenar
                ]
            });
            res.json({task});
        } catch (error) {
            console.log(error);
        }
  
} 

export async function getTaskById (req,res) {
    const { id } = req.params;

    const oneTask = await Task.findOne({
        where:{
            id
        },
        attributes: ['id','name','done','projectid'],
    });
    res.json({message: 'Aqui esta tu tarea papu',
    oneTask
   });
    
  
  }

export async function deleteTask (req,res) {

    const {id} = req.params; //Desde aqui obtengo el id
    try{
    //const deletetask =
     await Task.destroy({
        where:{
            id
        }
    });
    res.json({message: 'Tarea Eliminada'})
    }catch(error){
        console.log(error);
    }
  }

export async function updateTask (req,res) { 
    const {id} = req.params;
    const {name,done,projectid} = req.body;

   const tarea =   await Task.findOne({ //Con esto buscamos el id que coincida
        attributes: ['name','done','projectid'], //Los atributos que queremos
        where:{
            id
        }
    });
     const tareaUpdate = await Task.update({ //Aqui indicamos que datos queremos actualizar
        name,
        done,
        projectid
    },
     {
         where: {id} //El id sea igual
     });
     res.json({
         message: 'Tarea RecontraActualizada',
         tareaUpdate
     })

 }

 
 export async function getTaskByProject(req,res){
     const {projectid} = req.params;
       const tareas =  await Task.findAll({
           attributes:['id','name','done','projectid'],
            where:{projectid}
        });
        res.json({tareas})
 }