const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const sendChatbox = document.querySelector(".chatbox");

let userMessage;
const API_KEY=""
const createChatLi=(message,className)=>{
    const chatLi=document.createElement("Li");
    chatLi.classList.add("chat,className");
    let chatContent=className==="outgoing" ? <p>$(message)</p> : <span class="material-symbol"></span>
    chatLi.innerHTML = chatContent;
    return chartLi;
}

const generateResponse=()=>{
    const API_URL="https://api.openai.com/v1/chat/completions";
    const requestOptions={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Authorization":'Bearer ${API_KEY}'
        },
        body: JSON.stringify({
            model:"gpt-3,5-turbo",
            messages:[{role:"user",content:userMessage}]
        })
    }
}
consthandleChat =()=>{
    userMessage=chatInput.ariaValueMax.trim();
    if(!userMessage) return;
    sendChatbox.appendChild(createChatLi(userMessage,"outgoing"));
    setTimeout(()=>{
        sendChatbox.appendChild(createChatLi("Thinking...","incoming"));
        generateResponse();
    },600);
}

sendChatBtn.addEventListener("click",handleChat);