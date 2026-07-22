# Arquitetura — João Gomes Fã-Clube

## Decisões registradas (PICBRAND ARCH §32)

- **Dev responsável**: Julia Coimbra (julia.coimbra@picbrand.com.br)
- **Stack**: Next.js 16 (App Router) + TypeScript + Tailwind CSS 4, único
  serviço, sem backend
- **Arquitetura**: MVVM — frontend com estado de UI (roleta, rota ativa da
  nav via `usePathname`), sem regra de negócio server-side
- **Package manager**: npm (único, lockfile versionado)
- **Portas**: dev em `3000` (padrão Next.js, sugestão — sem exposição
  pública decidida neste momento)
- **Tema**: personalizado (identidade visual definida no briefing do
  produto, não o tema oficial Picbrand) — paleta completa fornecida no
  briefing, tokens centralizados em `src/app/globals.css`
- **Mocks**: `src/mocks/` (artist, fans, nextShow, agenda, ranking,
  products, travelPackages, mediaOffers, spinWheel, user) — únicos dados da
  aplicação. Agenda de shows e produtos da loja são **dados fictícios de
  exemplo** (decisão do responsável do produto em 2026-07-22), a substituir
  por dados reais quando fornecidos.

## Fora de escopo — justificativa

Este é um protótipo visual de front-end, sem backend real e sem necessidade
de persistência, autenticação ou deploy neste momento. Por decisão do
responsável do produto (registrada em 2026-07-22), os seguintes itens do
padrão Picbrand Arch são **N/A por ora**:

| Item | Status | Justificativa |
| --- | --- | --- |
| Backend/API real | N/A | Protótipo só-mock, sem regra de negócio server-side |
| PostgreSQL / storage | N/A | Nenhum dado é persistido |
| Deploy / Docker / CI-CD | N/A | Ainda não há alvo de deploy definido |
| Admin de negócio | N/A | Não há usuários/permissões reais |
| `/event` | N/A | Não há clientes/eventos neste produto |
| Backups | N/A | Nenhum dado é persistido |
| Autenticação real / MFA | N/A | Explicitamente fora de escopo (briefing do produto) |

Mantidos mesmo sem backend, por serem exigidos independentemente da stack:

- `GET /api/health` e `GET /api/ready` (route handlers simples)
- `GET /internal/picbrand/dashboard` — reservado, sempre 404 até ativação
  central (§14 do padrão master)
- `.env.example` (documenta a única flag existente)

Caso o produto avance para uma fase real (integração de API, autenticação,
deploy), reabrir o checklist completo do PICBRAND ARCH antes de prosseguir.
