# Aston Project

# Обязательные требования
[x] использован LocalStorage
[x] используются функциональные компоненты с хуками
[x] есть разделение на умные и глупые компоненты 
[x] есть рендеринг списков
[x] реализована хотя бы одна форма
[x] есть применение Контекст API
[x] есть применение предохранителя
[x] есть хотя бы один кастомный хук
[x] хотя бы несколько компонентов используют PropTypes 
[x] есть debounce
[x] есть применение lazy + Suspense
[x] используем Modern Redux with Redux Toolkit 
[x] используем слайсы
[x] есть кастомная мидлвара
[x] используется RTK Query
[x] используется Transforming Responses
# необязательные трабования
[x] использование TypeScript
[x] подключен storybook
[x] использование Firebase
[x] низкая связанность клиентского кода (LS + Firebase) (ну и в целом все приложение)
[x] настроен CI/CD
[x] Feature Flags
[x] связь UI и бизнес-логики построена не через команды, а через события. 
[x] Project Console API + чистая архитектура
[] реализована виртуализация списков
[] используются мемоизированные селекторы
[] используется нормализованная структура стейта
[] проведена оптимизация приложения
[] тесты

Для проекта создан собственный api, который размещен на `https://messenger.koshelkov.ru/`
Настроен CD на `https://aston-iphone.netlify.app`

## Описание архитектуры приложения

Приложение построено на комбинации архитектурных подходов **FSD** и **чистой архитектуры**. 

Содержит основные слои **FSD** за исключением **entities**:
- app
- pages
- widgets
- features
- shared

Дополнительно к вышеперечисленным слоям добавлены архитектурные слои:
- models
- services
- repositories

Таким образом получен список слоев в следующей иерархии (выделены архитектурные слои):
- app
- pages
- widgets
- **features**
- **services**
- **repositories**
- **models**
- shared

### Архитектура приложения
![Alt text](assets/architecture.svg)
### Термины 

- **Interface** — открытый метод взаимодействия с системой. Содержит view и контроллер — класс отвечающий за обработку пользовательских событий и доступа к модели и содержащий данные для отображения во view (стейт, хуки, хендлеры и все, что касается view, но не является визуалом)

- **ApplicationObject** — интерфейс доступа к ядру приложения, представляет собой композицию из features.

- **Feature** — класс предоставляющий методы для взаимодействия с моделью или моделями в рамках одного контекста. В качестве зависимостей имеет сервисы. Имеет «ручки» (методы, инпуты) для взаимодействия с моделью и сервисы (зависимости, аутпуты) для взаимодействия модели с внешним миром (запрос данных, чтение из стора, запись).
- **Model** — описание типов данных и методов, характерных для модели.
- **Service** — Класс для взаимодействия модели с внешним миром. Является абстракцией, не общается напрямую с апишками, имеет репозиторий в качестве зависимости для доступа к конкретным апишкам. Этот слой позволит переключить зависимость от localStorage или Firebase.
- **Repository** — слой логики доступа к данным (api, store, localStorage)

