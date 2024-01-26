
const libCatInput = document.querySelector('#libCatInput');
const TarifMOleInput=document.querySelector('#TarifMOleInput');
const ajouterC = document.querySelector('#ajouterC')
const DescPieceInput= document.querySelector('#DescPieceInput');
const PUHTInput =document.querySelector('#PUHTInput')
const ajouterP = document.querySelector('#ajouterP')

let postCat =new XMLHttpRequest();
let postPe=new XMLHttpRequest();
ajouterC.addEventListener('click',()=>{
    let libCat =libCatInput.value;
    let TarifMO=TarifMOleInput.value;
    
    postCat.open('POST','http://localhost:3000/categorie');
    postCat.setRequestHeader("Content-Type", "application/json");
    let Cat={
        libCat: libCat,
        TarifMO:TarifMO
    }
    postCat.send(JSON.stringify(Cat))

})

ajouterP.addEventListener('click',()=>{
    let PUHT=PUHTInput.value;
    let DescPiece=DescPieceInput.value;
    let P={
        DescPiece:DescPiece,
        PUHT:PUHT
    }
    postPe.open('POST','http://localhost:3000/piece');
    postPe.setRequestHeader("Content-Type", "application/json");
    postPe.send(JSON.stringify(P));


})
