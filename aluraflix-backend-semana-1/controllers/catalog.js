const { validateVideos } = require('../middlewares/videos');
const RegisterVideo = require('../models/catalog')

module.exports = app => {
    app.get('/', (req, res) => {
        RegisterVideo.listar(res)
    });

    app.get('/:id', (req, res) => {
        const id = parseInt(req.params.id)

        RegisterVideo.searchForId(id, res)
    })

    app.post('/cadastro/video', [validateVideos],(req, res) => {
        const registerVideo = req.body

        RegisterVideo.adiciona(registerVideo, res)

        console.log(registerVideo)
    });
};

