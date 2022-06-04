const getDataFun = async (url)=>{
    try{
        
        let res = await fetch(url);
        let data = await res.json();
        return data.meals
        //appendDataFun(data.meals[0])

    }
    catch(err)
    {
        console.log("err:",err)
    }
}

const appendDataFun = (data,container)=>{

    container.innerHTML="";
    data.forEach((el)=>{
        let divTag = document.createElement("div");

        let indarrTag = document.createElement("p");
        
    
        let{strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6}= el
        let indarr= [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6]
        //console.log(indarr);
    
        indarrTag.innerText= "Required Indegrients:" + "  " + indarr;
    
        let pTag = document.createElement("p");
        pTag.innerText= "Recpie:"+"\n"+ el.strInstructions;
    
        let TitleTag = document.createElement("h1");
        TitleTag.innerText="Name of the Dish:"+"  "+el.strMeal;
    
        divTag.append(TitleTag,indarrTag,pTag);
    
        container.append(divTag);
    })
}

export {getDataFun,appendDataFun}