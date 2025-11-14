// Crie funções para contato, projetos, sobre...
export function homeTemplate() {
  return `
    <section class="secao" aria-labelledby="home-title">
      <h2 id="main-content">Bem-vindo à ONG Digital</h2>
      <p>Conectamos pessoas a causas que transformam vidas.</p>
      <a href="#projetos" class="btn">Conheça nossos projetos</a>
    </section>
  `;
}
export function cadastroTemplate() {
  return `
    <section class="secao" aria-labelledby="cadastro-title">
      <h2 id="cadastro-title">Formulário de Cadastro</h2>
      <p>Preencha seus dados para se cadastrar como voluntário ou doador.</p>

      <form id="form-cadastro" novalidate>
        <fieldset>
          <legend>Informações Pessoais</legend>

          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" name="nome" required placeholder="Seu nome completo">

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required placeholder="exemplo@email.com">

          <label for="cpf">CPF:</label>
          <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00"
            pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" title="Digite no formato 000.000.000-00">

          <label for="telefone">Telefone:</label>
          <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000"
            pattern="\\(\\d{2}\\) \\d{4,5}-\\d{4}" title="Digite no formato (00) 00000-0000">

          <label for="data_nascimento">Data de Nascimento:</label>
          <input type="date" id="data_nascimento" name="data_nascimento" required>
        </fieldset>

        <fieldset>
          <legend>Endereço</legend>

          <label for="endereco">Endereço:</label>
          <input type="text" id="endereco" name="endereco" required placeholder="Rua, número, bairro">

          <label for="cep">CEP:</label>
          <input type="text" id="cep" name="cep" required placeholder="00000-000"
            pattern="\\d{5}-\\d{3}" title="Digite no formato 00000-000">

          <label for="cidade">Cidade:</label>
          <input type="text" id="cidade" name="cidade" required>

          <label for="estado">Estado:</label>
          <select id="estado" name="estado" required>
            <option value="">Selecione</option>
            <option value="AC">Acre</option>
            <option value="AL">Alagoas</option>
            <option value="AP">Amapá</option>
            <option value="AM">Amazonas</option>
            <option value="BA">Bahia</option>
            <option value="CE">Ceará</option>
            <option value="DF">Distrito Federal</option>
            <option value="ES">Espírito Santo</option>
            <option value="GO">Goiás</option>
            <option value="MA">Maranhão</option>
            <option value="MT">Mato Grosso</option>
            <option value="MS">Mato Grosso do Sul</option>
            <option value="MG">Minas Gerais</option>
            <option value="PA">Pará</option>
            <option value="PB">Paraíba</option>
            <option value="PR">Paraná</option>
            <option value="PE">Pernambuco</option>
            <option value="PI">Piauí</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="RN">Rio Grande do Norte</option>
            <option value="RS">Rio Grande do Sul</option>
            <option value="RO">Rondônia</option>
            <option value="RR">Roraima</option>
            <option value="SC">Santa Catarina</option>
            <option value="SP">São Paulo</option>
            <option value="SE">Sergipe</option>
            <option value="TO">Tocantins</option>
          </select>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
        <div id="form-error"></div>
      </form>
    </section>

    <aside aria-labelledby="links-rapidos-title">
      <h2 id="links-rapidos-title">Links Rápidos</h2>
      <ul>
        <li><a href="#home">Página Inicial</a></li>
        <li><a href="#projetos">Projetos</a></li>
      </ul>
    </aside>
  `;
}
export function contatoTemplate() {
  return `
    <section class="secao" aria-labelledby="contato-title">
      <h2 id="contato-title">Fale Conosco</h2>
      <form id="form-contato" novalidate>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required>

        <label for="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" required></textarea>

        <button type="submit">Enviar</button>
        <div id="form-contato-erro"></div>
      </form>
    </section>
    <aside aria-labelledby="links-rapidos-title">
      <h2 id="links-rapidos-title">Links Rápidos</h2>
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#cadastro">Cadastro</a></li>
      </ul>
    </aside>
  `;
}
export function projetosTemplate() {
  return `
    <section id="voluntariado" class="secao" aria-labelledby="voluntariado-title">
      <h2 id="voluntariado-title">Oportunidades de Voluntariado</h2>
      <p>Descubra os projetos em que você pode se envolver como voluntário e contribuir para nossa causa.</p>
      <div class="grid-galeria">
        <img src="imagens/evento.jpg" alt="Pessoas participando de um evento de arrecadação de fundos" />
        <img src="imagens/educacao.png" alt="Crianças sorrindo em uma sala de aula" />
        <img src="imagens/meio-ambiente.jpg" alt="Pessoas plantando árvores em um parque" />
        <img src="imagens/saude.jpeg" alt="Profissionais de saúde atendendo pacientes em uma clínica móvel" />
        <img src="imagens/comunidade.jpeg" alt="Membros de uma comunidade local reunidos em um evento cultural" />
        <img src="imagens/tecnologia.jpeg" alt="Jovens aprendendo a usar computadores em um centro de tecnologia" />
        <img src="imagens/empreendedorismo.png" alt="Mulheres participando de um workshop de empreendedorismo" />
        <img src="imagens/apoio.jpeg" alt="Pessoa recebendo apoio emocional de um voluntário" />
        <img src="imagens/parceria.jpeg"
          alt="Representantes de diferentes organizações apertando as mãos em sinal de parceria" />
        <img src="imagens/felicidade.jpeg" alt="Crianças brincando e sorrindo em um parque" />
        <img src="imagens/educacao2.png" alt="Crianças em um ambiente escolar, aprendendo e interagindo" />
        <img src="imagens/voluntarios2.jpeg" alt="Voluntários distribuindo alimentos em uma comunidade carente" />
        <img src="imagens/saude2.jpeg" alt="Profissionais de saúde realizando atendimentos médicos" />
        <img src="imagens/meio-ambiente2.jpeg" alt="Pessoas plantando árvores em um parque" />
        <img src="imagens/voluntarios3.jpeg" alt="Grupo de voluntários organizando doações comunitárias" />
        <img src="imagens/doacao2.jpeg" alt="Mãos segurando um coração vermelho simbolizando doação" />
        <img src="imagens/evento2.jpeg" alt="Pessoas participando de um evento de arrecadação de fundos" />
        <img src="imagens/educacao3.jpeg" alt="Crianças sorrindo em uma sala de aula" />
      </div>
    </section>

    <hr>

    <section id="doacoes" class="secao" aria-labelledby="doacoes-title">
      <h2 id="doacoes-title">Como Doar</h2>
      <p>Contribua com nossos projetos sociais. Sua doação ajuda a transformar vidas.</p>
      <ul>
        <li>Doações únicas ou mensais;</li>
        <li>Transparência total na aplicação dos recursos;</li>
        <li>Receba relatórios de impacto de cada projeto.</li>
      </ul>
      <p><a href="#cadastro">Cadastre-se e faça sua doação online</a></p>
    </section>

    <aside aria-labelledby="links-rapidos-title">
      <h2 id="links-rapidos-title">Links Rápidos</h2>
      <ul>
        <li><a href="#voluntariado">Voluntariado</a></li>
        <li><a href="#doacoes">Doações</a></li>
        <li><a href="#home">Página Inicial</a></li>
      </ul>
    </aside>
  `;
}
export function sobreTemplate() {
  return `
    <section class="secao" aria-labelledby="sobre-title">
      <h2 id="sobre-title">Nossa História</h2>
      <p>
        A ONG Digital nasceu com o propósito de apoiar projetos sociais, voluntariado e iniciativas de doação online, conectando pessoas e transformando vidas.
      </p>
    </section>

    <section class="secao" aria-labelledby="missao-title">
      <h2 id="missao-title">Missão, Visão e Valores</h2>
      <div class="blocos-sobre">
        <div class="bloco">
          <h3>Missão</h3>
          <p>Oferecer soluções inovadoras e sustentáveis que melhorem a vida das pessoas.</p>
        </div>
        <div class="bloco">
          <h3>Visão</h3>
          <p>Ser referência nacional em qualidade e compromisso com nossos projetos sociais.</p>
        </div>
        <div class="bloco">
          <h3>Valores</h3>
          <ul>
            <li>Ética e Transparência</li>
            <li>Inovação e Melhoria Contínua</li>
            <li>Respeito às pessoas</li>
            <li>Sustentabilidade</li>
          </ul>
        </div>
      </div>
    </section>

    <hr>

    <section id="video" class="secao">
      <h2>Vídeo Institucional</h2>
      <video controls poster="imagens/capa-video.jpg">
        <source src="videos/institucional.mp4" type="video/mp4">
        Seu navegador não suporta o elemento de vídeo.
      </video>
    </section>

    <hr>

    <section id="audio" class="secao">
      <h2>Áudio Institucional</h2>
      <audio controls>
        <source src="audios/institucional.mp3" type="audio/mpeg">
        Seu navegador não suporta o elemento de áudio.
      </audio>
    </section>

    <aside aria-labelledby="links-rapidos-title">
      <h2 id="links-rapidos-title">Links Rápidos</h2>
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
        <li><a href="#cadastro">Cadastro</a></li>
      </ul>
    </aside>
  `;
}
