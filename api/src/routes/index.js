const { Router } = require('express');
const { getRecipeList, addRecipe, getRecipeById, getAllRecipes} = require('../controllers/recipeController');
const { getAllDiets } = require('../controllers/dietController');
const router = Router();



router.get("/recipes", getRecipeList)

router.get('/recipes/:id', getRecipeById);

router.get('/home', getAllRecipes);

router.get('/types', getAllDiets);

router.post('/recipe', addRecipe);



module.exports = router;









/* const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipeRouter = require("./recipe.js");
const recipesRouter = require("./recipes.js");
const dietRouter = require("./diet.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipe", recipeRouter);
router.use("/recipes", recipesRouter);
router.use("/types", dietRouter);

module.exports = router; */
