const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// get all pattents

const getAll = async (req,res) =>{
    try {
        const custumers = await prisma.custumers.findMany();
        res.json({
            status : 'success',
            custumers
        });
    } catch (error) {
        res.json({
            status:'Error',
            error,
        })
    }
}

// create custumers

// const create = async (req,res) =>{
//     try {
//        const {Name,costumerPhone,costumerEmail} =  req.body;
//        if(! Name || !costumerPhone || !costumerEmail){
//         res.json({
//             status: 'Error',
//             message: 'Please provide data',
//           });

//           return;
//        }

//        const createUser = await prisma.custumers.create({
//         data : {
//             Name,
//             costumerPhone,
//             costumerEmail
//         },
//        });

//        res.status(201).json({
//         status: 'success',
//         createUser,
//       });

//     } catch (error) {
//         res.json({
//             status: 'Error',
//             message:  'Error',
//           });
//     };
// }

const create  = async (req,res) =>{
    try {
        const {Name,costumerPhone,costumerEmail} =  req.body;


        const checkEmail = await prisma.costumers.findFirst({
            where :  {
              costumerEmail,
            }
        })

        if(checkEmail) {
            res.json({
                status : "Error",
                msg : "Email is already in use"
            })
            return
        }

       

    const newUser = await prisma.custumers.create({
        data:{
            Name,
            costumerEmail,
             costumerPhone,
        }
    })
    res.json({
        newUser
    })
    } catch (error) {
        console.log(error)
        res.json(error)
    }
}



module.exports ={
    getAll,
    create
}


