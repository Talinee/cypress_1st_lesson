describe("home page", function () {
  it("Login-page", () => {
    cy.visit("https://demo.applitools.com/")

    //header//
    cy.get("h4").contains("Login Form")
      .should('have.class', 'auth-header')

    //input field//
    cy.get('input[id="username"]') & cy.get('input[id="password"]')

    //button//
    cy.get('div.buttons-w > a')
      .should('have.attr', 'href')

    //login//
    cy.get('input[id="username"]')
      .type('your@email.com')
      .should('have.value', 'your@email.com')
    cy.get('input[id="password"]')
      .type('password')
      .should('have.value', 'password')
    cy.get('div.buttons-w > a').click()
    const path = 'https://demo.applitools.com/app.html';
    cy.url().then(($url) => {
      if ($url.includes(path)) {
        cy.log("Yes")
      } else {
        cy.log("No")
      }
    })
  })
})