module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'standard-with-typescript'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: ['react'],
    rules: {
        semi: 'off',
        '@typescript-eslint/semi': ['error', 'always'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'react/jsx-no-useless-fragment': 'error',
        '@typescript-eslint/import/prefer-default-export': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': 'error',
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.tsx']
            }
        ],
        'react/prop-types': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 0,
        '@typescript-eslint/strict-boolean-expressions': 0,
        // '@typescript-eslint/space-before-function-paren': 0,
        'react/react-in-jsx-scope': 0,
        // '@typescript-eslint/consistent-type-imports': 0,
        // 'no-underscore-dangle': 0,
        // '@typescript-eslint/no-floating-promises': 0,
        // '@typescript-eslint/naming-convention': 0,
        // '@typescript-eslint/no-redeclare': 0,
        // '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/no-useless-constructor': 0,
        'constructor-super': 'error', // проверка вызова super() в конструкторе
        'for-direction': 'error', // проверка цикла for на конечное число итераций
        'getter-return': 'error', // требовать return в getter
        'no-async-promise-executor': 'error', // запрет async функции-исполнителя в Promise
        'no-case-declarations': 'error', // запрет объявления переменных, функций и классов в case
        'no-class-assign': 'error', // class A {} — запрет на приваивание нового значения A
        'no-compare-neg-zero': 'error', // запрет на сравнение x === -0
        'no-cond-assign': 'error', // запрет на присваивание в условиях
        'no-const-assign': 'error', // запрет на изменение константы
        'no-constant-condition': 'error', // запрет на константу в условии
        'no-delete-var': 'error', // запрет на использование delete с переменной
        'no-dupe-args': 'error', // запрет одинаковых параметров в объявлений ф-ции
        'no-dupe-class-members': 'error', // запрет повторяющихся членов класса
        'no-dupe-else-if': 'error', // запрет повторяющихся условий в цепочках if-else-if
        'no-dupe-keys': 'error', // запрет повторяющихся ключей в литералах объектов
        'no-duplicate-case': 'error', // запрет повторяющихся значений case
        'no-empty': 'error', // запрет пустых блоков кода — if(…) {пусто}
        'no-empty-pattern': 'error', // запрет пустых шаблонов деструктурирования let {} = foo
        'no-ex-assign': 'error', // запрет переназначения err в catch
        'no-extra-boolean-cast': 'error', // запрет лишних логических приведений — if (!!a) {…}
        'no-fallthrough': 'error', // запрет case без break и без комментария «fall through»
        'no-func-assign': 'error', // запрет переназначения объявления function
        'no-global-assign': 'error', // запрет переназначения глобальных переменных — window = {}
        'no-import-assign': 'error', // запрет переназначения импорта — import a from …; a = 1
        'no-inner-declarations': 'error', // запрет объявления ф-ций и переменных внутри блоков кода
        'no-irregular-whitespace': 'error', // запрет неправильных пробельных символов
        'no-loss-of-precision': 'error', // запрет литеральных чисел, которые теряют точность
        'no-misleading-character-class': 'error', // запрет проблемных регулярных выражений
        'no-mixed-spaces-and-tabs': 'error', // запрет смешанных отступов из пробелов и табуляций
        'no-new-symbol': 'error', // запрет new Symbol()
        'no-nonoctal-decimal-escape': 'error', // запрет \8 и \9 в строковых литералах
        'no-obj-calls': 'error', // запрет вызова свойств глобального объекта как функций — Math()
        'no-octal': 'error', // запрет восьмеричных литералов — x = 071 (теперь х равен 57)
        'no-prototype-builtins': 'error', // запрет вызова некоторых методов прототипа на объекте
        'no-redeclare': 'error', // запрет повторного объявления переменной
        'no-self-assign': 'error', // запрет присваивания переменной самой себе — x = x
        'no-setter-return': 'error', // // запрет на return в setter
        'no-shadow-restricted-names': 'error', // запрет имен переменных и ф-ций типа NaN, undefined
        'no-sparse-arrays': 'error', // запрет разреженных массивов
        'no-this-before-super': 'error', // запрет в конструкторе использовать this до вызова super()
        'no-undef': 'error', // запрет на использование необъявленных переменных
        'no-unexpected-multiline': 'error', // запрет запутанных многострочных выражений
        'no-unreachable': 'error', // запрет недостижимого кода после return, throw, continue и break
        'no-unsafe-finally': 'error', // запрет return, throw, break и continue внутри блока finally
        'no-unsafe-negation': 'error', // запрет отрицания левого операнда в операторах отношения
        'no-unsafe-optional-chaining': 'error', // запрет использования foo?.bar в некоторых ситуациях
        'no-unused-labels': 'error', // запрет неиспользуемых меток
        'no-unused-vars': 'error', // запрет неиспользуемых переменных
        'no-useless-backreference': 'error', // запрет бесполезных обратных ссылок в регулярках
        'no-useless-catch': 'error', // запрет ненужных catch
        'no-useless-escape': 'error', // запрет ненужных escape-символов
        'no-with': 'error', // запрет использования with
        'require-yield': 'error', // требовать yield для функции-генератора
        'use-isnan': 'error', // требовать isNaN() для проверки NaN
        'valid-typeof': 'error', // требовать для typeof допустимых строк "string", "undefined", "object"
        'max-len': [
            'error',
            {
                ignoreComments: true,
                code: 130
            }
        ]
    },
    globals: {
        __IS_DEV__: true
    },
    overrides: []
};
