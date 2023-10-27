A very simple way to create a stream of income and expenses. Hopefully you don't end-up at zero or less :).

It isn't doing anything of interest yet.



## Thinking

- Updatable or repeated runs?
- Store each update by date?
- What is the relationship between tables Expenses & Fields
- Do cashflow by account or combined
  - start with by account


## Tables

### Expenses
- A list of all expenses
#### Fields
- acct
- item
- amt
- periodicity
  - monthly
    - onDay: number
  - onetime
    - onDate: date
  - everyNumDays: number

### Cashflow
- Cashflow projections grouped by date created
#### Fields
- date: date
- amount: number
- balance: number
- for: string
- note: string

## Test user
```json
{
  "firstName": "Carl",
  "lastName": "Becker",
  "email": "carl@mail.com",
  "phone": "2907145345",
  "city": "Toronto",
  "password": "Vh8Pn^KPsGuE2L"
}
{
  "firstName": "Bob",
  "lastName": "Smith",
  "email": "bob@email.com",
  "phone": "1112223333",
  "city": "Smithville",
  "password": "Vh8Pn^KPsGuE2L"
}
```