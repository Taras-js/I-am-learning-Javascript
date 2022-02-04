
const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
caffeePromise
    .then(data => data.json())
    .then(caffe => {
        const caffeArray = [];
        caffe.map(name => caffeArray.push(name))
        console.log(caffeArray)
                }
    )


