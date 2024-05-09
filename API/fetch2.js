const api_key='https://api.quotable.io/random'

fetch(api_key)
.then(response=>
    {
        if(!response.ok){
            throw new Error("there was an error fetching")
        }
        return response.json()
    }
)
.then(data=>{
    console.log(data.content)
})
.catch(error=>{console.error(error)});