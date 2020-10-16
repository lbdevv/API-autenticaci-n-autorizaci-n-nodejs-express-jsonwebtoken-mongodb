import Role from '../models/Role'

export const createRoles = async() => {

   const count = await Role.estimatedDocumentCount() //Esto es similar a hacer una consulta a una tabla usando .count() para ver si existencias

   try {
    if(count > 0) return

    const values = await Promise.all([ //Se usa para ejecutar una bolsa de código al mismo tiempo y ganar rendimiento en el servidor
        new Role({name: 'user'}).save(),
        new Role({name: 'moderator'}).save(),
        new Role({name: 'admin'}).save()
    ])

    console.log(values)
   } catch (error) {
       console.log(error)
   }
}