---
sidebar_position: 2
---

# /v1/image/create

This API is used to generate images with your own content.

## Endpoint

`https://api.copicake.com/v1/image/create`

## Method

`POST`

## Authentication

Put this in your header:

```
Authorization: Bearer [YOUR_API_KEY]
```

## Request Data

| Field          | Sample Values                          | Explanations                                                             |
| -------------- | -------------------------------------- | ------------------------------------------------------------------------ |
| template_id    | `jfwrFJdR3z1eF8BcEhSnAFyhxgOq`         | Your template id                                                         |
| changes        | `[ { }, { }, ... ]`                    | Array of your changes, for now, we support Text Change and Image Change. |
| - [Image] name | `image-yeavh7`                         | The name of your image element                                           |
| - [Image] src  | `https://your_website.com/test.png`    | Image Url                                                                |
| - [Text] name  | `text-9so09m`                          | The name of your text element                                            |
| - [Text] text  | `hello world`                          | Any text you want to replace                                             |
| - [Text] fill  | `#ff0000`                              | Color in the hex format                                                  |
| options        | `{ ... }`                              | Option                                                                   |
| - webhook_url  | `https://your_website.com/webhook_url` | When the rendering is finished, you will be notified through this url    |

## Options

### webhook_url

If you webhook_url is `https://your_website.com/webhook_url`, you will receive a GET request to it like this:

https://your_website.com/webhook_url?rendering_id=[RENDERING_ID]&permanent_url=[IMAGE_URL]

| Field         | Sample Values                                                                                            | Explanations                       |
| ------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| rendering_id  | `xc17NtfyMaxPDCtz0ZjEZ4guBmiC`                                                                           | Your rendering id                  |
| permanent_url | `https%3A%2F%2Fcopicake.s3.ap-northeast-1.amazonaws.com%2Frenderings%2Fxc17NtfyMaxPDCtz0ZjEZ4guBmiC.png` | encoded url to your rendered image |

## Response

You will get a rendering response with `processing` state. For details, please check [here](/api/rendering)

## Sample Codes

```js
const data = {
  template_id: "jfwrFJdR3z1eF8BcEhSnAFyhxgOq", // your template id
  changes: [
    // your changes
    { name: "text-9so09m", text: "hello world", fill: "#ff0000" },
    { name: "image-yeavh7", src: "https://your_website.com/test.png" },
  ],
  options: {
    // your options
    webhook_url: "https://your_website.com/webhook_url",
  },
};
```

<!-- prettier-ignore -->
```js
fetch("https://api.copicake.com/v1/image/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer [YOUR_API_KEY]",
  },
  body: JSON.stringify(data),
})
.then((res) => {
  return res.json();
})
.then((response) => {
  console.log(response);
});
```
