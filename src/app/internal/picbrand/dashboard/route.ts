/*
 * Endpoint reservado do dashboard master Picbrand (PICBRAND ARCH §14).
 * Obrigatório em todo projeto, não é decisão do dev. Permanece desabilitado
 * até ativação central; sem métricas, sem comandos, sem segredo público.
 * Ativação futura via PICBRAND_DASHBOARD_ENABLED (auth serviço-a-serviço,
 * allowlist, TLS, tokens rotacionáveis — ver master-architecture.md).
 */
export function GET() {
  if (process.env.PICBRAND_DASHBOARD_ENABLED !== "true") {
    return new Response(null, { status: 404 });
  }

  return new Response(null, { status: 404 });
}
