import { countries } from "./countries/countries.js"
import { Counter } from "./countries/Counter.js";

const consultData = async ({target})=>{

    const datos = await countries.selectAll();
    let cont = 0;
    if(target.textContent == "Siguiente") {
        Counter.addCounter();
    }else {
        Counter.subsCounter();
    };
    for(let i = Counter.r1; i<=Counter.r2;i++){
        let attr = document.getElementById("tr"+cont);
        attr.textContent = datos[i].name.common;
        cont += 1;
    }
}


const contenedor = document.querySelector('.container');
const table = document.createElement('table');
const head = document.createElement('thead');
const h = document.createElement('th');
h.textContent = "PAISES";
head.append(h);
table.append(head);
const bod = document.createElement('tbody');

for(let i = 0; i<9; i++){
    const b = document.createElement('tr');
    b.id = "tr"+i;
    b.textContent =" *";
    bod.append(b);
}
table.append(bod);

let b1 = document.createElement("button");
b1.id = "boton1";
b1.textContent = "Atras";
b1.addEventListener('click',consultData); 

let b2 = document.createElement("button");
b2.id = "boton2";
b2.textContent = "Siguiente";
b2.addEventListener('click',consultData); 



contenedor.append(table,b1,b2)
