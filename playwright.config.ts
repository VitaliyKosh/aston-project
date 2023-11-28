import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'html',
    use: {
        // baseURL: 'http://127.0.0.1:3010',
        trace: 'on-first-retry'
    },

    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] }
        },

        {
            name: 'firefox',
            use: { ...devices['Desktop Firefox'] }
        },

        {
            name: 'webkit',
            use: { ...devices['Desktop Safari'] }
        }
    ],

    webServer: {
        command: 'npm run start'
        // url: 'http://127.0.0.1:3010',
        // reuseExistingServer: !process.env.CI
    }
});
