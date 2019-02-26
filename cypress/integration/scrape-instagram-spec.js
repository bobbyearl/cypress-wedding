describe('Scraping Instragram', function() {
  it('Gets, types and asserts', function() {
    cy.visit('https://www.instagram.com/explore/tags/bobbyearl/')

    const images = [];

    cy.get('._bz0w img').each((element) => {
      images.push(element.attr('src'));
    });

    cy.writeFile('images-to-download.json', images);
    
  })
})