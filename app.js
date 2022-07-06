let myRequest=new XMLHttpRequest();
myRequest.open("GET","https://restcountries.com/v2/all");
myRequest.send();

myRequest.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){

        let jsData=JSON.parse(this.responseText);
            console.log(jsData);


        for(let i=0; i<jsData.length; i++){
            
            let div=document.createElement("div");

            let contName=document.createTextNode(jsData[i].name);
            if(jsData[i].name!="Israel"){
                
            

            
            
            let contFlag=jsData[i].flag;
            let h1=document.createElement("h1");
            h1.appendChild(contName);
            let img=document.createElement("img");
            img.src=contFlag;
        
            div.appendChild(h1);
            div.appendChild(img);

            for( j=0; j<jsData[i].languages.length ; j++ ){
                let contLang=jsData[i].languages[j].name;
                let span=document.createElement("span");
                span.textContent=contLang;
                div.appendChild(span);
            }
            
        }

        else{
            return
        }
            let container=document.getElementById('container');   
            container.appendChild(div);
            document.body.appendChild(container);
        


    
        }
    }
    
}