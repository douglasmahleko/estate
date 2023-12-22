



function InsertHandler({}){
    fetch('', {
        method:'POST',
        headers:{
            "Accept": "application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringfy()
    })
}

export default InsertHandler