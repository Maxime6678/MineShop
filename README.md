# @mineshop/users

> MineShop is a free shop website for your Minecraft server !

```js
const users = require('@mineshop/users')
import users from '@mineshop/users'
```

## users.fetchByCredential(username: string, password: string)
> Get a user data from username and password

```js
let user = await users.fetchByCredential('', '')
if (!user) throw new Error
console.log(user)
```

## users.fetchById(id: number)
> Get a user data from id

```js
let user = await users.fetchByCredential(1)
if (!user) throw new Error
console.log(user)
```

## users.fetchServers(id: number)
> Get all user's servers from user id

```js
let servers = await users.fetchServers(1)
if (!servers) throw new Error
console.log(user)
```

## users.create(username: string, password: string, email: string)
> Create a user

```js
let {status, message} = await users.create('admin', 'password', 'info@mineshop.com')
if (!status) throw new Error(message)
```

## users.editEmail(id: number, email: string)
> Edit a user email from id

```js
let {status, message} = await users.editEmail(1, 'admin@mineshop.com')
if (!status) throw new Error(message)
```

## Debug

```sh
DEBUG="core:users"
```

## License

MIT License

Copyright (c) 2019 Maxime6678

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
