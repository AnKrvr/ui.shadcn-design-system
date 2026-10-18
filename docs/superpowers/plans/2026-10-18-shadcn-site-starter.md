# Shadcn Site Starter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Создать готовый React-шаблон для новых сайтов с полным каталогом Components shadcn/ui, темами, Storybook и правилами для ИИ.

**Architecture:** Один Vite-проект содержит переиспользуемые компоненты, составные паттерны и стартовую страницу. Storybook использует те же компоненты и стили. Полнота поставки проверяется по сохранённому перечню официальной документации.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, shadcn/ui на Radix, Storybook, npm, Playwright, Node.js test runner.

**Spec:** docs/superpowers/specs/2026-10-18-shadcn-site-starter-design.md

## Global Constraints

- React, TypeScript, Vite, Tailwind CSS.
- Одна согласованная официальная конфигурация shadcn/ui на Radix, без смешивания баз.
- Исходное нейтральное оформление shadcn/ui, без придуманного брендинга.
- Светлая и тёмная темы на семантических CSS-переменных.
- npm и зафиксированный lockfile для воспроизводимой установки.
- Storybook как отдельный каталог компонентов, состояний и примеров.
- Шрифты: системный стек по умолчанию, без обязательного подключения внешнего сервиса.
- Отдельный публикуемый npm-пакет и монорепозиторий на первом этапе не нужны.
- Не отключать проверки TypeScript и не подавлять ошибки ради успешной сборки.
- Сохранять лицензии и уведомления об авторстве исходных компонентов.
- Изменения реализации подготовить в отдельной ветке и pull request.
- Саму реализацию не сливать автоматически.
- Автоматическая публикация сайта и внешняя инфраструктура не входят в этот этап.

## Review Focus

1. Повторное открытие страницы при заблокированном localStorage: приложение работает и использует системную тему. Владелец проверки — Task 2.
2. Просмотр каталога после добавления или удаления компонента: отсутствие истории или исходника вызывает понятную ошибку проверки покрытия. Владелец — Task 1.
3. Длинные русские подписи и окно 375 px: контент остаётся читаемым без горизонтального переполнения страницы. Владелец — Task 4.
4. Пользователь работает только клавиатурой: диалог закрывается по Escape и возвращает фокус на кнопку. Владелец — Task 4.
5. Новый проект скопирован без локальных файлов автора: npm ci, сборка приложения и Storybook проходят по README. Владелец — Task 5.

## Карта файлов и интерфейсов

- package.json, package-lock.json, index.html, vite.config.ts, tsconfig.json, tsconfig.app.json, tsconfig.node.json, eslint.config.js: запуск, зависимости и проверки.
- components.json: источник и конфигурация CLI.
- docs/component-inventory.json: официальный перечень, snapshot документации, версии и соответствие исходникам/историям.
- scripts/verify-catalog.mjs: проверка покрытия перечня.
- scripts/verify-catalog.test.mjs: проверка ошибок отсутствующего исходника, истории, дублей.
- src/components/ui/: реальные исходники из выбранного официального registry.
- src/components/patterns/date-picker.tsx, src/components/patterns/data-table.tsx, src/components/patterns/typography.tsx: официальные композиции.
- src/hooks/use-mobile.ts, src/lib/utils.ts: общие зависимости компонентов.
- src/styles/globals.css: токены светлой/тёмной темы и общие стили.
- src/components/theme-provider.tsx, src/components/theme-toggle.tsx: тема приложения.
- src/stories/: отдельные CSF-истории по компонентам и несколько страниц основ/паттернов.
- .storybook/main.ts, .storybook/preview.tsx: каталог, алиасы и тема.
- src/App.tsx, src/main.tsx, src/components/examples/starter-page.tsx: демонстрационная страница.
- tests/site.spec.ts, tests/catalog.spec.ts, playwright.config.ts: взаимодействия, адаптивность и проверка историй.
- README.md, AGENTS.md, docs/usage.md, docs/validation.md, THIRD_PARTY_NOTICES.md: передача и проверенные результаты.
- .github/workflows/verify.yml: те же проверки в GitHub Actions, без публикации сайта.

Запись перечня:
`ComponentEntry = { slug: string; name: string; docsUrl: string; kind: "primitive" | "composition"; files: string[]; storyIds: string[] }`.

Формат перечня:
`{ capturedAt: string; sourceUrl: string; sourceRevision: string; components: ComponentEntry[] }`.

Проверка:
`verifyCatalog(inventory, { fileExists, storyExists }) => { errors: string[]; componentCount: number }`.
CLI завершает процесс с кодом 1 при непустом errors; обычный запуск печатает количество покрытых компонентов.

Тема:
`Theme = "light" | "dark" | "system"`;
`ThemeProvider({ children, defaultTheme?: Theme })`;
`useTheme(): { theme: Theme; setTheme: (theme: Theme) => void }`.
Ключ хранения — `ui-theme`, изменение класса `dark` на document.documentElement.

Паттерны:
`DatePicker({ value?: Date; onChange: (date: Date | undefined) => void; disabled?: boolean })`;
`DataTable<TData, TValue>({ columns: ColumnDef<TData, TValue>[]; data: TData[]; filterColumn?: string })`;
`TypographyDemo()`.
Сигнатуры базовых компонентов сохранять официальными.

---

### Task 1: Проверяемый каталог официальных компонентов

**Files:** docs/component-inventory.json, scripts/verify-catalog.mjs, scripts/verify-catalog.test.mjs, package.json, package-lock.json, components.json, src/components/ui/, src/hooks/use-mobile.ts, src/lib/utils.ts и конфигурация Vite/TypeScript/ESLint из карты файлов.

**Consumes:** согласованная спецификация, текущий официальный раздел Components и совместимый официальный Radix registry.
**Produces:** ComponentEntry, полный список компонентов, проверяемые файлы UI и команды typecheck, lint, verify:catalog, test:catalog, build.

- [ ] Сохранить полный перечень из официальной документации и ревизию источника; отдельно отметить рецепты. Сопоставить каждый slug с файлами и будущими storyIds.
- [ ] Написать node:test для verifyCatalog: отсутствующий файл, отсутствующая история и повторный slug дают ошибки с нужным slug; полный небольшой fixture даёт errors.length === 0.
- [ ] Запустить npm run test:catalog: получить ожидаемое падение до реализации проверяющей функции.
- [ ] Создать Vite-конфигурацию с alias @ -> src, строгим TypeScript и npm scripts; инициализировать shadcn на Radix, добавить все компоненты официальным CLI, сохранить lockfile и происхождение исходников.
- [ ] Реализовать verifyCatalog с инъекцией fileExists/storyExists, повторно запустить test:catalog. Проверка реального каталога пока показывает отсутствующие истории Task 3.
- [ ] Выполнить typecheck и build для установленного набора компонентов; сохранить осмысленный коммит.

### Task 2: Темы и основы оформления

**Files:** src/styles/globals.css, src/components/theme-provider.tsx, src/components/theme-toggle.tsx, src/stories/foundations.stories.tsx, tests/site.spec.ts.

**Consumes:** установленные Button/Select и семантические CSS-переменные официальной темы.
**Produces:** Theme, ThemeProvider, useTheme; общие стили для приложения и Storybook.

- [ ] Добавить браузерные проверки: выбранная тёмная тема сохраняется при перезагрузке; при исключении SecurityError из localStorage приложение загружается; при системной тёмной теме default system применяет класс dark.
- [ ] Запустить проверки до реализации провайдера и убедиться в ожидаемом падении.
- [ ] Реализовать ThemeProvider/useTheme с обработкой недоступного localStorage, подпиской на смену системной темы только при system и очисткой слушателя; добавить переключатель.
- [ ] Подключить официальные семантические токены двух тем и системный шрифт; создать истории цвета, текста, отступов, радиусов и теней.
- [ ] Запустить проверки темы, typecheck и lint, затем сохранить коммит.

### Task 3: Storybook и полное покрытие компонентов

**Files:** .storybook/main.ts, .storybook/preview.tsx, src/stories/getting-started.mdx, истории src/stories/components/ по slug из перечня, src/stories/patterns.stories.tsx, три файла src/components/patterns/ из карты.

**Consumes:** ComponentEntry, исходники Task 1, стили и тема Task 2.
**Produces:** собираемый Storybook с каждой позицией перечня, команда storybook и build-storybook.

- [ ] Добавить конфигурацию Storybook React/Vite с импортом globals.css, alias @ и выбором light/dark на панели.
- [ ] Включить реальные примеры для каждого компонента и поддерживаемых вариантов; взаимодействия реализовать через React state, а не отключённые демонстрационные кнопки.
- [ ] Добавить DatePicker, DataTable и TypographyDemo по официальным рецептам с интерфейсами из карты файлов.
- [ ] Реализовать исходные данные и фильтрацию таблицы локально; форма показывает связанную с полями валидацию; Chart содержит работающий график.
- [ ] Запустить verify:catalog: componentCount соответствует сохранённому перечню, errors пуст. Собрать Storybook.
- [ ] Добавить tests/catalog.spec.ts: каждая история из storyIds открывается без ошибки рендеринга; сообщение ошибки включает storyId. Запустить против статической сборки Storybook.
- [ ] Сохранить коммит полного каталога.

### Task 4: Стартовая страница и пользовательские сценарии

**Files:** src/App.tsx, src/main.tsx, src/components/examples/starter-page.tsx, src/stories/starter-page.stories.tsx, tests/site.spec.ts, playwright.config.ts.

**Consumes:** ThemeProvider/useTheme, базовые компоненты и паттерны Tasks 1–3.
**Produces:** адаптивная демонстрационная страница, команда test:e2e.

- [ ] Написать тесты для окна 375 px и 1440 px в обеих темах: documentElement.scrollWidth <= innerWidth; главные действия имеют доступные имена.
- [ ] Добавить проверки: Tab/Enter открывают диалог, Escape закрывает и возвращает фокус; выбор даты меняет значение; пустая форма показывает ошибку; корректная форма показывает уведомление; поиск и сортировка меняют строки таблицы.
- [ ] Реализовать страницу с коротким вступлением, формой, таблицей, диалогом, выбором даты, меню и уведомлениями; длинные русские подписи в fixture проверяют перенос текста.
- [ ] Запустить test:e2e; открыть снимки страницы в обеих темах на узком и широком экране, исправить найденные проблемы.
- [ ] Сохранить коммит проверенной страницы.

### Task 5: Воспроизводимость, инструкции и PR

**Files:** README.md, AGENTS.md, docs/usage.md, docs/validation.md, THIRD_PARTY_NOTICES.md, .github/workflows/verify.yml, package-lock.json.

**Consumes:** все команды предыдущих задач и фактические результаты.
**Produces:** воспроизводимая основа для нового сайта и PR, готовый к просмотру.

- [ ] В чистой рабочей копии выполнить npm ci, typecheck, lint, test:catalog, verify:catalog, build, build-storybook и test:e2e; сохранить команды и результаты.
- [ ] При недоступном npm в текущем контейнере выполнить эти же команды через GitHub Actions в рабочей ветке, получить логи и артефакты; не объявлять неподтверждённые проверки успешными. Lockfile должен быть получен настоящим npm и затем проверен через npm ci.
- [ ] Создать workflow с read-only правами по умолчанию: установка Node, npm ci, статические проверки, сборки, браузерные тесты и артефакты отчёта. Исключить любые действия публикации сайта.
- [ ] Написать README/usage с проверенными командами npm ci, npm run dev, npm run storybook и инструкцией переноса шаблона в новый репозиторий.
- [ ] Написать AGENTS.md: переиспользование компонентов, семантические токены, алиасы, адаптивность, обе темы, доступность, проверки и сохранение каталога.
- [ ] Сохранить лицензии и источники в THIRD_PARTY_NOTICES.md; в validation.md указать ревизию, покрытие и результаты.
- [ ] Создать итоговый коммит и pull request в main; описать результат и реальные проверки. Оставить слияние на просмотр пользователю.

## Ограничения среды, известные до реализации

GitHub API доступен для чтения и записи. В текущем контейнере запрос к
registry.npmjs.org завершился тайм-аутом; необходимые фронтенд-пакеты
в основном runtime не обнаружены. План сохраняет ту же архитектуру:
при необходимости установка и проверки выполняются в GitHub Actions.
Если недоступен и этот путь, передача ограничивается явно помеченным
непроверенным PR; отсутствие lockfile или результатов проверки не скрывается.

## Самопроверка плана

Покрыты цель шаблона, весь официальный каталог, составные рецепты, темы,
основы оформления, Storybook, реальные взаимодействия, правила ИИ,
доступность, лицензии, адаптивность, воспроизводимость и PR.
Все пять Review Focus имеют проверки в соответствующих задачах.
Публикация сайта и npm-пакета не добавлена.

## Выполнение

Рекомендуемый способ: Native — реализация в текущей сессии одним исполнителем,
затем отдельное ревью ветки. Задачи сильно связаны общими токенами, каталогом
и конфигурацией, поэтому единый исполнитель уменьшает расход на передачу контекста.

Альтернатива: отдельные исполнители и ревьюеры по задачам, затем ревью всей ветки.
До начала реализации требуется просмотр плана и выбор способа выполнения.

