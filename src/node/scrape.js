import { launch } from 'puppeteer';
import { writeFileSync } from 'fs';

(async () => {
    // Launch a headless browser instance
    const browser = await launch({
        executablePath: process.env.CHROME_BIN || null,
        headless: "new",
        timeout: 0
    });

    // Open a new page
    const page = await browser.newPage();

    // Navigate to the URL you want to scrape
    await page.goto('https://phys.org/physics-news/sort/popular/1w/');

    // Wait for any necessary page content to load (you may need to adjust the selector)
    await page.waitForSelector('.sorted-news-list');

    // Extract the content of the div container
    const content = await page.$eval('.sorted-news-list', (div) => div.innerHTML);

    // Extract the content of the div container
    writeFileSync('src/data/output.html', content);
    // fs.writeFileSync(__dirname + '\\..\\data\\output.html', content);

    console.log('Content extracted and saved to output.html');

    await browser.close();
})();