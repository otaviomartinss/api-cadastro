# API de cadastro de usuário

Nessa API, podemos realizar tanto o cadastro de usuário, quanto a busca, quanto também a listagem de todos usuários cadastrados.
Utilizamos o Prisma como ORM, e o postgreSQL como banco de dados.
Fizemos/utilizamos alguns filtros de excessões, serialização e tratamento dos dados, pipes, interceptors, decorators.
Fizemos também a validação dos dados utilizando o class-validator e o class-transformer.



# Versões

#### v0.0.0
Create project</br>

#### v0.0.1
Create module usuario</br>

#### v0.0.2
Install prisma</br>
Create model User</br>

#### v0.0.3
Create usuario.entity</br>
Create prisma.service</br>
Update usuario.module</br>
Update usuario.controller</br>

#### v0.0.4
English translation of everything</br>
Update schema.prisma</br>
Update usuario.entity</br>
Create prisma.service</br>
Update usuario.module</br>
Update usuario.controller</br>

#### v0.0.5
Add location of schema.prisma in package.json</br>

#### v0.0.6
Add and test functions create user, findAll users, find userByUsername</br>

#### v0.0.7
Update message error in find user byUsername</br>

#### v0.0.8
Install class-transformer, class-validator</br>

#### v0.0.9
Create IsUsernameAlreadyExist</br>
Add validations in user.entity</br>

#### v0.0.10
Update IsUsernameAlreadyExist</br>
Update validations in user.entity</br>
Update main.ts</br>

#### v0.0.11
Create function usernameExists in user.service</br>
Update class IsUsernameAlreadyExistConstraint</br>
Add useContainer in main.ts</br>

#### v0.0.12
Update README.md</br>

#### v0.0.13
Update user.entity (Exclude and Expose)</br>
Add APP_INTERCEPTOR in app.module</br>

#### v0.0.14
Update user.entity</br>
Update user.controller</br>
Update main.ts</br>
Create HttpExceptionFilter</br>

#### v0.0.15
Update HttpExceptionFilter</br>

#### v0.0.16
Create nestResponse
Create nestResponseBuilder
Create transformInterceptorResponse
Update user.controller
Update user.service

#### v0.0.17
Update README.md

#### v0.0.18


