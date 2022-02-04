const coffeePromise = fetch('https://api.sampleapis.com/coffee/hot');
coffeePromise
    .then(data => data.json())
    .then(caffe => {
            const caffeArray = [];
            caffe.map(coffee => caffeArray.push(coffee));
            const container = document.querySelector('.all-coffee');
            container.innerHTML = caffeArray.map(coffee => generateCoffeeCard(coffee.title, coffee.description)).join('');
            const btn = document.querySelectorAll('.btn');
            function delCardCoffee (e) {
                const del = e.currentTarget;
                return del.closest('.coffee').remove();
            }
            btn.forEach(e => e.addEventListener('click', delCardCoffee))
            function generateCoffeeCard(title, description) {
                return ` 
                    <div class="coffee">
                            <h2 class="item-1">Coffee: ${title} </h2>
                            <p class="item-2"> ${description} </p>
                            <div class='item-3'>
                            <button class='btn-see' data-see="true">Ingridients</button>
                            <button class='btn' data-del="true">Delete</button></div>
                    </div>`
            }
        }
    )


