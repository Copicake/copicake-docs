---
sidebar_position: 0
---

# Rendering

In Copicake, if you are using our API to generate an image, our server will start to use your template and your changes to render it. The rendering process will be done in background, and you will get a rendering id back. You can use this id to get the final image.

Here are the fields in the response:

# Response

| Field         | Sample Values                         | Explanations                                                                                                                                                        |
| ------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type          | `image`                               | The type of this rendering, currently only `image` is available                                                                                                     |
| status        | `success` \| `failed` \| `processing` | Each rendering is with 3 different state and the default one is `processing`                                                                                        |
| changes       | `[ ... ]`                             | Changes you passed in the request                                                                                                                                   |
| options       | `{ ... }`                             | Options you passed in the request                                                                                                                                   |
| template_id   | `jfwrFJdR3z1eF8BcEhSnAFyhxgOq`        | Your template id                                                                                                                                                    |
| permanent_url | `""`                                  | At first, this field is an empty string, and if the rendering is successfully processed, it will be replaced with the final image url that you can access directly. |
| created_by    | `tMIe7GOBu9NW017nZIzlJjfnupjW`        | Your user id                                                                                                                                                        |
| id            | `ki9ImK39lPRwb1oOpKbROkNWumFz`        | Your rendering id                                                                                                                                                   |
| created_at    | `2022-03-25T07:34:48.309Z`            | The UTC time when you created the rendering                                                                                                                         |

# Sample

```json
{
  "error": null,
  "data": {
    "type": "image",
    "status": "processing",
    "changes": [
      {
        "name": "text-9so09m",
        "text": "hello world"
      },
      {
        "name": "image-yeavh7",
        "src": "https://your_website.com/test.png"
      }
    ],
    "options": {
      "webhook_url": "https://your_website.com/webhook_url"
    },
    "template_id": "jfwrFJdR3z1eF8BcEhSnAFyhxgOq",
    "permanent_url": "",
    "created_by": "tMIe7GOBu9NW017nZIzlJjfnupjW",
    "id": "ki9ImK39lPRwb1oOpKbROkNWumFz",
    "created_at": "2022-03-25T07:34:48.309Z"
  }
}
```
