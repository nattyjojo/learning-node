
import createFiles from "./createFiles.mjs"
import createDir from "./createDir.mjs"

const build = () =>{
    const pages = ['contact','about','blog']

    const path = '/client'

    createFiles(path)
    for(let i = 0; i < pages.length; i++){
        createDir(`/${pages[i]}`)
        let newPath = `${path}/${pages[i]}`
        createFiles(newPath)

    }
    
}

build()


/*

├──index.html
├──style.css
│
├──  contact,about,blog
│  ├──index.html
│  └──style.css
│
├──  
│  ├──index.html
│  └──style.css
│
├── 
│  ├──index.html
│  └──style.css


    each index.html file should contain a <h1> with a title (referring to the page)
    each index.html should have a <link> to their individual css file
    each style.css should have a different background-color for the body element

*/