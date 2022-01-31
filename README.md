# ZeroOne Envelope

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Smart, Fast and Extensible Build System**

## Tech Stack

- `Nx`, a new NX.js
- `NextJS`, a React framework
- `TypeScript`, a typed superset of JavaScript
- `Tailwind CSS`, a utility class
- `Jest`, unit testing framework
- `React Testing Library`, a utility library
- `Storybook`, a UI design framework

## Demo

[Demo Website](https://zero-one-envelope.vercel.app/)

## Run Locally

Clone the project

```bash
  git clone https://github.com/naufaldi/zero-one-test
```

Go to the project directory

```bash
  cd zero-one-test
```

Install dependencies

```bash
  yarn install
```

Start the server Envelope

```bash
  yarn nx run envelope:serve
```

Start Testing Envelope

```bash
  yarn nx run envelope:test
```

Start Storybook Shared UI Tail

```bash
  yarn nx run storybook:tail
```

Start Test Shared UI Tail

```bash
  yarn nx run shared-ui-tail:test
```

## Folder Structure

```
├── dist                      # Compiled files
├── apps                      # Source Apps
|     ├── envelope            # Envelope Apps
|     |     ├── assets        # all of assets file (ie icon)
|     |     ├── components    # all of component files base on pages
|     |     ├── lib           # helper functions
|     |     ├── pages         # pages file
|     |     ├── public        # all of public files
|     |     ├── recoil        # all of recoil files as state management
|     |     ├── specs         # all of test files
|     |     └── styles        # style files
|     ├── envelope-e2e        # all of e2e test envelope files
|     └── shared-ui-tail-e2e  # all of shared-ui-tai test envelope files
├── libs                      # Shared Lib Source
│ └── shared                  # all of shared lib
│       ├── ui-tail           # all of shared-ui-tail lib
│       ├── .storybook        # storybook config
│       ├── src               # ui-tail component
│            ├── Alert        # component,storybook and test case for alert
│            ├── Button       # component,storybook and test case for button
│            ├── Card         # component,storybook and test case for Card
│            ├── ...          # component,storybook and test case for ...
│            ├── lib          # helper for ui-tail
└── README.md
```

## Preview

![Dekstop Preview](/screenshot/dekstop.png)
![Mobile Preview](/screenshot/mobile.png)
![Storybook Preview](/screenshot/storybook.png)

## Dummy API

for testing, we make fake API using Next API

`https://zero-one-envelope.vercel.app/api/login` is a fake API for testing or `localhost:4200/api/login` for local testing

![Success Preview](/screenshot/success.png)
![Error Preview](/screenshot/error.png)
