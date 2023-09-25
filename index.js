const fetch = require("node-fetch");
const fs = require('fs').promises;

const token = "masukin token"


const follow =async (id)=>{
    try {
        const api = `https://657a5yyhsb.execute-api.ap-southeast-1.amazonaws.com/production/profile/${id}/followers`
        const send = await fetch(api, {
            method: "POST",
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                authorization: token,
                "x-custom-app-version-tag": "6.0.2",
            },
            referrer: "https://app.republik.gg/",
        });
        const res = await send.json();
        console.log(res);
    } catch (error) {
        
    }
}
const startFollowing = async () => {
    try {
        const data = await fs.readFile('result.txt', 'utf8');
        const ids = data.split('\n').filter(id => id.trim() !== ''); 

        for (let index = 0; index < ids.length; index++) {
            const id = ids[index];
            await follow(id, index);
        }
    } catch (error) {
        console.error('Error reading result.txt:', error);
    }
}

startFollowing();

