const _IDPiece =document.querySelector('#IDPiece')
const _IDOrdre =document.querySelector('#IDOrdre')
const _Quantite =document.querySelector('#Quantite')
const ajouterBtn=document.querySelector('#ajouterBtn')
const tbody=document.querySelector('#tbody')



ajouterBtn.addEventListener('click',()=>{
   let IDPiece =_IDPiece.value
   let IDOrdre = _IDOrdre.value
   let Quantite=_Quantite.value
   let fact={"IDPiece":IDPiece,"IDOrdre":IDOrdre,"Quantite":Quantite}

   const xhrPost= new XMLHttpRequest();
   const url ="http://localhost:3000/facture"
   xhrPost.open("POST",url,true);
   xhrPost.setRequestHeader("Content-Type", "application/json");
   xhrPost.addEventListener('load', () => {
      if (xhrPost.status === 200) {
          const response = JSON.parse(xhrPost.responseText);
          response.selectResult.forEach(f => {
            addfacture(f);
        });
          
      } else {
          console.error('Failed to add facture. Status:', xhrPost.status);
      }
  });

   xhrPost.send(JSON.stringify(fact))

})

/****************** */
const addfacture=(facture)=>{
   const tr =document.createElement("tr")
   const td1=document.createElement("td")
   const td2=document.createElement("td")
   const td3=document.createElement("td")

   tbody.appendChild(tr);
   tr.appendChild(td1);
   tr.appendChild(td2);
   tr.appendChild(td3);
   const {NomClient, MontantHTTotal ,MontantTTCTotal} =facture
   td1.innerText=NomClient
   td2.innerText=MontantHTTotal
   td3.innerText=MontantTTCTotal
  
}

