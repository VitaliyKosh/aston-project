# Aston Project

Проект посвящен сравнению всех моделей iPhone.

[Посмотреть проект](https://aston-iphone.netlify.app)


# Обязательные требования
- [x] использован LocalStorage [LSApi](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/local-storage/ls-api.ts)
- [x] используются функциональные компоненты с хуками
- [x] есть разделение на умные и глупые компоненты [Глупые в shared](https://github.com/VitaliyKosh/aston-project/tree/main/src/shared/ui), [Умные в widgets](https://github.com/VitaliyKosh/aston-project/tree/main/src/widgets), [Умные в pages](https://github.com/VitaliyKosh/aston-project/tree/main/src/pages)
- [x] есть рендеринг списков [PostCardList](https://github.com/VitaliyKosh/aston-project/tree/main/src/widgets/post-card-list/ui/post-card-list.tsx)
- [x] реализована хотя бы одна форма [Form](https://github.com/VitaliyKosh/aston-project/tree/main/src/widgets/auth-form/ui/form/form.tsx), [SignInForm](https://github.com/VitaliyKosh/aston-project/tree/main/src/widgets/auth-form/ui/sign-in-form/sign-in-form.tsx)
- [x] есть применение Контекст API [ThemeProvider](https://github.com/VitaliyKosh/aston-project/tree/main/src/app/providers/theme-provider/ui/theme-provider.tsx)
- [x] есть применение предохранителя [ErrorBoundary](https://github.com/VitaliyKosh/aston-project/tree/main/src/app/providers/error-boundary/ui/error-boundary.tsx)
- [x] есть хотя бы один кастомный хук [shared/hooks](https://github.com/VitaliyKosh/aston-project/tree/main/src/shared/hooks)
- [x] хотя бы несколько компонентов используют PropTypes [Button](https://github.com/VitaliyKosh/aston-project/tree/main/src/shared/ui/button/button.tsx), [PageTitle](https://github.com/VitaliyKosh/aston-project/tree/main/src/shared/ui/page-title/page-title.tsx)
- [x] есть debounce [useDebounce](https://github.com/VitaliyKosh/aston-project/tree/main/src/widgets/search-bar/hooks/use-debounce.ts)
- [x] есть применение [lazy](https://github.com/VitaliyKosh/aston-project/tree/main/src/pages/auth-page/ui/auth-page.async.tsx) + [Suspense](https://github.com/VitaliyKosh/aston-project/tree/main/src/app/app/ui/app.tsx)
- [x] используем [Modern Redux with Redux Toolkit](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/redux/redux.ts)
- [x] используем слайсы [userSlice](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/user/store-api/store-slice.ts)
- [x] есть кастомная мидлвара [listenerMiddleware](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/redux/middlewares.ts)
- [x] используется RTK Query [postCardListSlice](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/post-card-list/store-api/store-slice.ts)
- [x] используется [Transforming Responses](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/post-card-list/store-api/store-slice.ts)
# Необязательные требования
- [x] использование TypeScript
- [x] подключен storybook [button.stories.tsx](https://github.com/VitaliyKosh/aston-project/tree/main/src/shared/ui/button/button.stories.tsx)
- [x] использование Firebase [FirebaseApi](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/firebase/firebase-api.ts)
- [x] низкая связанность клиентского кода (LS + Firebase) (ну и в целом все приложение, архитектура описана ниже)
- [x] настроен CI/CD
- [x] Feature Flags [FeatureFlagsFetchApiRepository](https://github.com/VitaliyKosh/aston-project/tree/main/src/repositories/feature-flags/api/api.ts)
- [x] E2E тесты [guest test](https://github.com/VitaliyKosh/aston-project/tree/main/tests/guest.spec.ts), [user test](https://github.com/VitaliyKosh/aston-project/tree/main/tests/user.spec.ts)
- [x] связь UI и бизнес-логики построена не через команды, а через события. [app.user.signedOut()](https://github.com/VitaliyKosh/aston-project/tree/main/src/widgets/header/ui/user-section/authorized-user.tsx)
- [x] Project Console API + чистая архитектура (описано ниже)

Для проекта создан собственный api на Nodejs и Express, который размещен на [iphone-api.koshelkov.ru/api](https://iphone-api.koshelkov.ru/api)

Настроен CD на [aston-iphone.netlify.app](https://aston-iphone.netlify.app)

## Project Console API

Доступ к точке входа в приложение можно осуществить через объект app в консоли браузера.

Внутри объекта можно найти фичи:
- post: PostModel;
- postCardList: PostCardListModel;
- user: UserModel;
- favorites: FavoritesModel;
- featureFlags: FeatureFlagsModel;
- searchHistory: SearchHistoryModel;
### Модели данных
- PostModel
```
PostModel {
    getPost: (count: string) => Promise<Post>
}
```
- PostCardListModel
```
PostCardListModel {
    getCardList: (count: number) => Promise<PostCard[]>
    searchingCardList: (query: string | null | undefined, limit?: number) => Promise<DispatchResult<PostCard[]>>
}

DispatchResult<T> {
    data?: T
    isLoading: boolean
}
```
- UserModel
```
UserModel {
    signedUp: (email: string, password: string) => Promise<void>
    signedIn: (email: string, password: string) => Promise<void>
    signedOut: () => Promise<void>
    getAuthStatus: () => AuthStatus
    authChecked: () => Promise<void>
}
```
- FavoritesModel
```
FavoritesModel {
    favoriteAdded: (id: FavoriteItem) => Promise<void>
    favoriteRemoved: (id: FavoriteItem) => Promise<void>
    readFavorites: () => Promise<Favorites>
}
```
- FeatureFlagsModel
```
FeatureFlagsModel {
    getFeatureFlags: () => Promise<FeatureFlags>
}
```
- SearchHistoryModel
```
SearchHistoryModel {
    searched: (query: string) => Promise<void>
    searchRemoved: (id: string) => Promise<void>
    getSearchHistory: () => Promise<SearchHistory>
}
```

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

