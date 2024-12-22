import { test, expect } from '@playwright/test';

test.describe('Blog Navigation', () => {
  test('should navigate to blog from homepage', async ({ page }) => {
    await page.goto('/');
    // Use viewport size to determine mobile/desktop
    const viewportSize = page.viewportSize();
    if (viewportSize && viewportSize.width < 640) { // sm breakpoint in Tailwind
      await page.click('button[aria-label="Toggle navigation menu"]');
      await page.click('a[href="/blog"][role="menuitem"]');
    } else {
      await page.click('.sm\\:flex >> a[href="/blog"]');
    }
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
  });

  test('should display blog post card', async ({ page }) => {
    await page.goto('/blog');
    const blogPost = page.locator('.rounded-lg.border');
    await expect(blogPost).toBeVisible();
    await expect(blogPost).toContainText('The Creative Process: AI Art Generation');
  });

  test('should navigate to individual blog post', async ({ page }) => {
    await page.goto('/blog');
    await page.click('text=The Creative Process: AI Art Generation');
    await expect(page).toHaveURL('/blog/creative-process');
    await expect(page.locator('h1')).toContainText('The Creative Process: AI Art Generation');
  });

  test('should navigate back to blog listing', async ({ page }) => {
    await page.goto('/blog/creative-process');
    await page.click('text=Back to Blog');
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
  });

  test('mobile navigation menu works', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');
    await page.click('button[aria-label="Toggle navigation menu"]');
    await page.click('a[href="/blog"][role="menuitem"]');
    await expect(page).toHaveURL('/blog');
    await expect(page.locator('h1')).toContainText('Blog');
  });
});