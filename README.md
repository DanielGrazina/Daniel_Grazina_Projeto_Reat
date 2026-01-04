# 🏎️ F1 Telemetry Dashboard

Este projeto é uma aplicação web desenvolvida em **React** que consome dados reais da Fórmula 1 através da **OpenF1 API**. O objetivo é simular uma interface de transmissão televisiva ("Broadcast TV"), permitindo aos utilizadores consultar sessões, resultados de corridas e telemetria detalhada de pilotos.

Projeto realizado no âmbito da unidade curricular **UC00610** [React + Rest API].

Este projeto está publicado online atravez do vercel: [site online](https://daniel-grazina-projeto-reat.vercel.app/)

## 📋 Funcionalidades Principais

O projeto vai além do consumo básico de API, implementando várias funcionalidades avançadas:

### 1. Navegação e Pesquisa
* **Listagem de Sessões:** Visualização de todas as sessões disponíveis na API.
* **Filtros Avançados:** Filtragem dinâmica por **Temporada (Ano)** e **Grande Prémio (Local)**.
* **Barra de Pesquisa:** Pesquisa em tempo real por nome do circuito ou sessão.
* **Paginação:** Navegação fluida entre páginas de resultados.

### 2. Detalhes da Sessão (Session Hub)
* **Pilotos da sessão:** Os pilotos são ordenados pelo número do carro.
* **Meteorologia (Weather Widget):** Dados climáticos da sessão (Temp. do Ar, Pista e Humidade).
* **Design Oficial:** Identidade visual inspirada nos gráficos oficiais da FIA/F1 (Fontes, Cores e Formas geométricas).

### 3. Telemetria do Piloto (Driver Overlay)
* **Modal Interativo:** Ao clicar num piloto, abre-se um painel de detalhes sobreposto.
* **Best Lap Analysis:** Cálculo automático da volta mais rápida do piloto na sessão.
* **Análise de Setores:** Gráfico visual proporcional que mostra o desempenho nos Setores 1, 2 e 3.

---

## 🛠️ Tecnologias Usadas

* **React** (Vite)
* **Bootstrap 5** (Layout e Responsividade)
* **CSS Customizado** (Tema "F1 Broadcast" com variáveis CSS)
* **OpenF1 API** (Dados)

---

## 📡 Sobre a API (OpenF1)

Este projeto utiliza a [OpenF1 API](https://openf1.org/), uma API pública e gratuita que fornece dados de cronometragem e telemetria.

**Endpoints utilizados:**
* `/sessions` - Para listar corridas e sessões de treino.
* `/drivers` - Para obter a lista de pilotos de cada sessão.
* `/laps` - Para calcular tempos de volta, setores e classificação final.
* `/weather` - Para obter as condições da pista.

> **Nota Importante sobre Limites da API:**
> A versão gratuita da OpenF1 tem limites de requisições (Rate Limiting). Se aparecerem erros na consola (429 Too Many Requests), o projeto está programado para lidar com isso graciosamente (mostrando listas vazias ou loaders) para evitar crashes.

---

## 🚀 Instruções de Instalação e Execução

Para rodar este projeto localmente, siga os passos abaixo:

### 1. Pré-requisitos
Certifique-se de que tem o **Node.js** instalado na sua máquina.

### 2. Instalar Dependências
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

### 3. Iniciar o Servidor de Desenvolvimento
Para iniciar a aplicação:

```bash
npm run dev
```
O terminal irá indicar o endereço local (geralmente http://localhost:5173/). Abra esse link no seu browser.

---

## 📂 Estrutura do Projeto

* `src/components/` - Componentes reutilizáveis (Navbar, Cards, Modais, Filtros).

* `src/pages/` - Páginas principais (Home, Sessions, SessionDetail).

* `src/services/` - Lógica de comunicação com a API (Fetch e tratamento de erros).

* `src/f1-theme.css` - Estilos globais e tema visual.

---

## 👤 Autor

* Daniel Grazina 
    - Desenvolvido no ambito da UC00610 - Dezembro 2025/Janeiro 2026.