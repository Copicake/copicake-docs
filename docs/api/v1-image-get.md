---
sidebar_position: 1
---

# /v1/image/get

This API is used to get generated image.

## Endpoint

`https://api.copicake.com/v1/image/get?id=${renderingId}`

## Method

`GET`

## Authentication

Put this in your header:

```
Authorization: Bearer [YOUR_API_KEY]
```

## Request Data

No Request data is needed

## Response

You will get a rendering response. For details, please check [here](/api/rendering)

## Sample Codes

<!-- prettier-ignore -->
```js
const renderingId = "ki9ImK39lPRwb1oOpKbROkNWumFz";

fetch(`https://api.copicake.com/v1/image/get?id=${renderingId}`, {
  method: "GET",
  headers: {
    Authorization: "Bearer [YOUR_API_KEY]",
  },
})
.then((res) => {
  return res.json();
})
.then((response) => {
  console.log(response);
});
```
