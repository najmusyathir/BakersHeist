fetch("../assets/menu/menus.json")

.then(function (response){

    return response.json();
})

.then (function (menus){

    let cakes =menus.cakes;
    let pastries =menus.pastries;
    let main_dishes =menus.main_dish;

    const cake_container = document.getElementById('cakes');
    const pastries_container = document.getElementById('pantries');
    const main_dish_container = document.getElementById('main_dish');

    let fill_cake = "";
    let fill_pastries = "";
    let fill_main_dish = "";

    for(let cake of cakes){
        fill_cake += `
        <div class="grid_item">
            <img src="${cake.img}" alt="${cake.img}">
            <div class="item_details">
                <h4>${cake.name}</h4>
                <p>${cake.desc}</p>
                <p>${cake.price}</p>
            </div>
    </div>
        `
    }
    for(let pastrie of pastries){
        fill_pastries += `
        <div class="grid_item">
            <img src="${pastrie.img}" alt="${pastrie.img}">
                <div class="item_details">
                <h4>${pastrie.name}</h4>
                <p>${pastrie.desc}</p>
                <p>${pastrie.price}</p>
            </div>
        </div>
        `
    }
    for(let main_dish of main_dishes){
        fill_main_dish += `
        <div class="grid_item">
            <img src="${main_dish.img}" alt="${main_dish.img}">
                <div class="item_details">
                    <h4>${main_dish.name}</h4>
                    <p>${main_dish.desc}</p>
                    <p>${main_dish.price}</p>
                </div>
        </div>
        `
    }

    cake_container.innerHTML = fill_cake;
    pastries_container.innerHTML = fill_pastries;
    main_dish_container.innerHTML = fill_main_dish;
    
})