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


