const loading = document.createElement("span")
loading.classList.add("opacity-75", "ml-2", "spinner-border", "animate-spin", "inline-block" ,"w-4" ,"h-4" ,"border-1" 
, "rounded-full")


for (let i = 1; i<=4; i++){

    const button = document.getElementById(`bt${i}`)
    
    button.addEventListener("click", (e)=>{
        button.disabled = true
        
        button.classList.add("bg-gray-300", "text-gray-400", "mx-4")
        button.classList.replace("font-semibold", "font-regular")
        button.classList.remove("hover:bg-gray-400")
        button.textContent = "Processando"
    
        button.append(loading)
    })
}

const bcoinPrice = document.getElementById("bcoin-price")


async function getPrice(){
    let response = await fetch("https://api.pancakeswap.info/api/v2/tokens/0x00e1656e45f18ec6747f5a8496fd39b50b38396d")

    let json = await response.json()

    return Number.parseFloat(json.data.price).toFixed(2)
}

bcoinPrice.append(loading)
getPrice().then(res =>{
    bcoinPrice.textContent = `${res} $`
})