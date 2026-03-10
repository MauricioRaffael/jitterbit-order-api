# Jitterbit Order API

## 📌 Descrição

Esta aplicação consiste em uma **API REST desenvolvida em Node.js** para gerenciamento de pedidos.

O objetivo da API é permitir a **criação, consulta, atualização e remoção de pedidos**, armazenando os dados em um banco **MongoDB**.

O projeto foi desenvolvido como solução para o **desafio técnico de desenvolvimento de API**, atendendo aos requisitos propostos, incluindo:

* criação de pedidos
* consulta de pedidos por número
* listagem de pedidos
* atualização de pedidos
* exclusão de pedidos
* persistência em banco de dados
* transformação (mapping) dos dados recebidos

---

# 🧠 Arquitetura do Projeto

O projeto foi organizado seguindo uma estrutura modular para separar responsabilidades:

```
jitterbit-order-api
│
├── config
│   └── database.js        # Configuração da conexão com MongoDB
│
├── controllers
│   └── orderController.js # Regras de negócio da API
│
├── models
│   └── Order.js           # Model do banco de dados
│
├── routes
│   └── orderRoutes.js     # Definição dos endpoints da API
│
├── server.js              # Inicialização da aplicação
│
└── package.json
```

Essa organização facilita:

* manutenção
* escalabilidade
* separação de responsabilidades

---

# 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **MongoDB Compass**
* **Git / GitHub**
* **Postman**

---

# 🗄 Banco de Dados

Foi utilizado **MongoDB** para armazenamento dos pedidos.

A coleção utilizada:

```
orderdb
   └── orders
```

Estrutura do documento armazenado:

```json
{
  "orderId": "v10089016vdb",
  "value": 10000,
  "creationDate": "2023-07-19T12:24:11.529Z",
  "items": [
    {
      "productId": 2434,
      "quantity": 1,
      "price": 1000
    }
  ]
}
```

---

# 🔄 Transformação dos Dados (Mapping)

A API recebe o JSON no seguinte formato:

```json
{
 "numeroPedido": "v10089015vdb-01",
 "valorTotal": 10000,
 "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
 "items": [
  {
   "idItem": "2434",
   "quantidadeItem": 1,
   "valorItem": 1000
  }
 ]
}
```

Antes de salvar no banco, a aplicação realiza o **mapping dos campos**:

| Entrada        | Saída        |
| -------------- | ------------ |
| numeroPedido   | orderId      |
| valorTotal     | value        |
| dataCriacao    | creationDate |
| idItem         | productId    |
| quantidadeItem | quantity     |
| valorItem      | price        |

---

# 🔗 Endpoints da API

## Criar Pedido

**POST**

```
http://localhost:3000/order
```

Body:

```json
{
 "numeroPedido": "v10089016vdb",
 "valorTotal": 10000,
 "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
 "items": [
  {
   "idItem": "2434",
   "quantidadeItem": 1,
   "valorItem": 1000
  }
 ]
}
```

Resposta:

```
201 Created
```

---

## Buscar Pedido

**GET**

```
http://localhost:3000/order/{orderId}
```

Exemplo:

```
http://localhost:3000/order/v10089016vdb
```

---

## Listar Pedidos

**GET**

```
http://localhost:3000/order/list
```

---

## Atualizar Pedido

**PUT**

```
http://localhost:3000/order/{orderId}
```

Exemplo:

```json
{
 "value": 20000
}
```

---

## Remover Pedido

**DELETE**

```
http://localhost:3000/order/{orderId}
```

---

# ⚙️ Como Executar o Projeto

## 1️⃣ Clonar o repositório

```
git clone https://github.com/MauricioRaffael/jitterbit-order-api.git
```

---

## 2️⃣ Entrar na pasta do projeto

```
cd jitterbit-order-api
```

---

## 3️⃣ Instalar dependências

```
npm install
```

---

## 4️⃣ Iniciar o MongoDB

Certifique-se que o MongoDB está rodando localmente.

Conexão utilizada:

```
mongodb://127.0.0.1:27017/orderdb
```

---

## 5️⃣ Executar a API

```
node server.js
```

A API será iniciada em:

```
http://localhost:3000
```

---

# 🧪 Testando a API

A API pode ser testada utilizando ferramentas como:

* **Postman**
* **Insomnia**
* **Thunder Client (VS Code)**

Exemplo de fluxo de teste:

1️⃣ Criar pedido
2️⃣ Buscar pedido pelo ID
3️⃣ Listar pedidos
4️⃣ Atualizar pedido
5️⃣ Remover pedido

---

# 📊 Tratamento de Erros

A API implementa tratamento de erros para cenários como:

* pedido não encontrado
* erro na conexão com banco
* erro ao criar pedido

Utilizando códigos HTTP apropriados:

| Código | Significado    |
| ------ | -------------- |
| 200    | Sucesso        |
| 201    | Criado         |
| 404    | Não encontrado |
| 500    | Erro interno   |

---

# 📌 Considerações

Esta API foi desenvolvida atendendo aos requisitos do desafio técnico, incluindo:

* CRUD completo de pedidos
* armazenamento em MongoDB
* transformação de dados
* organização modular do código
* endpoints REST padronizados
