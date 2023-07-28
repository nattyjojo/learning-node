
const htmlBoilerPlate = (title, heading) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link rel="stylesheet" href="./index.css">
    </head>
    <body>
        <h1>${heading}</h1>
    </body>
    </html>`
    return html
}
export default htmlBoilerPlate