# Microservices - Especialização Web e Mobile(FULL STACK) UFG 

O trabalho final da disciplina de Back-end avançado.

O desafio se consiste na criação de 2 microserviços com tecnologias e banco de dados diferentes.

## Microservicos
##### 1. Node.Js + MongoDB
Microserviço responsável pela API de atividades(taks) 

##### 2. Spring boot + Mysql
Microserviço responsável pelo cadastro/autenticação de usuários

## Front-end
##### Angular
Telas de autenticação, cadastro de usuário, visualização e criação das tasks

## Pre-requisitos
Utilizamos o **Docker** para facilitar a execução dos microservices, portanto você deve ter que instala-lo para executar o projeto.

**Links para download e instalação do Docker**

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

### Rodando o projeto
Digite o seguinte comando no terminal:
##### No ambiente Linux
`sudo docker-compose build`

`sudo docker-compose up`

##### No ambiente Windows:
`docker-compose -f docker-compose-windows.yml build`

`docker-compose -f docker-compose-windows.yml up`

Ao concluir a inicializaçao das imagens, basta ir no browser acessar o seguinte endereço:
```shell
http://localhost:4200/
```



## Integrantes
* **Arthur Santos**  (https://github.com/acsantosabino)
* **Daniel Leonardo**  (https://github.com/danielfnz)
*  **Diego Barbosa**  (https://github.com/diegocostacmp)
*  **Marcio Henrique**  (https://github.com/marciohenrique2879)

