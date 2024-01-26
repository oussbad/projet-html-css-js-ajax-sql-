const _NomCli = document.querySelector('#NomCli')
const _AdrCli = document.querySelector('#AdrCli')
const _VilleCli = document.querySelector('#VilleCli')
const _CIN = document.querySelector('#CIN')
const _IDCat = document.querySelector('#IDCat')
const _IDApp = document.querySelector('#IDApp')
const _DescApp = document.querySelector('#DescApp')
const _RefConstApp = document.querySelector('#RefConstApp')
const _MarqueApp = document.querySelector('#MarqueApp')
const _DiagnosticPanne = document.querySelector('#DiagnosticPanne')
const _NbHeuresMO = document.querySelector('#NbHeuresMO')
const ajouterBtn=document.querySelector('#ajouterBtn')
const rechercher =document.querySelector('#rechercher')
const tbody =document.querySelector('#tbody')
const NomCliInput=document.querySelector('#NomCliInput')

const addClient=(client)=>{
    const tr =document.createElement("tr")
    const td1=document.createElement("td")
    const td2=document.createElement("td")
    const td3=document.createElement("td")
    const td4=document.createElement("td")

    tbody.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    const {IDCli , NomCli ,AdrCli,VilleCli} =client
    td1.innerText=IDCli
    td2.innerText=NomCli
    td3.innerText=AdrCli
    td4.innerText=VilleCli
}

rechercher.addEventListener('click',()=>{
    const id=NomCliInput.value

const xhrGet =new XMLHttpRequest()
const urlclient="http://localhost:3000/chercher_client?NomCli="+id
xhrGet.open('GET',urlclient,true)
xhrGet.addEventListener('load',()=>{
    const response = JSON.parse(xhrGet.responseText);
    response.results.forEach(client => {
        addClient(client);
    });

})
xhrGet.send();

})
//***************************************************/
ajouterBtn.addEventListener("click",()=>{
let NomCli= _NomCli.value
let AdrCli= _AdrCli.value
let VilleCli= _VilleCli.value
let CIN = _CIN.value
let IDCat= _IDCat.value
let IDApp= _IDApp.value
let DescApp= _DescApp.value
let RefConstApp= _RefConstApp.value
let MarqueApp= _MarqueApp.value
let DiagnosticPanne= _DiagnosticPanne.value
let NbHeuresMO= _NbHeuresMO.value


let RepaOrdre={"NomCli":NomCli,"AdrCli":AdrCli,"VilleCli":VilleCli,"CIN":CIN,"IDCat":IDCat,"IDApp":IDApp,
"DescApp":DescApp,"RefConstApp":RefConstApp,"MarqueApp":MarqueApp,"DiagnosticPanne":DiagnosticPanne,"NbHeuresMO":NbHeuresMO};

const xhrPost= new XMLHttpRequest();
const urlordre ="http://localhost:3000/ordre_reparation"
xhrPost.open("POST",urlordre,true);
xhrPost.setRequestHeader("Content-Type", "application/json");
xhrPost.send(JSON.stringify(RepaOrdre))



})







