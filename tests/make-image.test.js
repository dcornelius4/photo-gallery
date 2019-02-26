import images from '../data/images.js';

const test = QUnit.test;

test('create a template literal function', assert => {
    //write the function in here and then move it into its own file
    function imageTemplate(image) {
        // const html = `<li>
        //     <h2>${image.title}</h2>
        //     <img src="${image.url}">
        // </li>`;
        const html = `<li>
        <h2>UniWhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
    </li>`;
        
        const template = document.createElement('template');
        template.innerHtml = html;
        return template.content; 
    }
    
    //arrange
    //create the variable to initialize the index to 0 for the images
    const image = images[0];
    //act
    const result = imageTemplate(image);
    const expected = 
    `<li>
    <h2>UniWhal</h2>
    <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
</li>`;
    //assert
    assert.equal(result, expected); 
});