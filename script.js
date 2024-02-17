let image = document.getElementById("product_image");
      let price = document.getElementById("Price");
      let name = document.getElementById("Name");
      let description = document.getElementById("description");

      async function fetchData(){
        try{
          const responce = await fetch('https://dummyjson.com/products/1');
          console.log(responce);
          const jsonData= await responce.json();
          console.log(jsonData);
          name.innerHTML = jsonData.title;
          price.innerHTML = jsonData.price + "$";
          description.innerHTML = "Description : "+jsonData.description;
          image.src = jsonData.thumbnail;
        }
        catch(err){
          console.log(`Error! ${err}`);
        }
      }
      fetchData();
