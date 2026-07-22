export interface SpinWheelStatus {
  spinsAvailableToday: number;
}

// TODO: integrar API real — giros disponíveis da roleta diária
export const spinWheelStatus: SpinWheelStatus = {
  spinsAvailableToday: 3,
};
