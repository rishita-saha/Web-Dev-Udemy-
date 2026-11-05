function fetchData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = false
            if(success){
                resolve("Data fetched succesfully");
            }else{
            reject("Error fetching data");
            }
        }, 3000);
    });
}

// let res = fetchData();
// console.log(res);
fetchData().then((data) => console.log(data))
    .catch((error) => console.error(error));