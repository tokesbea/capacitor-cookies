# capacitor-cookies-plugin

Get cookies

## Install

```bash
npm install capacitor-cookies-plugin
npx cap sync
```

## API

<docgen-index>

* [`getCookies(...)`](#getcookies)
* [`setCookie(...)`](#setcookie)
* [`deleteCookie(...)`](#deletecookie)
* [`clearCookies(...)`](#clearcookies)
* [`clearAllCookies()`](#clearallcookies)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCookies(...)

```typescript
getCookies(options?: GetCookieOptions | undefined) => Promise<HttpCookieMap>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#getcookieoptions">GetCookieOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#httpcookiemap">HttpCookieMap</a>&gt;</code>

--------------------


### setCookie(...)

```typescript
setCookie(options: SetCookieOptions) => Promise<void>
```

Write a cookie to the device.

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#setcookieoptions">SetCookieOptions</a></code> |

--------------------


### deleteCookie(...)

```typescript
deleteCookie(options: DeleteCookieOptions) => Promise<void>
```

Delete a cookie from the device.

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#deletecookieoptions">DeleteCookieOptions</a></code> |

--------------------


### clearCookies(...)

```typescript
clearCookies(options: ClearCookieOptions) => Promise<void>
```

Clear cookies from the device at a given URL.

| Param         | Type                                                              |
| ------------- | ----------------------------------------------------------------- |
| **`options`** | <code><a href="#clearcookieoptions">ClearCookieOptions</a></code> |

--------------------


### clearAllCookies()

```typescript
clearAllCookies() => Promise<void>
```

Clear all cookies on the device.

--------------------


### Interfaces


#### HttpCookieMap


#### HttpCookie

| Prop        | Type                | Description              |
| ----------- | ------------------- | ------------------------ |
| **`url`**   | <code>string</code> | The URL of the cookie.   |
| **`key`**   | <code>string</code> | The key of the cookie.   |
| **`value`** | <code>string</code> | The value of the cookie. |


#### HttpCookieExtras

| Prop          | Type                | Description                      |
| ------------- | ------------------- | -------------------------------- |
| **`path`**    | <code>string</code> | The path to write the cookie to. |
| **`expires`** | <code>string</code> | The date to expire the cookie.   |


### Type Aliases


#### GetCookieOptions

<code><a href="#omit">Omit</a>&lt;<a href="#httpcookie">HttpCookie</a>, 'key' | 'value'&gt;</code>


#### Omit

Construct a type with the properties of T except for those in type K.

<code><a href="#pick">Pick</a>&lt;T, <a href="#exclude">Exclude</a>&lt;keyof T, K&gt;&gt;</code>


#### Pick

From T, pick a set of properties whose keys are in the union K

<code>{ [P in K]: T[P]; }</code>


#### Exclude

<a href="#exclude">Exclude</a> from T those types that are assignable to U

<code>T extends U ? never : T</code>


#### SetCookieOptions

<code><a href="#httpcookie">HttpCookie</a> & <a href="#httpcookieextras">HttpCookieExtras</a></code>


#### DeleteCookieOptions

<code><a href="#omit">Omit</a>&lt;<a href="#httpcookie">HttpCookie</a>, 'value'&gt;</code>


#### ClearCookieOptions

<code><a href="#omit">Omit</a>&lt;<a href="#httpcookie">HttpCookie</a>, 'key' | 'value'&gt;</code>

</docgen-api>
