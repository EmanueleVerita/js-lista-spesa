

const productList = ['pane' , 'latte' , 'uova' , 'moet'];

const list = document.querySelector('ul');

//con ciclo for
/*
for (let i = 0 ; i < productList.length ; i++){

    console.log(i , productList[i]);

    const newLi = document.createElement('li');
    newLi.innerHTML = productList[i];
    list.append(newLi);

}

*/

//con ciclo while

let j = 0;

while (j < productList.length){

    console.log(j , productList[j]);

    

    list.innerHTML += `
    
        <li>
            ${productList[j]}
        </li>
    
    `;

    j++;

}