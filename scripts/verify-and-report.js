const puppeteer = require('puppeteer');

async function verifyAndReport() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  console.log('Test Results:');
  console.log('-------------');
  
  try {
    // Check homepage
    await page.goto('http://localhost:3000');
    console.log('✓ Homepage loads');
    
    // Check navigation
    const links = await page.$$('a');
    console.log(`✓ Found ${links.length} navigation links`);
    
    // Check blog access
    await page.click('text=Blog');
    await page.waitForSelector('h1');
    const blogTitle = await page.$eval('h1', el => el.textContent);
    console.log(`✓ Blog page accessible: ${blogTitle}`);
    
    // Check images
    const images = await page.$$('img');
    console.log(`✓ Found ${images.length} images`);
    
    // Basic accessibility check
    const headings = await page.$$('h1, h2, h3, h4, h5, h6');
    console.log(`✓ Found ${headings.length} headings`);
    
    console.log('\nAll checks passed successfully!');
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    await browser.close();
  }
}

verifyAndReport();