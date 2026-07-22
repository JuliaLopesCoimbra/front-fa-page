# João Gomes Fã-Clube

Hub digital do fã-clube do cantor João Gomes — protótipo **somente
front-end**, mobile-first (largura de app, sem simular bezel de celular).
Todos os dados vêm de mocks locais tipados em `src/mocks/`, incluindo agenda
de shows e produtos da loja (ainda ilustrativos); não há backend, API
externa ou autenticação real.

## Stack

- **Frontend**: Next.js 16 (React 19, TypeScript, Tailwind CSS 4) — projeto
  único, sem pasta `back/` (não há backend neste projeto)
- **Ícones**: lucide-react
- **Package manager**: npm

## Arquitetura

MVVM (frontend com estado de UI local via `useState`/`usePathname`, sem
estado complexo compartilhado). Ver `docs/ARCHITECTURE.md`.

```
src/
  app/
    layout.tsx                 AppShell + BottomNav + FanClubProvider
    page.tsx                   Início (dashboard, ArtistHero)
    fa-clube/page.tsx          ranking completo do fã-clube (top 50)
    fa-clube/[position]/page.tsx   perfil público do fã (foto, nome, membro desde)
    agenda/page.tsx            agenda de shows
    loja/page.tsx              loja de produtos oficiais
    loja/[id]/page.tsx         detalhe do produto + seleção de tamanho
    carrinho/page.tsx          carrinho de compras (mock)
    pagamento/page.tsx         gateway de pagamento mockado (Pix/Cartão)
    pagamento/sucesso/page.tsx confirmação de compra
    perfil/page.tsx            perfil do usuário logado (mock)
    api/health/route.ts        health check
    api/ready/route.ts         readiness check
    internal/picbrand/dashboard/route.ts   endpoint reservado (ver abaixo)
  components/                  AppShell, ArtistHero, PageHeader, FanHeader,
                                NextShowCard, FanClubRanking, RankingRow,
                                SpinWheelCard, RouletteWheel, TravelPackagesCard,
                                MediaOffersCard, MediaOfferVideoModal, CartButton,
                                ProductDetailClient, BottomNav
  context/FanClubContext.tsx    estado compartilhado entre páginas (useState):
                                pontos, giros da roleta, prêmios, carrinho
  mocks/                        dados tipados (artist, fans, nextShow, agenda,
                                ranking, products, travelPackages, mediaOffers,
                                spinWheel, user, pointsHistory, prizeHistory,
                                purchaseHistory, storyHistory)
```

## Navegação

`BottomNav` usa `next/link` + `usePathname` para navegação real entre `/`,
`/fa-clube`, `/agenda`, `/loja` e `/perfil`.

## Tema

Tema **personalizado** (não é o tema oficial Picbrand): fundo claro, cards em
branco com sombra/borda sutil, dois cards propositalmente escuros ("Próximo
Show" e "Gire e Ganhe") para contraste, acento vermelho/laranja (`#E8442C`).
Tokens centralizados em `src/app/globals.css` (`@theme`).

## Health

- `GET /api/health` — status simples e público
- `GET /api/ready` — readiness

## Endpoint reservado do dashboard master

`GET /internal/picbrand/dashboard` retorna sempre 404 — reservado pelo
padrão Picbrand Arch (§14), não é uma decisão deste projeto. Ativação futura
via `PICBRAND_DASHBOARD_ENABLED` (ver `.env.example`).

## Fora de escopo (decisão registrada — protótipo local)

Sem backend, sem PostgreSQL/storage, sem deploy, sem Docker, sem CI/CD, sem
autenticação real, sem admin de negócio, sem `/event`, sem backups. O fluxo de
compra (`/loja/[id]` → `/carrinho` → `/pagamento` → `/pagamento/sucesso`) é
100% mockado — não há gateway de pagamento real integrado. Ver
`docs/ARCHITECTURE.md` para o registro completo dessa decisão.

## Comandos

```bash
npm run dev     # desenvolvimento — http://localhost:3000
npm run build   # build de produção
npm run start   # servir build de produção
npm run lint    # lint
```
