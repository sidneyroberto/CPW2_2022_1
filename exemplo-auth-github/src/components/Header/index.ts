import './styles.css'

const renderHeader = (container: HTMLElement) => {
  const userPhoto = localStorage.getItem('userPhoto')
  const userName = localStorage.getItem('userName')
  const htmlContent = `
        <div class="header">
            <h1>Exemplo Auth Github</h1>
            <img src="${userPhoto}" alt="Foto de ${userName}">
            <span>${userName}</span>
            <a href="logout.html">
                <img src="/assets/img/logout.png" alt="Sair">
            </a>
        </div>
    `

  container.innerHTML = htmlContent
}

export default renderHeader
