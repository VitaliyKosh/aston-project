export const formRegExpressions = {
    email: /\S+@\S+\.\S+/
};

export const formErrorMessages = {
    required: () => 'Обязательное поле',
    minLength: (length: number) => `Минимальная длина поля: ${length}`,
    maxLength: (length: number) => `Максимальная длина поля: ${length}`,
    emailFormat: () => 'Неправильный формат Email',
    passwordsDoNotMatch: () => 'Пароли не совпадают'
};
