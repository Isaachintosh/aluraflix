const { check, validationResult } = require('express-validator');

exports.validateVideos = [
  check('title', 'Título é obrigatório')
    .trim()
    .notEmpty()
    .matches(/^([a-zA-Z\u00C0-\u00FF0-9 -])$/),
  check('description', 'Descrição é obrigatória').trim().notEmpty(),
  check('url', 'Url obrigatória')
    .trim()
    .notEmpty()
    .isURL().withMessage('Url inválida'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },
];
