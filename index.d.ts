// Type definitions for mockdate 2.0.2
// Project: mockdate
// Definitions by: Bruno Konrad <https://github.com/brunoskonrad>
//                 Kav Singh <https://github.com/kavsingh>

export = {
  set(date: Date | string | number, timezoneOffset?: number): void,
  reset(): void;
}
