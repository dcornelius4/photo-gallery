function imageTemplate(image) {
    const html = /*html */ `<li>
        <h2>${image.title}</h2>
        <img src="${image.url}">
</li>`;
 
    
    const template = document.createElement('template');
    //capitalize the HTML in innerHtml
    template.innerHTML = html;
    return template.content; 
}

export default imageTemplate;