function fetchUserData(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
          //  resolve({name: "YouTube", url: "https://www.youtube.com/"}) 
            reject({name: "YouTube", url: "https://www.youtube.com/"}) 
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log('Fetching User Data.....');
        const userData = await fetchUserData();
        console.log("Useer data fetched successfully");
        console.log("User data: ",userData);
    } catch (error) {
        console.log("Error ",error);
    }
}
getUserData()