---
title: "Postgresql Triggers vs Constraints"
date: 2021-05-15T20:19:06+03:00
image: /images/hero/pollet-obuya/postgresql-triggers-vs-constraints/hero.jpeg
summary: "Blog excerptThis blog post describes what triggers and constraints are and how to know which one to select depending on the problem at hand."
author: "Pollet Obuya"
categories: ["Database Management"]
tags: ["Postresql", "SQL", "Triggers", "Constraints"]
draft: false
---

# Introduction.
Ever wondered whether you should use a trigger or a constraint to enforce a database rule? well, this has happened to me severally and I have sometimes made the mistake of using a trigger where a simple constraint would have worked perfectly. There are various factors to consider when you are trying to figure out which of the two you need, depending of course on what you are trying to achieve.

## PostgreSQL Triggers
Triggers are functions that are invoked automatically whenever a certain operation is performed on a table, the functions are invoked either before or after an operation is performed. Operations in this case can be `INSERT`, `UPDATE` or `DELETE`.
More information about triggers and how they operate can be found [here](https://www.postgresql.org/docs/9.1/sql-createtrigger.html)

## PostgreSQL constraints
Constraints are a way to limit the kind of data that can be stored in a table beyond the datatype restriction. For example, if a column is defined to contain `strings`. This article will focus on the `check constraint`. A check constraint can be used to define the exact strings that are expected. Anything other than what is expected will throw an error.

### So how do you decide?
The Use Cases outlined below are based on my experiences working with PostgreSQL as well as research, I believe it will be of use to you  whether you're looking for a solution or just doing research.

#### Common Uses of triggers
- *Cascading various Operations*

If an operation on one table should have an effect on a different table, then a trigger would be perfect to use in that scenario. E.g If an `UPDATE` operation on one table causes one or more rows of another table to be updated. The same applies to the other two operations mentioned above.
Cascading various operations can be helpful in keeping audits of various activities in your application(automatically).

-  *Inserting data that depends on data from a different table.*

A `BEFORE INSERT` trigger can be used to verify data from one or more columns of the record you are trying to insert.

- *Notify the application of database events*

If you prefer to handle most of your business logic on the application rather than on the database level. An option you can consider is to listen for database events from the application and once an operation occurs on the database, The application will be notified and you will be able to handle the event.

#### Common Uses of Check Constraints
Constraints are basically used whenever you need to add restrictions based on your business rules/ business logic. Constraints should not change, unless of course, the business rules also change.

-  Constraints are used to add restriction on a specific table as they are limited to only access the the columns of one table at a time. If your record depends on data from another table, you are better off using a Trigger. Therefore, It would be ideal to enforce the simpler restrictions using constraints.

-  Check constraints can be used to achieve data integrity by specifying the type of data allowed into a table.

On top of the above, please feel free to visit the official PostgreSQL documentation for more information as well as guides.

***THE END***