/** Interface et/ou requêtes pour afficher les pièces dont le prix hors taxes est 
                supérieur à un prix donné*/
const Inprix=document.querySelector('#prix')
const Prechercher=document.querySelector('#Prechercher')
const Ptbody=document.querySelector('#Ptbody')

const addPiece=(piece)=>{
    const tr =document.createElement("tr")
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")

    Ptbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    const {IDPiece , DescPiece ,PUHT} =piece
    td1.innerText=IDPiece
    td2.innerText=DescPiece
    td3.innerText=PUHT
}
Prechercher.addEventListener('click',()=>{
    Ptbody.innerHTML = '';
    const prix=Inprix.value
    const xhrPost= new XMLHttpRequest();
    const url ="http://localhost:3000/Prechercher"
    xhrPost.open("POST",url,true);
    xhrPost.setRequestHeader("Content-Type", "application/json");
    xhrPost.addEventListener('load', () => {
       if (xhrPost.status === 200) {
           const response = JSON.parse(xhrPost.responseText);
           response.result.forEach(f => {
            addPiece(f);
         });
         
           
       } else {
           console.error('Failed to add facture. Status:', xhrPost.status);
       }
   });
 
   xhrPost.send(JSON.stringify({ prix: prix }));


})


/************ Interface et/ou requêtes pour afficher les ordres de réparation qui n’ont pas de 
                pièces à changer (quantité =0)*/


const Orechercher=document.querySelector('#Orechercher')
const Otbody=document.querySelector('#Otbody')

const addOrdre=(piece)=>{
    const tr =document.createElement("tr")
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")
    const td4=document.createElement("td")


    Otbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    const {IDOrdre , DiagnosticPanne ,NbHeuresMO,IDApp} =piece
    td1.innerText=IDOrdre
    td2.innerText=DiagnosticPanne
    td3.innerText=NbHeuresMO
    td4.innerText=IDApp

}
Orechercher.addEventListener('click',()=>{
    Otbody.innerHTML = '';
    
    const xhrPostO= new XMLHttpRequest();
    const url ="http://localhost:3000/Orechercher"
    xhrPostO.open("POST",url,true);
    xhrPostO.setRequestHeader("Content-Type", "application/json");
    xhrPostO.addEventListener('load', () => {
       if (xhrPostO.status === 200) {
           const response = JSON.parse(xhrPostO.responseText);
           response.result.forEach(f => {
            addOrdre(f);
         });
         
           
       } else {
           console.error('Failed to add facture. Status:', xhrPostO.status);
       }
   });
 
   xhrPostO.send(JSON.stringify({}));


})

                