
/* genera un numero random para obtener el indice de un array*/ 


const getRandomArray = (array) => {
   const indexRandom = Math.floor(Math.random() * array.length);
   return array[indexRandom]
}
export default getRandomArray