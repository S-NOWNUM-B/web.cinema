<div align="center">

# Web Cinema Frontend

**Пользовательский интерфейс онлайн-кинотеатра на базе Next.js 16**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-latest-000000?logo=shadcnui)](https://ui.shadcn.com/)

</div>

---

## Содержание

- [Технологии](#технологии)
- [Архитектура](#архитектура)
- [Компоненты](#компоненты)
- [Разработка](#разработка)
- [Линтинг и форматирование](#линтинг-и-форматирование)

---

## Технологии

<div align="center">

|      **Категория**       |                                    **Технологии**                                     |        **Детали**                  |
| :----------------------: | :-----------------------------------------------------------------------------------: | :--------------------------------: |
|        Framework         |                          [Next.js (App Router)](https://nextjs.org/)                 |                16.2.x              |
|           UI             |                           [React (Stable)](https://react.dev/)                |                19.x                |
|          Сборка          |                                     Next.js Bundler                                   |                Speed-optimized     |
|          Стили           |                             [Tailwind CSS](https://tailwindcss.com/)                  |                v4 (Alpha/Beta)     |
|       Компоненты         |                             [Shadcn UI](https://ui.shadcn.com/)                       |                Radix Primitives    |
|        Анимации          |                           [Framer Motion](https://www.framer.com/motion/)             |                Hardware accelerated|
|         Иконки           |                            [Lucide React](https://lucide.dev/)                        |                Vector icons        |

</div>

---

## Архитектура

Мы придерживаемся модульной структуры, разделяя логику и представление:

- `src/app/`: Определение маршрутов (pages), макетов (layouts) и серверных API.
- `src/components/ui/`: Атомарные компоненты из библиотеки Shadcn (кнопки, инпуты).
- `src/components/cinema/`: Высокоуровневые компоненты проекта (плеер, карточки фильмов).
- `src/lib/`: Общие утилиты, хуки и конфигурации (Prisma client, вспомогательные функции).

---

## Компоненты

В проекте используется **Shadcn UI**, что позволяет иметь полный контроль над кодом компонентов.

### Кастомизация стилей
Все стили управляются через Tailwind CSS. Основные настройки темы находятся в `src/app/global.css` и `tailwind.config.ts` (если используется).

### Пример использования компонента
```tsx
import { Button } from "@/components/ui/button"

export function WatchButton() {
  return <Button variant="default">Смотреть бесплатно</Button>
}
```

---

## Разработка

### Установка зависимостей
```bash
pnpm install
```

### Запуск dev-сервера
```bash
pnpm dev
```

### Сборка проекта
```bash
pnpm build
```

### Предпросмотр сборки
```bash
pnpm start
```

---

## Линтинг и форматирование

Для поддержания качества кода используются ESLint и Prettier.

```bash
# Проверка кода
pnpm lint

# Автоисправление ошибок (если настроено)
pnpm lint --fix
```

### Правила именования
- Компоненты: `PascalCase` (например, `MovieCard.tsx`)
- Утилиты и функции: `camelCase` (например, `formatDate.ts`)
- Директории: `kebab-case`
