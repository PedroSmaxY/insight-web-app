# Insight Web App

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](https://opensource.org/licenses/MIT)
<br />
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Overview

This project is a **personality quiz application** built with **React** and **TailwindCSS**. It is designed to help users understand their personality traits through a series of questions. You can check the offline version of the site [here](https://pedrosmaxy.github.io/insight-web-app/).

This work was done for the Expert Systems course at college in the 4th semester.

## Table of Contents

- [Insight Web App](#insight-web-app)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Screenshots](#screenshots)
    - [Intro Page](#intro-page)
    - [Quiz Page](#quiz-page)
      - [Online Quiz](#online-quiz)
      - [Offline Quiz](#offline-quiz)
    - [Results Page](#results-page)
  - [Technologies Used](#technologies-used)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
  - [API Usage](#api-usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Team Members](#team-members)

## Features

- **Personality Quiz:** A series of questions to determine personality traits.
- **Dynamic Questions:** Questions change based on previous answers.
- **Results Display:** Shows the user's personality profile at the end of the quiz.
- **Offline Mode:** Uses internal questions if the server is unavailable.

## Screenshots

### Intro Page

![Intro Page](https://github.com/user-attachments/assets/9773bf97-5668-4361-9033-c0dbaf99c09d)


### Quiz Page

#### Online Quiz

![Online Quiz Page](https://github.com/user-attachments/assets/117ed94a-3b19-417a-8bce-2c4d4adea8e1)

#### Offline Quiz

![Offline Quiz Page](https://github.com/user-attachments/assets/37ffecd4-1463-4e0c-996f-200861322c39)

### Results Page

![Results Page](https://github.com/user-attachments/assets/323404bf-bba4-43f8-a31c-68a589d4880a)


## Technologies Used

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Prerequisites

To run this project locally, you'll need:

- [**Node.js**](https://nodejs.org/en)
- [**npm**](https://www.npmjs.com/)

## Getting Started

1. **Clone the Repository:**

```bash
git clone https://github.com/PedroSmaxY/insight-web-app.git
```

2. **Navigate to the Project Directory**

```bash
cd insight-web-app
```

3. **Install Dependencies:**

```bash
npm install
```

4. **Run the Application:**

```bash
npm run dev
```

5. **Open `http://localhost:5173/`** on your browser.

## API Usage

This project uses the [Profile Insight API](https://github.com/PedroSmaxY/profile-insight-api) built with **FastAPI** to fetch quiz questions and submit answers. Follow these steps to set up and use the API:

1. **Clone the API Repository:**

```bash
git clone https://github.com/PedroSmaxY/profile-insight-api.git
```

2. **Run the API Server with Docker:**

You can build and run the API server using the provided Dockerfile:

```bash
docker build -t profile-insight-api .
docker run -p 8000:8000 profile-insight-api
```

## License

- Insight Web App is **licensed under the [MIT License](https://github.com/PedroSmaxY/insight-web-app/blob/master/LICENSE).**

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request to the repository.

When contributing to this project, please follow the existing code style, [commit conventions](https://www.conventionalcommits.org/en/v1.0.0/), and submit your changes in a separate branch.

## Team Members

This project was created with the help of the following team members:

- **Lucas Amaral** - [GitHub](https://github.com/LucasLimaAmaral)
- **Pedro Carvalho** - [GitHub](https://github.com/Phscarvalho)
- **Pedro Novais** - [GitHub](https://github.com/PedroSmaxY)
- **Victor Jacques** - [GitHub](https://github.com/Victor-Jacques)
