const generatePage = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.project}</title>
        </head>
    <body>
    
</body>
</html>
    
    `;
    
};
    
    module.exports = generatePage;