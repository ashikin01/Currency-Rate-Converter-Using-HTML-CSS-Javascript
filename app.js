


let select=document.querySelectorAll("select");

for (const s of select) {

    for(const country_code in countryList){
    let option=document.createElement("option");
    option.value=country_code;
    option.innerText=`${country_code}`;
    s.append(option);

    if(s.name==="from" && country_code==="USD" ){
        option.selected="selected";
    }else if(s.name==="to" && country_code==="BDT" ){
        option.selected="selected";
    }
}

    s.addEventListener("change",(e)=>{
        let country_name=countryList[e.target.value];
        imageAdd(country_name, e.target);
        getResult();
    })



}

function imageAdd(target_value,target){
    let flag_name=target_value;
    let img= target.parentElement.querySelector("img");
    let url= `https://flagsapi.com/${flag_name}/flat/64.png`;
    img.src=url;
    

}

let form = document.querySelector("form");
let input=document.querySelector("input");
let from_select=document.querySelector(".from select")

let to_select=document.querySelector(".to select")

let show_result=document.querySelector(".result");

async function getResult() {
    
let input_value;

    if(input.value == "" || input.value < 1){
        input.value=1;
        input_value=input.value;
    }else input_value=input.value;
    
    let from_select_value=from_select.value;
    let to_select_value=to_select.value;

    let currency_api_url = `https://api.frankfurter.dev/v2/rates?base=${from_select_value}&quotes=${to_select_value}`;
    console.log(currency_api_url);
    let response= await fetch(currency_api_url);
    let response_json=await response.json();
    let rate=response_json[0].rate;
    let result= rate * input_value;
    show_result.innerText= `${input.value} ${from_select.value} = ${result} ${to_select.value}`;
}


form.addEventListener("submit",(event)=>{
    event.preventDefault();

    getResult();
    
})


window.addEventListener("load", ()=>{
    getResult();
})





