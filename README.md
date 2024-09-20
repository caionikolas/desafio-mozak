
# Desafio Técnico Fullstack Jr
## Visão Geral
Vamos criar um sistema de cadastro de eventos e inscrição. Este desafio tem como intuito implementar utilizando as boas práticas de mercado, com área logada e frontend simples implementado a partir do protótipo proposto.
Os requisitos mínimos estão listados mais abaixo, mas, caso queira propor mais, pode ficar a vontade.
## Requisitos
As stacks necessárias para atender o teste para a vaga fullstack.
## Backend
- Utilizar Laravel 11
- Banco de dados
- Testes unitários básicos
- dotenv
## Frontend
- Implementar página conforme protótipo
- Utilizando uma framework reativa (React, Vue)
- Telas responsivas

## Desejável (diferencial/opcional)
- API simples para listagem de eventos ativos.
- Elencar os campos passíveis a índice

## Regras de negócio
- Pagina inicial deve ter todos os eventos elegíveis.
- O usuário deve estar logado para se inscrever.
- O usuário deve estar logado para gerenciar eventos (criar, editar e excluir)
- O usuário poderá gerenciar somente eventos criados por ele.
- O usuário não poderá estar cadastrado em dois eventos ao mesmo tempo.
- O criador automaticamente deve estar cadastrado no evento.
- O "UUID code" deve ser único.

## Requisitos de implementação
- Usar o "UUID code" para identificar/mapear as rotas.
- Utilizar migrations para versionar banco de dados.
- Criar carga de dados para teste (SEED).
- Utilizar a API do ViaCEP (https://viacep.com.br/) para e carregar endereço no cadastro do evento.
