import fs from "fs"
import path from "path"
import htmlBoilerPlate from './htmlBoilerPlate.mjs'
import pageCss from './pagecss.mjs'

const createFiles = (folderPath) =>{
    const __filename = new URL(import.meta.url).pathname;
    const __dirname = path.dirname(__filename);
  
    const homePage =  fs.writeFile(path.join(__dirname, folderPath, 'index.html'), htmlBoilerPlate('home', 'HOME PAGE'), err => {
        if (err) throw err;

    })
    const colorChar = '0123456789ABCDEF'
    let BGColor = '#'
    for(let i = 0; i < 6; i++){
        let randomChar = Math.floor(Math.random()*colorChar.length)
        BGColor += colorChar[randomChar]


    }
    const pagesCss = fs.writeFile(path.join(__dirname, folderPath, 'index.css'), pageCss(BGColor), err => {
        if (err) throw err;
    })


}
export default createFiles
