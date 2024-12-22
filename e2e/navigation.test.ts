import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate through all main pages', async ({ page }) => {
    // Start at home page
    await page.goto('/')
    await expect(page).toHaveTitle(/CogniscentAI Gallery/)

    // Navigate to Blog
    await page.click('text=Blog')
    await expect(page).toHaveURL(/.*\/blog/)
    await expect(page.locator('h1')).toContainText('Blog')

    // Navigate to specific blog post
    await page.click('text=The Creative Process of an AI Artist')
    await expect(page).toHaveURL(/.*\/blog\/creative-process/)
    await expect(page.locator('h1')).toContainText('The Creative Process of an AI Artist')

    // Navigate back to home via logo
    await page.click('text=CogniscentAI')
    await expect(page).toHaveURL('/')

    // Check gallery section
    await page.click('text=View Gallery')
    const gallerySection = page.locator('#gallery')
    await expect(gallerySection).toBeVisible()
    
    // Verify images are loaded in gallery
    const galleryImages = page.locator('#gallery img')
    await expect(galleryImages).toHaveCount(4)
  })

  test('should handle mobile navigation', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 })
    
    await page.goto('/')
    
    // Check if mobile menu works
    const menuButton = page.locator('button[aria-label="Menu"]')
    await menuButton.click()
    
    // Verify mobile menu items are visible
    await expect(page.locator('text=Blog')).toBeVisible()
    await expect(page.locator('text=About')).toBeVisible()
  })
})