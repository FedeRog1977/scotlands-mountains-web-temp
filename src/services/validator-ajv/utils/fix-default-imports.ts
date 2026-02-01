export const fixDefaultImport = <T extends { default: unknown }>(module: T): T['default'] =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, @typescript-eslint/no-unnecessary-type-assertion
  module as unknown as typeof module.default;
