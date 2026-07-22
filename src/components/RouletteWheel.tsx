"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useFanClub } from "@/context/FanClubContext";
import { wheelPrizes, type WheelPrize } from "@/mocks/wheelPrizes";

const SEGMENT_ANGLE = 360 / wheelPrizes.length;
const EXTRA_SPINS = 6 * 360;
const SPIN_DURATION_MS = 4200;

function formatCountdown(ms: number) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds]
    .map((unit) => String(unit).padStart(2, "0"))
    .join(":");
}

interface RouletteWheelProps {
  onClose: () => void;
}

export default function RouletteWheel({ onClose }: RouletteWheelProps) {
  const { spinsRemaining, nextSpinAt, consumeSpin, recordPrizeWin } =
    useFanClub();
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<WheelPrize | null>(null);
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!nextSpinAt) return;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [nextSpinAt]);

  const isOnCooldown = nextSpinAt !== null && now < nextSpinAt;

  const conicGradient = `conic-gradient(${wheelPrizes
    .map(
      (prize, i) =>
        `${prize.color} ${i * SEGMENT_ANGLE}deg ${(i + 1) * SEGMENT_ANGLE}deg`,
    )
    .join(", ")})`;

  const handleSpin = () => {
    if (isSpinning || !consumeSpin()) return;

    const winningIndex = Math.floor(Math.random() * wheelPrizes.length);
    const targetTheta = winningIndex * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
    const currentMod = ((rotation % 360) + 360) % 360;
    const targetMod = (360 - targetTheta) % 360;
    const delta = ((targetMod - currentMod) % 360 + 360) % 360;

    setResult(null);
    setIsSpinning(true);
    setRotation((prev) => prev + EXTRA_SPINS + delta);

    window.setTimeout(() => {
      setIsSpinning(false);
      const wonPrize = wheelPrizes[winningIndex];
      setResult(wonPrize);
      if (wonPrize.type === "coupon") {
        recordPrizeWin({
          brand: wonPrize.brand!,
          discountLabel: wonPrize.discountLabel!,
          couponCode: wonPrize.couponCode!,
        });
      }
    }, SPIN_DURATION_MS);
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/85 px-6">
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
      >
        <X size={20} />
      </button>

      <p className="text-xs font-bold tracking-wide text-accent">
        GIRE E GANHE
      </p>

      <div className="relative h-72 w-72">
        <div className="absolute left-1/2 -top-1 z-10 -translate-x-1/2">
          <div className="h-0 w-0 border-x-8 border-t-[18px] border-x-transparent border-t-white" />
        </div>

        <div
          className="h-72 w-72 rounded-full border-4 border-white shadow-2xl"
          style={{
            background: conicGradient,
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning
              ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.17,0.67,0.12,1)`
              : "none",
          }}
        >
          {wheelPrizes.map((prize, i) => {
            const theta = i * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
            return (
              <div
                key={prize.id}
                className="absolute inset-0"
                style={{ transform: `rotate(${theta}deg)` }}
              >
                {prize.type === "coupon" ? (
                  <div
                    className="absolute left-1/2 top-4 -translate-x-1/2"
                    style={{
                      transform: `rotate(${-theta - rotation}deg)`,
                      transition: isSpinning
                        ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.17,0.67,0.12,1)`
                        : "none",
                    }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white p-2 shadow-md">
                      <Image
                        src={prize.logoUrl!}
                        alt={prize.brand!}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className="absolute left-1/2 top-14 -translate-x-1/2"
                    style={{
                      transform: `rotate(${-theta - rotation}deg)`,
                      transition: isSpinning
                        ? `transform ${SPIN_DURATION_MS}ms cubic-bezier(0.17,0.67,0.12,1)`
                        : "none",
                    }}
                  >
                    <span className="block w-10 text-center text-[8px] font-bold leading-tight text-white/80">
                      TENTE
                      <br />
                      NOVAMENTE
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow" />
      </div>

      <div className="flex min-h-20 flex-col items-center justify-center gap-2 text-center">
        {result &&
          (result.type === "coupon" ? (
            <>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white p-1.5 shadow-md">
                <Image
                  src={result.logoUrl!}
                  alt={result.brand!}
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="text-base font-bold text-white">
                Parabéns! {result.discountLabel} em {result.brand}
              </p>
              <p className="rounded-lg bg-white/10 px-4 py-2 font-mono text-sm tracking-widest text-accent">
                {result.couponCode}
              </p>
            </>
          ) : (
            <p className="text-base font-bold text-white">
              Não foi dessa vez! Volte amanhã para tentar de novo.
            </p>
          ))}
      </div>

      <button
        type="button"
        onClick={handleSpin}
        disabled={isSpinning || spinsRemaining <= 0 || isOnCooldown}
        className="rounded-full bg-accent px-8 py-3 text-sm font-bold text-accent-foreground disabled:opacity-40"
      >
        {isSpinning
          ? "GIRANDO..."
          : isOnCooldown
            ? `PRÓXIMO GIRO EM ${formatCountdown(nextSpinAt! - now)}`
            : spinsRemaining > 0
              ? result
                ? "GIRAR NOVAMENTE"
                : "GIRAR"
              : "SEM GIROS HOJE"}
      </button>

      <p className="text-xs font-semibold text-white/60">
        {spinsRemaining} {spinsRemaining === 1 ? "GIRO" : "GIROS"} RESTANTE
        {spinsRemaining === 1 ? "" : "S"} HOJE · 1 GIRO A CADA 2H
      </p>
    </div>
  );
}
