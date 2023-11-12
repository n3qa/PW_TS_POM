import { test as base } from '@playwright/test';

export type TestOptions = {
  globalQAurl: string;
  globalPRODurl:string;
};

export const test = base.extend<TestOptions>({  
  globalQAurl: ['', { option: true }],
  globalPRODurl: ['', { option: true }],
});