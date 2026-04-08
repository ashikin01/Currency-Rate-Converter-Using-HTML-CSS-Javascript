


let select=document.querySelectorAll("select");

for (const s of select) {

    for(const country_code in countryList){
    let option=document.createElement("option");
    option.value=country_code;
    option.innerText=`${country_code}`;
    s.append(option);

    if(s.name==="from" && country_code==="BDT" ){
        option.selected="selected";
    }else if(s.name==="to" && country_code==="USD" ){
        option.selected="selected";
    }
}

    s.addEventListener("change",(e)=>{
        let country_name=countryList[e.target.value];
        imageAdd(country_name, e.target);
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



form.addEventListener("submit",async(event)=>{
    event.preventDefault();

    
    let input_value=input.value;
    let from_select_value=from_select.value;
    let to_select_value=to_select.value;

    let currency_api_url = `https://api.frankfurter.dev/v2/rates?base=${from_select_value}&quotes=${to_select_value},GBP`;
    let response= await fetch(currency_api_url);
    // let response_json=response.json();
    // console.log(response_json.Array[1]);
    
})


