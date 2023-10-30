<div align="center">
  <a href="https://novu.co" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

# Novu React Quickstart

This sample app demonstrates how to integrate Novu's Notification Center in a React app.

It demonstrates how to use Novu to view notifications in real-time within the app.

You can refer to [this](https://docs.novu.co/quickstarts/react#install-novu-react-notification-center-package-in-your-react-app) guide to know more about it.

## Configuration

### Create a free account in Novu

1. Go to [Novu](https://web.novu.co) and click Sign Up.
2. Use GitHub Account to login.

### Obtain Credentials

Your project needs to be configured with the following:

1. App Identifier
2. SubscriberId to load the notification when application renders.

## Run the project

To run the project, first, clone the repo.

```sh
npm install
```

Create a `.env` file and add the following variables - `REACT_APP_SUB_ID` and `REACT_APP_APP_ID` to it.

Start the application using:

```sh
npm start
```
