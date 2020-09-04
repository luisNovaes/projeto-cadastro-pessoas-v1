# Documentação do projeto 


Projeto Java Spring-boot com Angular 10

 
O projeto foi desenvolvido com a seguinte arquitetura:

Tecnologias do lado do Back end:
Spring Boot - 2.3.3.RELEASE,
JDK - 1.8 or later,
Spring Framework - 5.0.8 RELEASE,
Hibernate - 5.2.17.Final,
Spring Data JPA - 2+,
mongodb  versão atual.

Tecnologias do lado do front end:
Angular 10,
Bootstrap 4,
npm- versão atual,
JQuery.

Tools:
Maven - 3.2+.
IDE - Eclipse or Spring Tool Suite (STS) // Spring boot API development,
Visual Studio code // Angular App development,
Angular CLI - versão atual,
Postman.

Link do Repositório: https://github.com/luisNovaes/projeto-cadastro-pessoas-v1.git


Para rodar o projetos, você precisará:

1 - Preparar o ambiente local, instalando as ferramentas listadas acima. 

2 - Baixar os fontes do link acima, ou cloná-los.

3 - Importar nas IDEs, no caso eu usei o Spring Tool Suite para o back-end e o   Visual Studio Code para o front-end.

4 - No back-end, você precisa fazer um update do maven, para baixar as dependências usadas no projeto e rodar-lo. 
	(Update Maven Project) e subir a aplicação com Run As / Spring Boot App.

5 - conexão com o banco de dados:

	1- No mongodb: crie um banco de dados com o nome de cadastro.

		> user cadastro

	2- Crie 3 Collections:

		users - esta coleção armazenará todos os usuários autenticados.
			> db.createCollection(users )

		roles - esta coleção armazenará os roles.
			> db.createCollection(roles )

		cadastro - esta coleção armazenará os dados de cadastro.
			> db.createCollection(cadastro )
						
Depois de criar as Collections, crie os perfis de usuário, 
assim já podemos registrar um usuário e começar a cadastrar.	

					> db.roles .insert({
								name:'ROLE_USER, 
								name:'ROLE_MODERATOR',
								name:ROLE_USER
							   })
								
O mongodb se conecta a porta padrão localhost:27017.
A configuração está no arquivo application.properties do back-end.
			
6 - No front-end, será necessário rodar um “npm install”, 
para que as dependências sejam baixadas e criadas em  seus 
respectivos módulos e depois um “ng serve“ 
para subir o projeto na porta padrão http://localhost:4200/ .
			
7 - Abra o navegador e acesse o endereço: http://localhost:4200/.

8 - Registre seu usuário e já pode cadastrar.
				
Endpoints disponíveis para consumo (usei o Postman para os testes):

POST - Cadastrar usuário: 
http://localhost:8080/api/auth/signup

GET - Teste conteúdo do usuário: 
http://localhost:8080/api/test/user

GET - Teste conteúdo público: 
http://localhost:8080/api/test/all

GET - Teste conteúdo do Admin: 
http://localhost:8080/api/test/admin

PUT - Update do usuário: 
http://localhost:8080/api/cadastro/ + id

POST - Login usuário: 
http://localhost:8080/api/auth/signin

GET - Listar todos os cadastros: 
http://localhost:8080/api/cadastro/contatos

DEL - Deletando um cadastro: 
http://localhost:8080/api/cadastro/ + id

GET - Consulta usuário por id:
http://localhost:8080/api/cadastro/ + id

POST - Salvar usuário: 
http://localhost:8080/api/cadastro/cadastrar



Desenvolvido por:

Luis Magno Novaes

Analista de Sistema Sênior 

Data Scientist

luismagnovaes@gmail.com


