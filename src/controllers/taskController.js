import Task from '../models/Task';


export async function createTask (req,res) {
    try {
        const { name, done, projectid } = req.body;
        console.log(req.body);
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
  


// export async function GetTasks (req,res) {

//     try {
//         const tareas =  await Task.findAll();
//         res.json({
//             data: tareas
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: 'Algo a salido mal ',
//             data: {}
//         });
//     }
// } 

export async function getTaskById (req,res) {  }

export async function deleteTask (req,res) {  }

export async function updateTask (req,res) {  }