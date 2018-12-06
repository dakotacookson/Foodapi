let arrayOfFoods = {};
fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)
        parsedFoods.forEach(parsedFoods => {
            var div1 = document.createElement('section');

            var hea = document.createElement('h1');
            hea.textContent = parsedFoods.name
            div1.appendChild(hea)

            var para = document.createElement('p');
            para.textContent = parsedFoods.type
            div1.appendChild(para)

            var para2 = document.createElement('p');
            para2.textContent = parsedFoods.ethnicity
            div1.appendChild(para2)

            var cont = document.getElementById('container');
            cont.appendChild(div1)

            document.body.append(div1);

            // let htmladder = (`
            // <h1> howdy </h1>
            // `)
            // console.log(htmladder)
            // document.body.innerHTML += htmladder;


            fetch(`https://world.openfoodfacts.org/api/v0/product/${parsedFoods.barcode}.json/`)
                .then(pro => pro.json())
                .then(productInfo => {
                    console.table(productInfo)
                    // console.log(`productInfo` , productInfo.product.ingredients_text)
                    foodobjcountry = productInfo.product.countries
                    foodobjingredients = productInfo.product.ingredients_text
                    foodobjingredients2 = productInfo.product.ingredients_hierarchy
                    foodobjingredients3 = productInfo.product.ingredients_text_fr
                    foodobjsugar = productInfo.product.nutriments.sugars_serving  
                    foodobjfat= productInfo.product.nutriments.fat_serving
                    foodobjcal= productInfo.product.nutriments.calories_serving 
                    // console.log(foodobjcountry)
                    // console.log(foodobjingredients)
                    // console.log(foodobjingredients2)

                    var para3 = document.createElement('p');
                    para3.append(" ", foodobjcountry)
                    div1.appendChild(para3)
                    var cont = document.getElementById('container');
                    cont.appendChild(div1)
                    document.body.append(div1);


                    var para4 = document.createElement('p');
                    para4.append("Ingredients" , " ", foodobjingredients || foodobjingredients2 || foodobjingredients3 )
                    div1.appendChild(para4)
                    var cont = document.getElementById('container');
                    cont.appendChild(div1)
                    document.body.append(div1);

                    var para5 = document.createElement('p');
                    para5.append("Sugar per Serving" , " " , foodobjsugar  || "0")
                    div1.appendChild(para5)
                    var cont = document.getElementById('container');
                    cont.appendChild(div1)
                    document.body.append(div1);

                    
                    var para6 = document.createElement('p');
                    para6.append( "Fat  per Serving" ,  " " , foodobjfat || "0")
                    div1.appendChild(para6)
                    var cont = document.getElementById('container');
                    cont.appendChild(div1)
                    document.body.append(div1);

                    
                    var para7 = document.createElement('p');
                    para7.append("Calliories per Serving" ,  " " , foodobjcal || "0" )
                    div1.appendChild(para7)
                    var cont = document.getElementById('container');
                    cont.appendChild(div1)
                    document.body.append(div1);



                })
        })

    })

