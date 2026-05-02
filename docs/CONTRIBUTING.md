<div align="center">

# Contributing to Web Cinema

**Руководство по вкладу и процессу ревью**

</div>

---

## Содержание

- [Процесс](#процесс)
- [Требования к PR](#требования-к-pr)
- [Commit сообщения](#commit-сообщения)
- [Локальная проверка](#локальная-проверка)
- [CI и ветки](#ci-и-ветки)

---

## Процесс

- Основные ветки: `dev` (разработка), `main` (релизы).
- Создавайте ветки от `dev` с префиксами: `feature/`, `fix/`, `docs/`, `chore/`.

Пример:

```bash
git fetch origin
git checkout -b docs/update-docs origin/dev
```

---

## Требования к PR

- Один PR должен решать одну задачу.
- Новая функциональность — с тестами.
- Обновляйте документацию при изменении поведения.
- Не коммитьте секреты и `.env`.

Чек-лист:

- [ ] Ветка синхронизирована с `dev`
- [ ] Локальные проверки (`pnpm --filter frontend lint`, `pnpm --filter frontend build`) проходят
- [ ] Тесты добавлены/обновлены при необходимости
- [ ] Документация обновлена

---

## Commit сообщения

Следуйте Conventional Commits:

```
<type>(<scope>): <subject>
```

Типы: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`.

---

## Локальная проверка

Команды для frontend (app/frontend):

```bash
# запуск dev сервера
pnpm --filter frontend dev

# сборка
pnpm --filter frontend build

# линт
pnpm --filter frontend lint
```

---

## CI и ветки

- CI запускает линт, сборку и тесты на каждом PR.
- Мердж в `main` через релиз-процесс после зелёного CI и одобрения ревью.

---

Хочу также предложить: добавить шаблон PR (`.github/PULL_REQUEST_TEMPLATE.md`) и `ISSUE_TEMPLATE` — могу создать их в следующем шаге.
