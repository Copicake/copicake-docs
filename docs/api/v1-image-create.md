---
sidebar_position: 2
---

# /v1/image/create

This API is used to generate images with your own content.

# Endpoint

`https://api.copicake.com/v1/image/create`

# Method

`POST`

# Authentication

Put this in your header:

```
Authorization: Bearer [YOUR_API_KEY]
```

# Request Data

| Field       | Sample Values                  | Explanations                                                      |
| ----------- | ------------------------------ | ----------------------------------------------------------------- |
| template_id | `jfwrFJdR3z1eF8BcEhSnAFyhxgOq` | **[Required]** Your template id                                   |
| changes     | `[ { }, { }, ... ]`            | Array of your changes, you can check "Changes" section below      |
| options     | `{ ... }`                      | An object for your options, you can check "Options" section below |

## Changes

In Copicake, we do support several different types of changes that users can make to the template.

### Text Change

| Field               | Sample Values | Explanations                                  |
| ------------------- | ------------- | --------------------------------------------- |
| name                | `text-9so09m` | **[Required]** The name of your element       |
| text                | `hello world` | Any text you want to replace                  |
| fill                | `#ff0000`     | Text color in the hex format                  |
| stroke              | `#ff0000`     | Stroke color in the hex format                |
| textBackgroundColor | `#ff0000`     | Text background color in the hex format       |

#### Sample:

```json
{
  "name": "text-9so09m",
  "text": "hello world",
  "fill": "#ff0000",
  "stroke": "#ff0000"
}
```

### Image Change

| Field  | Sample Values                       | Explanations                            |
| ------ | ----------------------------------- | --------------------------------------- |
| name   | `image-yeavh7`                      | **[Required]** The name of your element |
| src    | `https://your_website.com/test.png` | Image URL                               |
| stroke | `#ff0000`                           | Stroke color in the hex format          |

#### Sample:

```json
{
  "name": "image-yeavh7",
  "src": "https://your_website.com/test.png",
  "stroke": "#ff0000"
}
```

### QRCode Change

| Field   | Sample Values        | Explanations                                   |
| ------- | -------------------- | ---------------------------------------------- |
| name    | `qrcode-gskthd`      | **[Required]** The name of your element        |
| content | `https://google.com` | Any string that you want to put in the QR code |
| fill    | `#ff0000`            | Fill color in the hex format                   |
| stroke  | `#ff0000`            | Stroke color in the hex format                 |

#### Sample:

```json
{
  "name": "qrcode-gskthd",
  "content": "https://google.com",
  "fill": "#ff0000",
  "stroke": "#ff0000"
}
```

### Rect / Triangle / Circle Change

| Field   | Sample Values        | Explanations                                   |
| ------- | -------------------- | ---------------------------------------------- |
| name    | `item-abcdef`        | **[Required]** The name of your element        |
| fill    | `#ff0000`            | Fill color in the hex format                   |
| stroke  | `#ff0000`            | Stroke color in the hex format                 |

#### Sample:

```json
{
  "name": "item-abcdef",
  "fill": "#ff0000",
  "stroke": "#ff0000"
}
```

## Options

### format

You can specify the format of your generated image (`png` is the default format if not assigned).

supported formats: `png` | `jpg`

### webhook_url

If you webhook_url is `https://your_website.com/webhook_url`, you will receive a GET request to it like this:

`https://your_website.com/webhook_url?rendering_id=[RENDERING_ID]&permanent_url=[IMAGE_URL]`

| Field         | Sample Values                                                                                            | Explanations                       |
| ------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| rendering_id  | `xc17NtfyMaxPDCtz0ZjEZ4guBmiC`                                                                           | Your rendering id                  |
| permanent_url | `https%3A%2F%2Fcopicake.s3.ap-northeast-1.amazonaws.com%2Frenderings%2Fxc17NtfyMaxPDCtz0ZjEZ4guBmiC.png` | encoded url to your rendered image |


# Response

You will get a rendering response with `processing` state. For details, please check [here](/api/rendering)

# Sample Code

```js
const data = {
  // your template id
  template_id: "jfwrFJdR3z1eF8BcEhSnAFyhxgOq",
  // your changes
  changes: [
    { name: "text-9so09m", text: "hello world", fill: "#ff0000" },
    { name: "image-yeavh7", src: "https://your_website.com/test.png" },
  ],
  // your options
  options: {
    // your webhook url that will receive a GET request
    webhook_url: "https://your_website.com/webhook_url",
    // you can specify the format of your generated image
    format: 'jpg'
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
