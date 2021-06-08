function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'Prediction-Key':'24d280c74aaf49aca6266030d4e9db04',
            'content-type': 'application/json'
        },
        method: ('POST'), // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // 輸出成 json
}

function predicType(result){
    if (result == '5a7e9092-cf68-4970-9273-082c0a991e2f')
        return '馬';
    else if (result == '0115defb-46ff-4d03-883b-aeb1d103152b')
        return '狗';
    else if (result == '605c75b9-c8df-4d06-81be-d3751f6ce392')
        return '兔';
    else if (result == '3bccc389-9f50-4dc7-a06f-00cbf2c3e2de')
        return '豬';
    else (result == '3fc4317d-2754-4a56-b64c-2dd3bdb7eecf')
        return '貓';
}

function submit(){
    const picUrl = document.getElementById('picUrl').value;  // 讀取html的picUrl

    const data = {
        'Url': picUrl  // body的json內容
    }
    
    postData('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/b1890d5c-c996-4a40-b6cc-713c7202bf55/classify/iterations/Iteration1/url',data)
    .then(data=>{
        const result = data.predictions[0].tagId;     // 從判斷結果撈tagId數值
        console.log(data);     //輸出判斷結果
        console.log(result);     //輸出判斷結果的tagId數值
        console.log(predicType(result));    // 條件比對完的結果
        document.getElementById('resultText').innerHTML=predicType(result);  // 回傳給html的resultText
    })


}