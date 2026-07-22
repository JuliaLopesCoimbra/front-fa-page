import { Briefcase } from "lucide-react";
import { travelPackagesSummary } from "@/mocks/travelPackages";

const TRAVEL_PACKAGES_URL =
  "https://www.decolar.com/ofertas-viagens/pacotes-completos-sao?clt_cc=BR&clt_pr=X&clt_locationid=9197522&clt_d=c&clt_accountid=1359067460&clt_adgroupid=199043603472&clt_cm=24044247523&clt_n=g&clt_c=817220877749&clt_targetid=kwd-344377336716&clt_kw=pacotes%20de%20viagem&adjust_t=esobv7_ffxd4s_3fh53i&utm_source=google&utm_medium=cpc&utm_campaign=BR_P_DESPEGAR_GENE-2-NCO&utm_id=24044247523&utm_term=pacotes%20de%20viagem&adjust_tracker_limit=1000000000&clt_key=UT81AK9JAFEGJ4D69OVO6J673E&gad_source=1&gad_campaignid=24044247523&gclid=CjwKCAjw1IHTBhAaEiwA4AYNFnvp3AtHjGvMudIcN1DfrEMWenBOssZjaemiZbaTrB_4zxYeN_KYfxoCH4EQAvD_BwE";

export default function TravelPackagesCard() {
  return (
    <a
      href={TRAVEL_PACKAGES_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between rounded-2xl border border-border bg-surface p-4 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold tracking-wide text-accent">
          PACOTES DE VIAGEM
        </p>
        <Briefcase size={18} className="text-foreground/70" />
      </div>
      <p className="mt-6 text-sm font-semibold text-foreground">
        {travelPackagesSummary.newPackagesCount} NOVOS PACOTES · A PARTIR DE R$
        {travelPackagesSummary.startingPriceInBRL.toLocaleString("pt-BR")}
      </p>
    </a>
  );
}
