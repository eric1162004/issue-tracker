# Create NextJS Project
npx create-next-app@13.4.19
npm run dev

# Icons
npm install react-icons --save
npm i @radix-ui/react-icons

# Classnames
npm install classnames@2.3.2

# Prisma:
npm install prisma@5.3.1
npx prisma init

## Prisma todos:
1. Change provider in schema.rpisma
2. Change database url in .env 
ie. DATABASE_URL="mysql://testuser:12345@localhost:3306/issue-tracker"
3. Instantiate a single instance PrismaClient
https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices

npx prisma format
npx prisma migrate dev

# Data Validation:
npm i zod@3.22.2

# Radix 
npm install @radix-ui/themes

get started:
https://www.radix-ui.com/themes/docs/overview/getting-started

## Using Custom Font
See https://tailwindcss.com/docs/using-with-preprocessors
npm install -D postcss-import

## React Markdown Editor
npm install --save react-simplemde-editor easymde

## To View Markdown
npm i react-markdown@8.0.7
npm install -D @tailwindcss/typography

## Forms
npm i react-hook-form@7.46.1

## API Client
npm i axios

## Client Form validation
npm i @hookform/resolvers@3.3.1

## Skeletons
npm i delay
npm i react-loading-skeleton@3.3.1

## NextJs Caching
Data Cache 
- when we use the fetch API
- stored in the file system
- permanent until we redeploy
- disable with fetch('...', {cache:'no-store'})
- revalidate with fetch('...', {revalidate: 3600})

Full Route Cache (cache on the server)
- used to store the output of statically rendered routes
- routes that do not have parameter are considered static route

Router Cache (cache on the client)
- to store the payload of pages in browser
- last for a session
- get refresh on page reload
- automatically invalidated in 
  - 5 mins (for static route)
  - 30 seconds (for dynamic route)
- Force page refresh by router.refresh()

## Next Auth
follow: https://next-auth.js.org/getting-started/example

build auth api route
https://next-auth.js.org/configuration/initialization#route-handlers-app

Add to .env
https://next-auth.js.org/getting-started/example#deploying-to-production
https://next-auth.js.org/configuration/options
Generate Secret with `openssl rand -base64 32`

set up google api
go to google cloud
create a new project
go to https://console.developers.google.com/apis/credentials
configurate OAuth consent screen
create OAuth client ID
  Authorised JavaScript origins: http://localhost:3000
  Authorised redirect URIs: (see https://next-auth.js.org/providers/google#configuration)
store your google client ID and secret in .env
add google providers: https://next-auth.js.org/providers/google#example
set session strategy to jwt in the NextAuth options

## set up adaptors
follow https://authjs.dev/getting-started/adapters/prisma
BUT instead install:
`npm install @next-auth/prisma-adapter@1.0.7`
add prisma as adaptor in auth.ts
add schema
migrate schema


## Add session provider
To pass session detail down the component tree

## Protecting Routes
add middleware.ts






