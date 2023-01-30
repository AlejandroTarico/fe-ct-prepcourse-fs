/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   arregloDeArreglos = [];
   for (var dato in objeto) {
      arregloDeArreglos.push([dato, objeto[dato]]);
   }
   return arregloDeArreglos;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var objeto = {};
   for (var i = 0; i < string.length; i++) {
      if (Object.keys(objeto).includes(string[i])) {
         objeto[string[i]] += 1
      } else objeto[string[i]] = 1
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrNuevo1 = '';
   var arrNuevo2 = '';

   for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase() /*&& string[i] !== string[i].toLowerCase()*/) { // Lo que se encuentra comentado es para evitar que el condicional no deje pasar caracteres que no sean letras.
         arrNuevo1 += string[i];
      } else {
         arrNuevo2 += string[i];
      }
  }
  return (arrNuevo1 + arrNuevo2);
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arregloDeFrase = frase.split(' ');
   var arrFrase2 = '';
   for (var i = 0; i < arregloDeFrase.length; i++) {
      for (var j = arregloDeFrase[i].length - 1; j >= 0; j--) {
         arrFrase2 += arregloDeFrase[i][j];
      }
      if (i < arregloDeFrase.length -1){
         arrFrase2 += ' ';
      }
   }
   return arrFrase2;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var nro = numero.toString();
   var cont = 0; 
   for (var i = 0; i < nro.length; i++) {
      if (nro[i] === nro[(nro.length - 1) - i] && i < nro.length - i) {
         cont += 1;
      }
      else break;
   }
   if (cont >= nro.length/2) return 'Es capicua';
   else return'No es capicua';
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var abc = string.split('');
   for (var i = 0; i < abc.length; i++) {
      if (abc[i] === 'a' || abc[i] === 'b' || abc[i] === 'c') {
         delete abc[i];
      }
   }
   return abc.join('');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   for (var i = 0; i < arrayOfStrings.length; i++){
      var arrNuevo = arrayOfStrings[i]
      var j = i - 1
      while (j >= 0 && arrNuevo.length < arrayOfStrings[j].length) {
          arrayOfStrings[j+1] = arrayOfStrings[j]
          j--
      }
      arrayOfStrings[j+1] = arrNuevo;
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var arrUnion = [];
   for (var i = 0; i < array1.length; i++){
      for (var j = 0; j < array2.length; j++){
         if (array1[i] === array2[j]) {
            arrUnion.push(array1[i]);
         }
      }
   }
   return arrUnion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
