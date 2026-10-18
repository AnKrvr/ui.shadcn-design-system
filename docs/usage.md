# Создание сайтов на этой основе

## Первая страница

Замените содержимое src/App.tsx и сохраните ThemeProvider.
TooltipProvider и Toaster нужны, если используете подсказки и уведомления.

```tsx
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

export default function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <main className="mx-auto max-w-6xl px-5 py-12">
          <h1 className="text-4xl font-semibold tracking-tight">Мой сайт</h1>
          <Button className="mt-6">Начать</Button>
        </main>
      </TooltipProvider>
    </ThemeProvider>
  )
}
```

## Что редактировать

Для страницы используйте композицию компонентов и классы Tailwind.
Для изменения всей системы редактируйте семантические токены в globals.css.
Например, primary и primary-foreground отвечают за основное действие.
Меняйте значения и в :root, и в .dark, затем проверьте контраст и состояния.

src/styles/shadcn.css — локальные штатные утилиты из shadcn@4.22.1.
Они вынесены из CLI-пакета, чтобы приложение не зависело от инструментов генерации.
При обновлении CLI сравните соответствующий upstream CSS отдельно.

## Добавление компонентов

В текущем снимке каталога компоненты уже установлены.
Для последующих дополнений можно использовать официальный CLI:

```bash
npx shadcn@4.22.1 add имя-компонента
```

CLI читает components.json. Не используйте --overwrite без просмотра изменений:
исходные файлы могут содержать вашу адаптацию.
Если CLI снова добавит импорт shadcn/tailwind.css, сохраните единственный
актуальный источник общих утилит и проверьте обе сборки.

## Составные паттерны

DatePicker принимает value и onChange. Для доступной подписи передайте id
и свяжите с ним Label через htmlFor; также поддерживаются aria-label и aria-describedby.
DataTable принимает columns и data из TanStack Table; filterColumn включает поиск.
TypographyDemo показывает базовую иерархию текста.

Таблица и форма в StarterPage используют демонстрационные данные. Для реального
сайта подключите данные в предметных компонентах, сохранив общие UI-компоненты
независимыми от API.

## Перенос в новый репозиторий

```bash
git clone --branch feat/shadcn-site-starter https://github.com/AnKrvr/ui.shadcn-design-system.git my-site
cd my-site
git remote set-url origin https://github.com/ВАШ-АККАУНТ/НОВЫЙ-РЕПОЗИТОРИЙ.git
npm ci
npm run dev
```

Команда выше использует ветку реализации до слияния PR.
После слияния в main параметр --branch feat/shadcn-site-starter можно убрать.

Переименуйте проект в package.json, обновите README и содержимое страниц.
Сохраняйте исходные лицензии и правила системы.

## Сборка

npm run build создаёт dist. Его можно разместить на статическом хостинге.
npm run build-storybook создаёт storybook-static — отдельный статический каталог.
Выберите корректный base в vite.config.ts, если сайт размещается в подпапке.

В браузерных тестах можно задать PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH для уже
установленного Chromium. В обычном окружении это не требуется.

