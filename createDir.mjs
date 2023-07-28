import fs from "fs"
import path from "path"

const createDir = (folderName) => {
    console.log(folderName)
    const __filename = new URL(import.meta.url).pathname;
    const __dirname = path.dirname(__filename);
    fs.mkdir(path.join(__dirname, `/client/${folderName}`), err=>{
        if(err) throw err;
        
    })
}

export default createDir


