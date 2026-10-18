# shadcn — основа для ваших сайтов

Готовый React-проект с исходным кодом **67 компонентов и рецептов** shadcn/ui,
светлой и тёмной темами, интерактивным Storybook и стартовой страницей.

## Запуск

Нужны **Node.js 22.18+** (рекомендуется Node.js 24 LTS) и npm.

```bash
npm ci
npm run dev
```

Сайт: http://localhost:5173.

Полный каталог компонентов:

```bash
npm run storybook
```

Storybook: http://localhost:6006. Тема выбирается на верхней панели каталога.
В стартовом сайте тема сохраняется между посещениями.

## Как создать свой сайт

1. Скопируйте или клонируйте проект в новый репозиторий.
2. Установите зависимости через `npm ci`.
3. Замените `src/App.tsx` своими страницами. Сохраните провайдер темы и TooltipProvider.
4. Собирайте интерфейс из `src/components/ui` и `src/components/patterns`.
5. Меняйте общие цвета и размеры в `src/styles/globals.css`.
6. Проверяйте страницу на мобильном экране и в обеих темах.

Если работаете с ИИ, попросите его следовать `AGENTS.md`:

> Собери адаптивную страницу личного кабинета на существующей дизайн-системе.
> Используй компоненты из src/components/ui, семантические цвета и обе темы.
> Не создавай заново кнопки, поля и диалоги, которые уже есть в проекте.

## Использование компонентов

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MyPage() {
  return (
    <Card className="max-w-lg">
      <CardHeader><CardTitle>Мой проект</CardTitle></CardHeader>
      <CardContent>
        <Button onClick={() => console.log("Начать")}>Начать</Button>
      </CardContent>
    </Card>
  )
}
```

[Подробнее: создание страниц, темы и обновление компонентов](docs/usage.md).

## Что находится в проекте

| Путь | Назначение |
| --- | --- |
| `src/components/ui` | Исходники официальных компонентов, установленных CLI |
| `src/components/patterns` | Таблица, выбор даты и типографика |
| `src/components/examples` | Рабочие примеры и стартовая страница |
| `src/styles/globals.css` | Токены цветов, радиусов и типографики |
| `src/styles/shadcn.css` | Локальная копия общих CSS-утилит shadcn |
| `src/stories` | Каталог компонентов и основы оформления |
| `docs/component-inventory.json` | Перечень и соответствие исходникам/примерам |
| `AGENTS.md` | Правила создания интерфейсов для ИИ |

База: React, TypeScript, Vite, Tailwind CSS, официальный пресет **radix-vega**.
Составные рецепты Data Table, Date Picker и Typography входят в каталог.
Устаревший Toast представлен официальной заменой Sonner и помечен в описании.

В первую поставку входят позиции раздела Components. Отдельные галереи Blocks,
Charts и AI Elements, а также бэкенд не включены. Компонент Chart имеет рабочий пример.
Формы, таблицы и создание проектов на стартовой странице работают с локальными данными;
это демонстрация интерфейса без сохранения данных на сервере.

## Проверки и сборки

```bash
npm test
npm run typecheck
npm run lint
npm run build
npm run build-storybook
npm run verify:catalog
npx playwright install --with-deps chromium --only-shell
npm run test:e2e
```

`verify:catalog` запускается после сборки Storybook и сверяет реальные story IDs.
`test:e2e` проверяет все 67 примеров и основные действия на стартовой странице.

Собранный сайт находится в `dist`, каталог — в `storybook-static`.
Workflow `verify.yml` выполняет проверки в чистом окружении без публикации сайта.

## Происхождение и лицензии

Компоненты установлены официальным `shadcn@4.22.1`.
[Официальная документация](https://ui.shadcn.com/docs).
Атрибуция и лицензии: [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
Результаты проверок: [docs/validation.md](docs/validation.md).

