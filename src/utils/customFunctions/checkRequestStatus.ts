export const checkRequestStatus = (isError: boolean, isSuccess: boolean, isLoading: boolean) => {
  let sendingState = {};

  if (isLoading) {
    sendingState = { "data-request-process": "Данные отправляются..." };
  } else if (isSuccess) {
    sendingState = { "data-request-success": "Данные успешно отправлены" };
  } else if (isError) {
    sendingState = { "data-request-warning": "Не удалось отправить данные" };
  }

  return sendingState;
};
