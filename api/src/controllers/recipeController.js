const { Recipe, Diet } = require('../db');
const Sequelize = require("sequelize");
const { v4: uuidv4 } = require('uuid');
const { API_KEY } = process.env;
const Op = Sequelize.Op;
const axios = require('axios');

const fetch = require('node-fetch');

function getAllRecipes(req, res, next) {
    let url = (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
     
    fetch(url)
    .then((response) => {
        return response.json(); 

    })
    .then( data => {
       // console.log(data.results)
        let nwResult = data.results?.map(({id, title, image, healthScore, summary, diets}) => ({id,title, image, healthScore, summary, diets}));
       //console.log(newResult);
       const recipeDB = Recipe.findAll();
       Promise.all([recipeDB, nwResult])
       .then((response) => {
           let[recipeDBResponse, nwResultResponse] = response;

        return res.send(recipeDBResponse.concat(nwResultResponse));
       })
      
    })
    .catch((err) => next(err));
};
  

async function getRecipeList(req, res) {
     let { name } = req.query; //devuelve el nombre
     console.log(name, 'este es el query')

     if( name ) {
         const recipesApi = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true&query=${name}`)
         const recipesDb = await Recipe.findAll({
             where: {
                 name: {
                     [Op.like]:  `%${name}%`
                 }
             }, include: Diet
         })
         Promise.all([recipesApi, recipesDb])
         .then(r => {
             const [recipesApiResponse, recipesDbResponse] = r;
                if(recipesApiResponse.data.results.length !== 0 || recipesDbResponse.length !== 0) {
                  const resp = recipesDbResponse.concat(recipesApiResponse.data.results)
                    const finalRecipes = resp.map(r => (
                     {
                         id: r.id,
                         image: r.image,
                         name: (r.name ? r.name : r.title),
                         healthScore: r.healthScore,
                         diet: (r.diet ? r.diet : r.diets)
                     }))
                     res.send(finalRecipes);
                
                } else {
                    res.send({message: ' Not found any recipe by that name'})
                }
         })
         .catch(error => console.error(error));
     }
      else {
         const recipesApi = axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
         const recipesDb = await Recipe.findAll({ include: Diet })

         Promise.all([recipesApi, recipesDb])
         .then(r => {
             let [recipesApiResponse, recipesDbResponse] = r;
             const resp = recipesDbResponse.concat(recipesApiResponse.data.results)
             const finalRecipes = resp.map(r => (
                 {
                     id: r.id,
                     image: r.image,
                     name: (r.name ? r.name : r.title),
                     healthScore: r.healthScore,
                     diet: (r.diet ? r.diet : r.diets)
             }))
             res.send(finalRecipes)
         })
         .catch(error => console.error(error))
      }
    }; 
     
  
   
function getRecipeById(req, res) {

    const { id }= req.params;
    let pattern = /^[0-9]+$/;  // Use the [^0-9] expression to find any character that is NOT a digit.
    if(pattern.test(id)) { 
    axios.get(`https://api.spoonacular.com/recipes/${parseInt(id)}/information?apiKey=${API_KEY}`)   
      .then(response => {
          const finalRecipes = {
              id: response.data.id,
              image: response.data.image,
              name: response.data.title,
              summary: response.data.summary,
              healthScore: response.data.healthScore,
              stepByStep: response.data.instructions,
              diets: response.data.diets
          }
          res.send(finalRecipes)
      })
      .catch(error => console.error(error))

    }
     else {
         Recipe.findByPk(id, { include: Diet})
            .then(data => { 
                console.log(data), 
                res.send(data)
            })
            .catch(error => console.error(error));
     }
    
};
        


//Add a recipe to DB...
async function addRecipe(req, res) {

   const { name, summary, healthScore, stepByStep, diets } = req.body;
    const id = uuidv4();
    const newRecipe = { id, name, summary, healthScore, stepByStep };
    const recipe = await Recipe.create(newRecipe);
    recipe.setDiets(diets);
    res.send(recipe);  

}




module.exports = {
    addRecipe,
    getRecipeList,
    getRecipeById, 
    getAllRecipes
};


  