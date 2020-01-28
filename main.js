document.getElementById('green').addEventListener('click',greenColor);

function greenColor(e){

   var  greenImage = document.querySelector('.green');
   greenImage.src='/image/vert.png';
   greenImage.classList.add('active');
   greenImage.classList.remove('hidden');

   var greenButton = document.getElementById('green');
   greenButton.classList.add('active');

   document.body.style.backgroundColor= '#3af361';
  var price = document.querySelector('.price>button');
   price.style.backgroundColor= '#3af361';
   price.style.color= '#000';

   var type = document.querySelector('.type');
   type.style.color= '#3af361';


   removeOrange();
   removeGrey();

}

/******************* */

document.getElementById('grey').addEventListener('click',greyColor);

function greyColor(e){

   var  greyImage = document.querySelector('.grey');
   greyImage.src='/image/gris.png';
   greyImage.classList.add('active');
   greyImage.classList.remove('hidden');

   var greyButton = document.getElementById('grey');
   greyButton.classList.add('active');

   document.body.style.backgroundColor= '#7c7c7c';
  var price = document.querySelector('.price>button');
   price.style.backgroundColor= '#7c7c7c';
   price.style.color= '#fff';

   var type = document.querySelector('.type');
   type.style.color= '#7c7c7c';


   removeOrange();
   removeGreen();

}


/******************* */

document.getElementById('orange').addEventListener('click',orangeColor);

function orangeColor(e){

   var  orangeImage = document.querySelector('.orange');
   orangeImage.src='/image/orange.png';
   orangeImage.classList.add('active');
   orangeImage.classList.remove('hidden');

   var orangeButton = document.getElementById('orange');
   orangeButton.classList.add('active');

   document.body.style.backgroundColor= '#f37d3a';
  var price = document.querySelector('.price>button');
   price.style.backgroundColor= '#f37d3a';
   price.style.color= '#fff';

   var type = document.querySelector('.type');
   type.style.color= '#f37d3a';


   removeGrey();
   removeGreen();

}

// Remove Orange color
function removeOrange(){

    document.querySelector('.orange').classList.remove('active');
    document.querySelector('#orange').classList.remove('active');
    document.querySelector('.orange').classList.add('hidden');

}

function removeGreen(){

    document.querySelector('.green').classList.remove('active');
    document.querySelector('#green').classList.remove('active');
    document.querySelector('.green').classList.add('hidden');

}

function removeGrey(){

    document.querySelector('.grey').classList.remove('active');
    document.querySelector('#grey').classList.remove('active');
    document.querySelector('.grey').classList.add('hidden');

}