# Create NextJS Project
npx create-next-app@13.4.19
npm run dev

# React Icons
npm install react-icons --save

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



