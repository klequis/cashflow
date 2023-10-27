## Installation
```bash
npm install prisma --save-dev
```

Don't think I need to specify the dbserver as it will be in the `prisma.schema`.
```bash
npx prisma init --datasource-provider <dbserver>
```

Setup the schema
*also seems to create the database that with ElephantSQL you do not get the permissions to do*

```bash
npx prisma migrate dev --name init
```

So use `db push` instead
```bash
npx prisma db push
```
