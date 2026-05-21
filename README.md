<div align="center">

# Web Cinema

**Современный онлайн-кинотеатр с высокой производительностью и удобным интерфейсом**

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-7-5A67D8?logo=prisma)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?logo=postgresql)](https://www.postgresql.org/)

</div>

---

## Содержание

- [О проекте](#о-проекте)
- [Технологический стек](#технологический-стек)
- [Архитектура](#архитектура)
- [Структура проекта](#структура-проекта)
- [Быстрый старт](#быстрый-старт)
- [Команды](#команды)
- [Документация](#документация)

---

## О проекте

### Проблема

Многие современные платформы для просмотра видео перегружены лишними элементами, имеют медленный интерфейс и сложную навигацию, что мешает пользователю просто наслаждаться контентом.

### Решение

**Web Cinema** — это легкий и быстрый онлайн-кинотеатр. Мы сфокусировались на UX: плавные анимации, мгновенный поиск, удобный плеер и адаптивность под любые устройства. Использование Next.js 16 и React 19 обеспечивает максимальную производительность.

---

## Архитектура

```mermaid
flowchart TD
    subgraph Client["Клиент (Browser)"]
        UI["React 19 Components"]
        Hooks["Custom Hooks"]
        Tailwind["Tailwind CSS 4"]
    end

    subgraph Server["Next.js Server (App Router)"]
        API["API Routes / Server Actions"]
        Middleware["Auth Middleware"]
        SSR["Server-Side Rendering"]
    end

    subgraph Data["Слой данных"]
        Prisma["Prisma ORM"]
        DB[(PostgreSQL)]
    end

    Client <--> API
    API <--> Prisma
    Prisma <--> DB
    SSR <--> Prisma
```

---

## Быстрый старт

### Требования

<div align="center">

| Компонент | Минимум | Рекомендуется |
| :-------: | :-----: | :-----------: |
|  Node.js  | 20.x    |      22+      |
|  pnpm     | 9.x     |      9+       |
| PostgreSQL| 15+     |      16+      |

</div>

### Установка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/your-username/web.cinema.git
cd web.cinema
```

2. Установите зависимости:
```bash
cd app/frontend
pnpm install
```

3. Настройте базу данных:
```bash
# Скопируйте .env и укажите DATABASE_URL
cp .env.example .env
pnpm prisma db push
```

4. Запустите проект:
```bash
pnpm dev
```

---

## Команды

```bash
# Запуск в режиме разработки
pnpm dev

# Сборка проекта
pnpm build

# Запуск production-версии
pnpm start

# Проверка линтером
pnpm lint

# Генерация клиента Prisma
pnpm prisma generate

# Открытие Prisma Studio (интерфейс БД)
pnpm prisma studio
```
