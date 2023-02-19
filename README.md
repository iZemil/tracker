# Tracker

[Task description](https://fundraiseup.notion.site/Fullstack-test-d63f18de664645cd8529eccc735c22fa) or [html file](./task.html).

## Development

1. install mongodb and run it
2. install node dependencies `npm ci`
3. set up [default env variables](./.env)
4. run development services:
    - develop [back app](./packages/back/src/main.ts) `npm run dev:back`
    - develop [tracker lib](./packages/tracker/src/tracker.ts) `npm run dev:tracker`
    - or both `npm run dev`

## Notes

-   затраченное время: 10h (среда разработки 4h / основной код 5h / рефакторинг 1h)
-   сложности в процессе работы:
    -   нестандартная сборка с билдом клиентской либы
    -   организация express кода
