"use client";

import React from "react";

type ErrorType =
  | "FetchError"
  | "EmailOrPasswordAreIncorrect"
  | "EmailNotVerfied"
  | "EmailRegistered"
  | "EmailNotFound"
  | "";

export const useAuthErrorMessage = () => {
  const [authMessage, setAuthMessage] = React.useState({});

  const messages = {
    fetchError: {
      "data-auth-message": "Что-то пошло не так",
    },
    accountNotExist: {
      "data-auth-message": "Неправильный адрес почты и/или пароль",
    },
    emailNotVerfied: {
      "data-auth-message": "Адрес почты не подтвержден",
    },
    emailRegistered: {
      "data-auth-message": "Адрес почты уже зарегистрирован",
    },
    emailNotFound: {
      "data-auth-message": "Адрес почты не найден",
    },
    default: {
      "data-auth-message": "",
    },
  };

  const setAuthError = (error: ErrorType) => {
    switch (error) {
      case "FetchError":
        setAuthMessage(messages.fetchError);
        break;
      case "EmailOrPasswordAreIncorrect":
        setAuthMessage(messages.accountNotExist);
        break;
      case "EmailNotVerfied":
        setAuthMessage(messages.emailNotVerfied);
        break;
      case "EmailRegistered":
        setAuthMessage(messages.emailRegistered);
        break;
      case "EmailNotFound":
        setAuthMessage(messages.emailNotFound);
        break;
      default:
        setAuthMessage(messages.default);
    }
  };

  return { authMessage, setAuthError };
};
