---
sidebar_position: 3
---

# Errors

If you can't get `200` status code after sending the API request, it means that something went wrong.

You can check the following table to know the error code and the error message.

## Table

| Code  | Message               | Explanations                                                                              |
| ----- | --------------------- | ----------------------------------------------------------------------------------------- |
| `400` | Bad request           | Your request is sent in a bad format (missing parameters)                                 |
| `401` | Unauthorized          | You are using wrong API key or accessing templates not belonged to you                    |
| `404` | Not found             | We can't find any template based on your template_id                                      |
| `429` | Rate limit exceeded   | You have rendered more than your quota and please check the pricing page for more details |
| `500` | Internal server error | There are some problems happened in our servers and please try again later                |

## Failed response example

```json
{
  "error": "Bad request",
  "data": null
}
```
