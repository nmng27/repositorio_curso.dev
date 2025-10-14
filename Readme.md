1. Instalar o NVM no repositorio do Git

2. Instalando as paredes: NextJS e ReactJS
   NextJS é desenvolvido pela Vercel e traz consigo ferramentas de disponibilidade daquele site de forma mais rapida deiando a aplicação mais escalavel.
   Criação do manifesto onde terá as dependencias.

3. Protocolos

- Http: (Hypertext Transfer Protocol) -> Protocolo de transferencia de textos
- FTP: File Transfer Protocol -> Transferencia de Protocolos
- SMTP (Simple Mail Transfer Protocol) -> Transferencia de emails

Funciona assim:

O HTPP une o lado do cliente com o lado do servidor. Dentro do protocolo HTTp ele utiliza de outro protocolo chamado TCP que garante que as mensagens trocadas serão beneficas para ambas as partes protegendo o sistema caso de algum erro. Além disso tem o protocolo IPque garante a qualidade e velocidade da mensagem.

Para limpar o prompt basta usar esses cmds:

- cls
- clear
- ctrl + L

Comandos Git

- Git Log -> Mostra todo historico de commits daquele repositorio
- Git log --stat
- Git Log --oneline
- Git Diff
- git ammend (Emendas commits)

Deploy

- Uso da vercel para que o deploy fique em links publicos


Fluxo para encontrar um url de um site.

O seu computador faz uma requisição passando a url para um serviço de dns que vai encontrar o ip da url. Assim voce consegue acessar o site. ja que como ja visto só é possivel acessar uma url se vc tiver o ip.

É possivel fazer a confuração do dns usando a vercel

Mas ela so consegue apontar se tiver uma url registrado no registro.br

Inaugurando Milestone 1

- Arquitetura do Front End do projeto
- Criação de testes automatizados
- Banco de dados (Local)
- Criação do CI

Overenigneering x Underengineering

- Faça o mais simples do que o mais complexo

Importante

Arquitetura é diferente de estrutura das pastas

Para subir o serviço

npm run dev

para acessar a api basta acessar a requisição sem precisar de um insomnia ou postman basta usar o curl

para acessar a rota

curl http://localhost:3000/api/rota

caso queira ver a requisição e a resposta completa

curl http://localhost:3000/api/rota -v



