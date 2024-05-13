import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://testing.powerus.de/",
    specPattern: 'cypress/e2e/tests/*.ts',
    viewportHeight: 1450,
    viewportWidth: 1000,
    supportFile: 'cypress/e2e/support/e2e.ts',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 15000,
    retries: {
      runMode: 1
    }
  }
});
