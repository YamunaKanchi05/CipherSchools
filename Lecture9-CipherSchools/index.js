function changeText(){
    const h1 = document.querySelector("h1");
    h1.innerHTML = "This after click!"
}
function showContent(){
    const p = document.querySelector(".content");
    p.innerHTML = new Date();


}
function upperCase(){
    let input = document.querySelector("input");
    input.value = input.value.toUpperCase();
}
function mover(obj){
    obj.innerText = "Mouse over me"
    
}
function mout(obj){
    obj.innerText = "Mouse out of me"
    
}
function mdown(obj){
    obj.innerText = "please release me"
    
}
function mUp(obj){
    obj.innerText = "Thank you"
    
}