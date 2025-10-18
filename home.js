const callHistory=[];


// firing event listener for click in national Emergency Numbers LOVE icon.
document.getElementById("id-national").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})

//for section police
// firing event listener for click in police helpline section.
document.getElementById("id-police").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})

//fire section
document.getElementById("id-fire").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})


//ambulance
document.getElementById("id-ambulance").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})


//women
document.getElementById("id-women").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})

//anti corruption
document.getElementById("id-anti").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})


//electricity
document.getElementById("id-electricity").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})

//brac
document.getElementById("id-brac").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})


//bangladesh Railway
document.getElementById("id-bangladesh").addEventListener("click",function(e){
    e.preventDefault()
   
  // picking 0 beside the heart button and convert it into integer value
  const heartButton = parseInt(document.getElementById("total-heart").innerText);
  const total = heartButton + 1;

  //now push the updated value into the heart number
  document.getElementById("total-heart").innerText = total;

  console.log("Heart clicked:", total);



})

//event listener for clear button in call history
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("call-history-container").innerHTML = "";
});

//copy functionality for national emergency number
document.getElementById("id-national-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-national-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})

//copy functionality for police helpline number
document.getElementById("id-police-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-police-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})


//copy functionality for fire service number
document.getElementById("id-fire-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-fire-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})


//copy functionality for ambulance number
document.getElementById("id-ambulance-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-ambulance-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})


//copy functionality for women and child number
document.getElementById("id-women-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-women-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})



//copy functionality for anti corruption number
document.getElementById("id-anti-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-anti-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})


//copy functionality for electricity number
document.getElementById("id-electricity-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-electricity-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})


//copy functionality for brac number
document.getElementById("id-brac-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-brac-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})


//copy functionality for bangladesh railway number
document.getElementById("id-bangladesh-copy").addEventListener("click",function(e){
    e.preventDefault()
    //console.log("i am from national emergency copy button")
    alert("Number has been copied 999")

    //copy functionality that copy the number inside in national emergency number
    //when the copy is clicked the card national emergency number is accessed , then
    //interText.trim function trims the card and gets the number from inside the card
    //then the number taken is copied into the clipboard
    const number = document.getElementById("id-bangladesh-number").innerText.trim();
    navigator.clipboard.writeText(number)
    
    const copyNumber = parseInt(document.getElementById("total-copy").innerText);
    const total = copyNumber + 1;

     document.getElementById("total-copy").innerText = total;
})













//call functionality
// firing event listener for click in national Emergency Numbers LOVE icon.
document.getElementById("id-national-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;

  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"National Emergency Number",
    number:"999",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);


})


//police helpline number
document.getElementById("id-police-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;


  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Police Helpline Number",
    number:"999",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})

//fire service call functionality
document.getElementById("id-fire-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;


  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Fire Service Number",
    number:"999",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})

//ambulance
document.getElementById("id-ambulance-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
 
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;

  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Ambulance Service",
    number:"1994-999999",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})

//women
document.getElementById("id-women-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;


  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Women & Child Helpline",
    number:"109",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})

//anti corruption call functionality
document.getElementById("id-anti-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;


  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Anti-Corruption Helpline",
    number:"106",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})

//electricity call functionality
document.getElementById("id-electricity-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;

  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Electricity Helpline",
    number:"16216",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})

//brac call functionality
document.getElementById("id-brac-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
 
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;

  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;

  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Brac Helpline",
    number:"16445",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);


})


//bangladesh railway call functionality
document.getElementById("id-bangladesh-call").addEventListener("click",function(e){
    e.preventDefault()
    console.log('i am clicked')

  // picking 100 beside the coin button and convert it into integer value
  const coinButton = parseInt(document.getElementById("total-coin").innerText);
  
  if(coinButton<=0){
    alert("no coin");
    return;

  }
  
  
  
  alert("Calling National Emergency Service 999...")
  const total = coinButton-20;
  

  console.log(total);

  //update
  document.getElementById("total-coin").innerText = total;

  //this area is responsible for storing date object
  //when bangladesh railway is clicked this data object send the data stored into the object
  const data={
    name:"Bangladesh Railway",
    number:"163",
    date: new Date().toLocaleTimeString()

  }
  

  //then those data pushed into the array
  //when the array is called into the call history function
  // the html form is created and the data is sent into that
  callHistory.push(data);
  console.log(callHistory);

})


//Call history function

//call history function for national emergency number
document.getElementById("id-national-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})



//call history function for police helpline number
document.getElementById("id-police-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})


//call history function for fire service number
document.getElementById("id-fire-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})


//call history function for ambulance service
document.getElementById("id-ambulance-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})


//call history function for women and child
document.getElementById("id-women-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})


//call history function for anti corruption
document.getElementById("id-anti-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})


//call history function for electricity
document.getElementById("id-electricity-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})



//call history function for brac helpline
document.getElementById("id-brac-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})






//call history function for bangladesh railway
document.getElementById("id-bangladesh-call").addEventListener("click",function(){
    const callHistoryContainer=document.getElementById("call-history-container")
    callHistoryContainer.innerText=""

    for (const data of callHistory){
        const div=document.createElement("div")
        div.innerHTML=`
        <div id="call-history-container" class="flex justify-between items-center border-red-500 border-10 p-4 bg-[#FAFAFA] mb-2">
                        <div>
                            <h1 class="font-bold text-black">${data.name}</h1>
                            <h1 class="font-semibold text-gray-900">${data.number}</h1>
                            
                        </div>

                        <div>
                            <h2 class="font-semibold text-slate-700">${data.date}</h2>
                        </div>
                </div>
        

        `

        callHistoryContainer.appendChild(div)
    }
})

