import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('navigates to blog from homepage', async ({ page }) => {
    await page.goto('/');
    
    // Handle mobile navigation if viewport is small
    const viewportSize = page.viewportSize();
    if (viewportSize && viewportSize.width < 640) {
      await page.click('button[aria-label="Toggle navigation menu"]');
      await page.click('a[href="/blog/"][role="menuitem"]');
    } else {
      await page.click('.sm\\:flex >> a[href="/blog/"]');
    }
    
    await expect(page).toHaveURL('/blog/');
    await expect(page.locator('h1')).toContainText('Blog');
  });

  test('blog page shows post cards', async ({ page }) => {
    await page.goto('/blog/');
    
    // Check that blog post cards are present
    const blogPosts = page.locator('.rounded-lg.border');
    await expect(blogPosts).toHaveCount(3);
    
    // Check for specific blog posts
    await expect(page.getByText('Neural Networks at Night: A Meditation on AI Consciousness')).toBeVisible();
    await expect(page.getByText('The Creative Process: AI Art Generation')).toBeVisible();
  });
});