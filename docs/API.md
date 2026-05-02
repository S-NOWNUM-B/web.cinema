<div align="center">

# Web Cinema API

**Технический справочник по API, реализованному в проекте**

[![Next.js](https://img.shields.io/badge/Platform-Next.js-000000?logo=nextdotjs)](../app/frontend)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma)](app/frontend/prisma)

</div>

---

## Содержание

- [Базовые сведения](#базовые-сведения)
- [Ресурсы и эндпоинты (обзор)](#ресурсы-и-эндпоинты-обзор)
- [Форматы ответов](#форматы-ответов)
- [Аутентификация](#аутентификация)
- [Пагинация и фильтрация](#пагинация-и-фильтрация)
- [Где искать реализацию](#где-искать-реализацию)

---

## Базовые сведения

| Параметр | Значение |
| :------- | :------- |
| Базовый URL (dev) | `http://localhost:3000` |
| Базовый префикс API | `/api` (Next.js API routes / Server Actions) |
| Формат | `application/json` |

> Все серверные эндпоинты и Server Actions реализованы в `app/frontend/src/app/` и `app/frontend/prisma/` для доступа к данным.

---

## Ресурсы и эндпоинты (обзор)

Ниже — обзор ключевых ресурсов. Это ориентир: точный список и параметры можно сгенерировать из кода (см. раздел "Где искать реализацию").

- Movies
  - `GET /api/movies` — список фильмов (`page`, `limit`, `q`, `genreId`)
  - `GET /api/movies/:id` — детальная информация о фильме
  - `POST /api/movies` — создание (админ)

- Series / Seasons / Episodes
  - `GET /api/series`
  - `GET /api/series/:id`
  - `GET /api/series/:seriesId/seasons/:seasonId/episodes`

- Genres
  - `GET /api/genres`

- Auth / Users
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /api/users/me`

- Favorites / Watchlist
  - `GET /api/users/:id/favorites`
  - `POST /api/users/:id/favorites`
  - `DELETE /api/users/:id/favorites/:movieId`

- Progress
  - `POST /api/progress`
  - `GET /api/users/:id/progress`

- Search
  - `GET /api/search?q=...&type=movie|series`

---

## Форматы ответов

- Успех: `2xx` + JSON
- Ошибки: `4xx` / `5xx` + `{ message, code, details? }`

Пример:

```json
{
  "content": [ { "id": "1", "title": "Example" } ],
  "totalElements": 10,
  "totalPages": 1,
  "currentPage": 1
}
```

---

## Аутентификация

Используется JWT/session (зависит от конфигурации). Заголовок:

`Authorization: Bearer <token>`

---

## Пагинация и фильтрация

- Параметры: `page`, `limit`.
- Фильтрация: `genreId`, `year`, `q`.

---

## Где искать реализацию

- Next.js API routes и Server Actions: `app/frontend/src/app/api/` и `app/frontend/src/app/` (server components/actions).
- Prisma schema: `app/frontend/prisma/schema.prisma`.
- Сгенерированный клиент: `app/frontend/prisma/generated/prisma/client.ts`.

---

Если хотите, я могу пройтись по `app/frontend/src/app/api/` и сгенерировать точный список эндпоинтов и примеры ответов.
