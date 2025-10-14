// criando primeiro endpoint 

function getDataDb(request, response){
  response.status(200).json({"result":"O primeiro metódo da API esta funcionando!"})
}

export default getDataDb;