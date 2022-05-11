import './styles.css'

const renderWelcomePanel = (container: HTMLElement) => {
  const htmlContent = `
    <div id="welcome">
      <h1>Bem vindo!</h1>
      <a href="logout.html">Sair</a>
    </div>
  `

  container.innerHTML = htmlContent
}

export default renderWelcomePanel
