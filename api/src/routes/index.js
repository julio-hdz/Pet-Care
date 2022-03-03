const { Router } = require('express');
const { verifyEmail, hash, create, search, compare } = require('../services/login');
const { key, validate } = require('../services/resetPassword');
const { sendEmail } = require('../services/SendEmail');
const { Update } = require('../services/updateUser');
const  UserRoutes  = require('./users');
const PostsRoutes  = require('./posts');
const ReviewRoutes  = require('./reviews');



const router = Router();

router.use("/users", UserRoutes)
router.use('/posts', PostsRoutes)
router.use('/reviews', ReviewRoutes)

router.post("/register", async (req, res) => {
    let { email, password } = req.body
    let user = await search({ email: email.toLowerCase() })
    if (!user) {
        console.log('estoy aca')
        try {
            let verify = verifyEmail(email.toLowerCase())
            if (verify === true && password.length >= 8) {
                let hasheador = await hash(password)
                let result = await create(email, hasheador)
                return res.status(201).send(result)
            }
            if (verify === false) {
                return res.status(404).send("Email invalido")
            }
            if (password.length<8){
                return res.status(404).send("La contraseña debe contener al menos 8 caracteres")
            }
        } catch (error) {
            return res.status(404).send(error)
        }
    } else {
        return res.status(404).send("El correo ya tiene un perfil restablezca la contraseña")
    }
})

router.post("/login", async (req, res) => {
    let { email, password } = req.body
    try {
        let user = await search({ email: email.toLowerCase() })
        if (user) {
            let check = await compare(password, user)
            if (check === true) {
                return res.status(200).json(user.id)
            }
            if (check === false) {
                return res.status(404).send("Lo siento password incorrecta")
            }
        }
    } catch (error) {
        return res.status(404).send(error)
    }
})
router.put("/forgot-password", async (req, res) => {
    const { email } = req.body
    let user = await search({ email: email.toLowerCase() })
    if (user) {
        let token = key()
        let update = await Update({ token: token, email: email.toLowerCase() })

        //armamos el mensaje
        let asunto = "Cambio de contraseña"
        let mensaje = `Usted solicito un cambio de contraseña para hacer efectivo el mismo coloque el siguiente codigo cuando se lo soliciten ${token}; verifique que coincidan mayusculas y minusculas `;
        //envia el email
        let send = sendEmail(email, mensaje, asunto)
        return res.send(update)
    }
    return res.status(404).send("Usuario no encontrado")
})
router.put("/reset", async (req, res) => {
    const { email, token, password } = req.body
    let up = await validate({ email: email, token: token, password:password})
    if(up){
        return res.send(up)
    } 
    return res.status(404).send("error")
})


module.exports = router;