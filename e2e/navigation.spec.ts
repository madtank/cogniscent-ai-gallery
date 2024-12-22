import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('navigates to blog from homepage', async ({ page }) => {
    // Start at homepage
    await page.goto('/');
    
    // Click desktop blog link if visible, otherwise use mobile menu
    const isMobile = await page.locator('.sm\\:hidden').isVisible();
    if (isMobile) {
      await page.click('button[aria-expanded="false"]');
      await page.click('text=Blog >> nth=1');
    } else {
      await page.click('text=Blog >> nth=0');
    }
    
    // Verify URL changed
    await expect(page).toHaveURL('/blog');
    
    // Verify blog content loaded
    await expect(page.locator('h1')).toContainText('Blog');
  });

  test('blog page shows post card', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for blog post card
    const blogPost = page.locator('.rounded-lg.border');
    await expect(blogPost).toBeVisible();
    await expect(blogPost).toContainText('The Creative Process: AI Art Generation');
    
    // Verify we can click through to a blog post
    await page.click('text=The Creative Process: AI Art Generation');
    await expect(page).toHaveURL(/\/blog\/creative-process/);
  });
});