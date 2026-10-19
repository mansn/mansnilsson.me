import { expect, test } from '@playwright/test'

test('home page shows name and intro', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Måns Nilsson'
  )
})

test('header navigation works', async ({ page }) => {
  await page.goto('/')
  const nav = page.getByRole('navigation')

  await nav.getByRole('link', { name: 'About' }).click()
  await expect(page).toHaveURL('/about')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    "Hi, I'm Måns Nilsson"
  )

  await nav.getByRole('link', { name: 'Blog' }).click()
  await expect(page).toHaveURL('/blog')
})

test('blog lists posts and opens one', async ({ page }) => {
  await page.goto('/blog')

  const postLinks = page.locator('ul a[href^="/blog/"]')
  await expect(postLinks.first()).toBeVisible()

  const firstPost = postLinks.first()
  const title = (await firstPost.textContent())?.trim() ?? ''
  await firstPost.click()

  await expect(page).toHaveURL(/\/blog\/.+/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(title)
  await expect(page.getByText('Posted on:')).toBeVisible()
})

test('unknown post shows not found', async ({ page }) => {
  const response = await page.goto('/blog/this-post-does-not-exist')

  expect(response?.status()).toBe(404)
  await expect(
    page.getByRole('heading', { name: 'Post Not Found' })
  ).toBeVisible()
})
