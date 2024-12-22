import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('navigates to blog from homepage', async ({ page }) => {
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