import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test('navigates to blog from homepage', async ({ page }) => {
    // Start at homepage
    await page.goto('http://localhost:3000');
    
    // Click blog link
    const blogLink = page.locator('a[href="/blog"]');
    await blogLink.click();
    
    // Verify URL changed
    await expect(page).toHaveURL('http://localhost:3000/blog');
    
    // Verify blog content loaded
    await expect(page.locator('h1')).toContainText('Blog');
    await expect(page.locator('article')).toBeVisible();
  });

  test('blog page shows correct content', async ({ page }) => {
    await page.goto('http://localhost:3000/blog');
    
    // Check for blog post entries
    const blogPost = page.locator('article').first();
    await expect(blogPost).toBeVisible();
    await expect(blogPost).toContainText('The Creative Process: AI Art Generation');
    
    // Verify we can click through to a blog post
    await page.click('text=The Creative Process: AI Art Generation');
    await expect(page).toHaveURL(/\/blog\/creative-process/);
  });
});